// pages/api/products.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../app/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const groups = await prisma.group.findMany({
      include: {
        products: {
          include: {
            models: {
              include: {
                capacities: {
                  include: {
                    heights: {
                      include: {
                        powers: true, // incluir powers
                      },
                    },
                  },
                },
              },
            },
            types: true,
          },
        },
      },
    });

    const inputOutputs = await prisma.inputOutput.findMany();

    res.status(200).json({ groups, inputOutputs })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}