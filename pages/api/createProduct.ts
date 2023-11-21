// createProduct.ts
import { prisma } from '../../app/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;

  console.log('Request body:', body); // Log do corpo da requisição

  try {
    const product = await prisma.product.create({
      data: body,
    });

    console.log('Product created:', product); // Log do produto criado

    res.json(product);
  } catch (error) {
    console.error('Error creating product:', error); // Log do erro

    res.status(500).json({ error: 'An error occurred while creating the product' });
  }
}