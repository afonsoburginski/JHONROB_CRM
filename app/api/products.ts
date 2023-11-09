// pages/api/products.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const products = await PrismaClient.product.findMany({
      include: {
        models: {
          include: {
            capacities: {
              include: {
                heights: true,
              },
            },
          },
        },
      },
    });

    return res.status(200).json(products);
  }

  // Adicione lógica para outras operações (POST, PUT, DELETE) conforme necessário

  res.status(404).end();
}
