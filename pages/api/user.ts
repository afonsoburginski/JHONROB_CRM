// pages/api/user.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { search = '' } = req.query;
    try {
      const users = await prisma.user.findMany({
        where: {
          OR: [
            { name: { contains: String(search) } },
            { email: { contains: String(search) } },
          ],
        },
      });
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'An error occurred while fetching users' });
    }
  } else if (req.method === 'PUT') {
    const { id } = req.query;
    const { name, email, image, role } = req.body;
  
    try {
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: { name, email, image, role },
      });
  
      console.log(updatedUser);
  
      res.json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'An error occurred while updating the user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}