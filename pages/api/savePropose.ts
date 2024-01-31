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
            create: productSelections.map(productSelection => ({
              groups: productSelection.groups || "",
              product: productSelection.product || "",
              tag: productSelection.tag || "",
              type: productSelection.type || "",
              model: productSelection.model || "",
              capacity: productSelection.capacity || "",
              height: productSelection.height || "",
              power: productSelection.power || "",
              input: productSelection.input || "",
              output: productSelection.output || "",
              observation: productSelection.observation ? productSelection.observation : null,
            })),
          },
          paymentInfo: {
            create: {
              company: paymentInfo.company.title || "",
              cnpj: paymentInfo.company.cnpj || "",
              ie: paymentInfo.company.ie || "",
              address: paymentInfo.company.address || "",
              paymentMethod: paymentInfo.paymentMethod.title || "",
              installments: paymentInfo.installment.title || "",
              salesPeople: paymentInfo.salesPeople.title || "",
              bank: paymentInfo.bank.title || "",
              bankAgency: paymentInfo.bank.agency || "",
              accountNumber: paymentInfo.bank.account || "",
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