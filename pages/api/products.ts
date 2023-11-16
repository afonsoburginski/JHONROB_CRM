// pages/api/products.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../app/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const products = await prisma.product.findMany({
      include: {
        models: {
          include: {
            capacities: {
              include: {
                heights: true,
              }
            }
          }
        }
      }
    });

    const inputOutputs = await prisma.inputOutput.findMany();

    res.status(200).json({ products, inputOutputs })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}