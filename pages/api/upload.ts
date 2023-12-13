// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { Readable } from 'stream';
import { PrismaClient } from '@prisma/client';
const csvParser = require('csv-parse');

const upload = multer({ dest: '/tmp' });
const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadMiddleware = multer().single('file');

async function processRow(row) {
  let group = await prisma.group.findUnique({
    where: {
      title: row.groupTitle,
    },
  });

  if (!group) {
    group = await prisma.group.create({
      data: {
        title: row.groupTitle,
      },
    });
  }

  let product = await prisma.product.findUnique({
    where: {
      title: row.productTitle,
    },
  });
  
  if (!product) {
    product = await prisma.product.create({
      data: {
        title: row.productTitle,
        groupId: group.id,
      },
    });
  }

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
      recommended: row.recommendedHeight === 'true',
      capacityId: capacity.id,
    },
  });

  const power = await prisma.power.create({
    data: {
      title: row.powerTitle,
      recommended: row.recommendedPower === 'true',
      heightId: height.id,
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
      bufferStream.push(null); // Significa que acabamos de adicionar dados ao stream
    
      const results = [];
      
      bufferStream
        .pipe(csvParser.parse({ columns: true }))
        .on('data', (data) => results.push(data))
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