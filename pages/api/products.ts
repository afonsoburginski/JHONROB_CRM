// pages/api/products.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../app/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const equipments = await prisma.equipment.findMany({
      include: {
        models: {
          include: {
            capacities: {
              include: {
                heights: true,
              }
            }
          }
        },
        products: true, // Incluir "products"
      }
    });

    const inputOutputs = await prisma.inputOutput.findMany();

    res.status(200).json({ equipments, inputOutputs }) // Atualizar "products" para "equipments"
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}