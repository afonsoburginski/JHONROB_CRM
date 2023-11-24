// pages/api/createClient.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../app/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, phone, address, city, state, zip, cpfCnpj, ie } = req.body;

  try {
    const client = await prisma.client.create({
      data: {
        name,
        email,
        phone,
        address,
        city,
        state,
        zip,
        cpfCnpj,
        ie,
      },
    });

    res.json(client);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the client', errorMessage: error.message });
  }
}