// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import * as Papa from 'papaparse';
import multer from 'multer';
import { Readable } from 'stream';
import { PrismaClient } from '@prisma/client';
const csvParser = require('csv-parse');

interface DataRow {
  groupTitle: string;
  productTitle: string;
  tag: string; // tag agora está associada ao produto
  modelTitle: string;
  typeTitle: string;
  capacityTitle: string;
  heightTitle: string;
  recommendedHeight: string;
  powerTitle: string;
  recommendedPower: string;
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
  if (!row.groupTitle || !row.productTitle || !row.modelTitle || !row.typeTitle || !row.capacityTitle || !row.heightTitle || !row.powerTitle) {
    console.error('Linha mal formatada ignorada:', row);
    return;
  }

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
      tag: row.tag, // tag agora está associada ao produto
      group: { connect: { id: group.id } },
    },
  });

  let model = await prisma.model.upsert({
    where: { title: row.modelTitle },
    update: {},
    create: { title: row.modelTitle },
  });

  let type = await prisma.type.upsert({
    where: { title: row.typeTitle },
    update: {},
    create: { title: row.typeTitle },
  });

  // Conectando o produto ao modelo e tipo
  await prisma.product.update({
    where: { id: product.id },
    data: {
      models: { connect: { id: model.id } },
      types: { connect: { id: type.id } },
    },
  });

  let capacity = await prisma.capacity.upsert({
    where: { title: row.capacityTitle },
    update: {},
    create: {
      title: row.capacityTitle,
      model: { connect: { id: model.id } },
    },
  });

  let height = await prisma.height.upsert({
    where: { title: row.heightTitle },
    update: {},
    create: {
      title: row.heightTitle,
      recommended: row.recommendedHeight === 'true',
      capacity: { connect: { id: capacity.id } },
    },
  });

  let power = await prisma.power.upsert({
    where: { title: row.powerTitle },
    update: {},
    create: {
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

      const csvData = req.file.buffer.toString('utf8');

      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        complete: async (results) => {
          try {
            for (const row of results.data) {
              await processRow(row);
            }
            res.status(200).json({ message: 'Dados importados com sucesso!' });
          } catch (error) {
            console.error('Erro detalhado:', error);
            res.status(500).json({ error: 'Erro ao importar dados' });
          }
        },
        error: (error) => {
          console.error('Erro ao processar CSV:', error);
          res.status(500).json({ error: 'Erro ao processar CSV' });
        }
      });
    });
    res.status(200).json({ message: 'Upload concluído com sucesso!' });
  }
};

export default apiRoute;