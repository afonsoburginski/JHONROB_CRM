// pages/api/payment.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../app/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany();
      const companies = await prisma.company.findMany();
      const paymentMethods = await prisma.paymentMethod.findMany();
      const banks = await prisma.bank.findMany();
      const installments = await prisma.installment.findMany();

      res.status(200).json({
        salesPeople: users,
        companies,
        paymentMethods,
        banks,
        installments,
      });
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}