// server.ts
import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.json());
app.post('/propose', async (req, res) => {
  const proposeData = req.body;

  try {
    // Aqui você pode salvar proposeData no banco de dados usando Prisma
    const proposal = await prisma.proposal.create({
      data: proposeData,
    });

    res.status(200).json(proposal);
  } catch (error) {
    console.error('Error creating proposal:', error);
    res.status(500).json({ error: 'An error occurred while creating the proposal' });
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));