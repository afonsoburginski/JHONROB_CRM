// app/api/products.ts
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const products = await prisma.product.findMany({
    include: {
      input: true,
      output: true
    }
  })

  res.status(200).json(products)
}