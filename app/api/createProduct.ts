// pages/api/createProduct.ts
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

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