//createProduct.ts
import { prisma } from '../../app/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const newProduct = await prisma.product.create({
      data: req.body,
    })
    res.json(newProduct)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}