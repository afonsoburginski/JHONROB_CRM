// Exemplo de rota em Next.js
// pages/api/contracts.js

import { query } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { productName, model, capacity } = req.body;

    // Insira os dados do contrato no banco de dados
    const result = await query(
      'INSERT INTO contracts (productName, model, capacity) VALUES (?, ?, ?)',
      [productName, model, capacity]
    );

    return res.status(200).json({ success: true, contractId: result.insertId });
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
