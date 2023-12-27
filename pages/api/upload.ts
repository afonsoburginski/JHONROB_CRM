// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { Readable } from 'stream';
import { PrismaClient } from '@prisma/client';
const csvParser = require('csv-parse');

interface DataRow {
  groupTitle: string;
  productTitle: string;
  modelTitle: string;
  typeTitle: string;
  capacityTitle: string;
  heightTitle: string;
  recommendedHeight: string;
  powerTitle: string;
  recommendedPower: string;
  // Adicione mais campos conforme necessário
}

const upload = multer({ dest: '/tmp' });
const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadMiddleware = multer().single('file');

async function processRow(row: DataRow) {
  let group = await prisma.group.upsert({
    where: { title: row.groupTitle },
    update: {},
    create: { title: row.groupTitle },
  });

  let product = await prisma.product.upsert({
    where: { title: row.productTitle },
    update: {},
    create: {
      title: row.productTitle,
      group: { connect: { id: group.id } },
    },
  });

  let model = await prisma.model.create({
    data: {
      title: row.modelTitle,
      product: { connect: { id: product.id } },
    },
  });

  let type = await prisma.type.create({
    data: {
      title: row.typeTitle,
      product: { connect: { id: product.id } },
    },
  });

  let capacity = await prisma.capacity.create({
    data: {
      title: row.capacityTitle,
      model: { connect: { id: model.id } },
    },
  });

  let height = await prisma.height.create({
    data: {
      title: row.heightTitle,
      recommended: row.recommendedHeight === 'true',
      capacity: { connect: { id: capacity.id } },
    },
  });

  let power = await prisma.power.create({
    data: {
      title: row.powerTitle,
      recommended: row.recommendedPower === 'true',
      height: { connect: { id: height.id } },
    },
  });
}

const apiRoute = (req, res) => {
  if (req.method === 'POST') {
    uploadMiddleware(req, res, async (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      const bufferStream = new Readable();
      bufferStream.push(req.file.buffer);
      bufferStream.push(null);

      const results: DataRow[] = [];

      bufferStream
        .pipe(csvParser.parse({ columns: true, delimiter: ',', relax: true }))
        .on('data', (data: DataRow) => results.push(data))
        .on('end', async () => {
          try {
            for (const row of results) {
              await processRow(row);
            }
            res.status(200).json({ message: 'Dados importados com sucesso!' });
          } catch (error) {
            console.error('Erro detalhado:', error);
            res.status(500).json({ error: 'Erro ao importar dados' });
          }
        });
    });
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
};

export default apiRoute;