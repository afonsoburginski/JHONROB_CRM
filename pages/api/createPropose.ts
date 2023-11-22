// pages/api/createPropose.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../app/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, content, observation, groups, inputOutputs } = req.body;

    try {
      const data = {
        title,
        content,
        observation,
        groups: {
          create: groups
        },
        inputOutputs: {
          create: inputOutputs
        },
      };

      const proposal = await prisma.propose.create({ data });

      res.status(200).json(proposal);
    } catch (error) {
      console.error('Error creating proposal:', error);
      res.status(500).json({ error: 'An error occurred while creating the proposal' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}