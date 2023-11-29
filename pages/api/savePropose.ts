// pages/api/savePropose.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../app/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  console.log('Request received');

  if (req.method === 'POST') {
    console.log('Request body', req.body);

    const { title, content, observation, productSelections, clientId } = req.body;

    const proposeData = {
      title: title || "",
      content: content || "",
      observation: observation || "",
      clientId,
    };

    console.log('Data to create proposal', proposeData);

    try {
      const proposal = await prisma.propose.create({
        data: {
          ...proposeData,
          productSelections: {
            create: productSelections.map((selection: any) => ({
              groups: selection.groups || "",
              product: selection.product || "",
              type: selection.type || "",
              model: selection.model || "",
              capacity: selection.capacity || "",
              height: selection.height || "",
              power: selection.power || "",
              input: selection.input || "",
              output: selection.output || "",
            })),
          },
        },
        include: {
          productSelections: true,
        },
      });

      console.log('Created proposal', proposal);

      res.status(200).json(proposal);
    } catch (error) {
      console.error('Error creating proposal:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}