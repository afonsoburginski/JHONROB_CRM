import React from 'react';
import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from '../components/search';
import ContractsTable from './contractsTable';

interface Contract {
  id: number;
  productName: string;
  model: string;
  capacity: string;
  height: string;
  power: string;
  input: string;
  output: string;
}

export default async function ContractsPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const result = await sql`
    SELECT 
      id, 
      product_name as productName,
      model,
      capacity,
      height,
      power,
      input,
      output
    FROM contracts
    WHERE product_name ILIKE ${'%' + search + '%'};
  `;
  const contracts = result.rows as Contract[];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Contratos</Title>
      <Text>Lista detalhada de contratos</Text>
      <Search />
      <Card className="mt-6">
        <ContractsTable contracts={contracts} />
      </Card>
    </main>
  );
}
