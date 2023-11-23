// pages/api/savePropose.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../app/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('Request body', req.body); // Log do corpo da requisição

    const { content, observation, groups, inputOutputs, equipment, model, capacity, height, power, product, input, output } = req.body;

    // Verifique se todos os campos necessários estão presentes
    if (!content || !observation || !groups || !inputOutputs || !equipment || !model || !capacity || !height || !power || !product || !input || !output) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    try {
      const data = {
        content,
        observation,
        groups,
        inputOutputs,
        equipment,
        model,
        capacity,
        height,
        power,
        product,
        input,
        output,
      };

      console.log('Data to create proposal', data); // Log dos dados para criar a proposta

      const proposal = await prisma.propose.create({ data });

      console.log('Created proposal', proposal); // Log da proposta criada

      res.status(200).json(proposal);
    } catch (error) {
      console.error('Error creating proposal:', error); // Log do erro
      res.status(500).json({ error: error.message }); // Envia a mensagem de erro na resposta
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}