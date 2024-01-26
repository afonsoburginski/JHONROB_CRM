// pages/api/propose.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../app/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const proposals = await prisma.propose.findMany({
        include: {
          client: true, 
          productSelections: true,
          paymentInfo: true,
        },
      });
      res.status(200).json(proposals);
    } catch (error) {
      console.error('Error fetching proposals:', error);
      res.status(500).json({ error: 'An error occurred while fetching the proposals' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}