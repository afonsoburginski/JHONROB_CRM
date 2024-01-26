// pages/api/savePropose.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../app/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  console.log('Request received');

  if (req.method === 'POST') {
    console.log('Request body', req.body);

    const { title, content, observation, productSelections, clientId, paymentInfo } = req.body;
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
            create: {
              groups: productSelections.groups || "",
              product: productSelections.product || "",
              type: productSelections.type || "",
              model: productSelections.model || "",
              capacity: productSelections.capacity || "",
              height: productSelections.height || "",
              power: productSelections.power || "",
              input: productSelections.input || "",
              output: productSelections.output || "",
            },
          },
          paymentInfo: {
            create: {
              company: paymentInfo.company || "",
              cnpj: paymentInfo.cnpj || "",
              ie: paymentInfo.ie || "",
              address: paymentInfo.address || "",
              paymentMethod: paymentInfo.paymentMethod || "",
              installments: paymentInfo.installments || "",
              salesPeople: paymentInfo.salesPeople || "",
              bank: paymentInfo.bank || "",
              bankAgency: paymentInfo.bankAgency || "",
              accountNumber: paymentInfo.accountNumber || "",
            },
          },
        },
        include: {
          productSelections: true,
          paymentInfo: true,
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
