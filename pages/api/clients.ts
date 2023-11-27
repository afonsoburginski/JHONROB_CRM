// Arquivo: pages/api/clients.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../app/prisma'; // Importando o prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const clients = await prisma.client.findMany();
    res.json(clients);
  } else {
    res.status(405).end(); // Método não permitido
  }
}