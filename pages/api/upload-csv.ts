/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
const upload = multer({
  storage: multer.memoryStorage(),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    upload.single('file')(req, res, async (err: any) => {
      if (err) {
        console.error('Erro no upload do arquivo:', err);
        return res.status(500).end('Erro no servidor');
      }

      const buffer = req.file.buffer.toString('utf-8');
      const csvData = buffer.split('\n').map((line: string) => line.split(','));

      // Processa cada linha do CSV
      for (const data of csvData) {
        // Processa a lógica para cada modelo
        const [modelName, ...rowData] = data;
        await processModelData(modelName, rowData);
      }

      res.status(200).end('Upload bem-sucedido!');
    });
  } catch (error) {
    console.error('Erro no upload do CSV:', error);
    res.status(500).end('Erro no servidor');
  } finally {
    // Fechar a conexão com o Prisma Client
    await prisma.$disconnect();
  }
};

// Função para processar os dados do modelo específico
async function processModelData(modelName: string, rowData: string[]) {
  const model = (prisma as any)[modelName.toLowerCase()]; // Converte o nome do modelo para minúsculas

  if (!model) {
    console.warn(`Modelo '${modelName}' não reconhecido.`);
    return;
  }

  const modelFields = Object.keys(Prisma[modelName].prototype);

  const dataObject: Record<string, any> = {};
  for (let i = 0; i < modelFields.length; i++) {
    const field = modelFields[i];
    const value = rowData[i];

    // Adapte conforme necessário para tipos específicos (por exemplo, convertendo para inteiro)
    dataObject[field] = value;
  }

  await model.create({
    data: dataObject,
  });
}
