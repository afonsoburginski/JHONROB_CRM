// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { Readable } from 'stream';
import { PrismaClient } from '@prisma/client';
const csvParser = require('csv-parse'); // Altere esta linha

const upload = multer({ dest: '/tmp' });
const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadMiddleware = multer().single('file');

const apiRoute = (req, res) => {
  if (req.method === 'POST') {
    uploadMiddleware(req, res, async (err) => {
      if (err) {
        return res.status(500).json(err);
      }
    
      const bufferStream = new Readable();
      bufferStream.push(req.file.buffer);
      bufferStream.push(null); // Significa que acabamos de adicionar dados ao stream
    
      const results = [];
      
        bufferStream
        .pipe(csvParser.parse({ columns: true })) // Altere esta linha
        .on('data', (data) => results.push(data))
        .on('end', async () => {
          try {
            for (const row of results) {
              const group = await prisma.group.create({
                data: {
                  title: row.groupTitle,
                },
              });

              const product = await prisma.product.create({
                data: {
                  title: row.productTitle,
                  groupId: group.id,
                },
              });

              const model = await prisma.model.create({
                data: {
                  title: row.modelTitle,
                  productId: product.id,
                },
              });

              const type = await prisma.type.create({
                data: {
                  title: row.typeTitle,
                  productId: product.id,
                },
              });

              const capacity = await prisma.capacity.create({
                data: {
                  title: row.capacityTitle,
                  modelId: model.id,
                },
              });

              const height = await prisma.height.create({
                data: {
                  title: row.heightTitle,
                  recommended: row.recommended,
                  capacityId: capacity.id,
                },
              });

              const power = await prisma.power.create({
                data: {
                  title: row.powerTitle,
                  recommended: row.recommended,
                  heightId: height.id,
                },
              });
            }
            res.status(200).json({ message: 'Dados importados com sucesso!' });
          } catch (error) {
            res.status(500).json({ error: 'Erro ao importar dados' });
          }
        });
    });
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
};

export default apiRoute;