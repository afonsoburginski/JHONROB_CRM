// pages/api/createProducts
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../app/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, content } = req.body;

  try {
    const proposal = await prisma.propose.create({
      data: {
        title,
        content,
      },
    });

    res.status(200).json(proposal);
  } catch (error) {
    console.error('Error creating proposal:', error);
    res.status(500).json({ error: 'An error occurred while creating the proposal' });
  }
}