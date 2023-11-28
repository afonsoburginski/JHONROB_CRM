// pages/api/savePropose.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../app/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('Request body', req.body); // Log do corpo da requisição

    const { title, content, observation, groups, type, model, capacity, height, power, product, input, output, clientId } = req.body;

    // Verifique se todos os campos necessários estão presentes
    if (!title || !groups || !height || !power || !product || !input || !output || !clientId) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const data = {
      title,
      content: content || "", // Use um valor padrão se o campo não estiver presente
      observation: observation || "", // Use um valor padrão se o campo não estiver presente
      groups,
      type: type || "", // Use um valor padrão se o campo não estiver presente
      model: model || "", // Use um valor padrão se o campo não estiver presente
      capacity: capacity || "", // Use um valor padrão se o campo não estiver presente
      height,
      power,
      product,
      input,
      output,
      clientId, // Adiciona o clientId aos dados da proposta
    };

    try {
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