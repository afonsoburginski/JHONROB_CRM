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

    // Verifica se paymentInfo é um array. Se não for, converte em um array com um único elemento.
    const paymentInfoArray = Array.isArray(paymentInfo) ? paymentInfo : [paymentInfo];

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
          paymentInfo: {
            create: paymentInfoArray.map((info: any) => ({
              company: info.salesPeople || "",
              paymentMethod: info.paymentMethod || "",
              installments: paymentInfo.installments || "",
              salesPeople: paymentInfo.salesPeople || "",
              bank: info.bank || "",
              bankAgency: info.bankAgency || "",
              accountNumber: info.accountNumber || "",
            })),
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