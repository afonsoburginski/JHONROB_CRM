import { Client } from 'pg';
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

  // Configurar a conexão com o PostgreSQL no Docker
  const client = new Client({
    user: 'prisma', // Usuário do banco de dados
    host: 'localhost', // Endereço do seu contêiner PostgreSQL
    database: 'prismadb', // Nome do seu banco de dados
    password: 'prisma', // Senha do banco de dados
    port: 5433, // Porta exposta no seu contêiner Docker
  });

  await client.connect();

  try {
    // Executar uma consulta SQL parametrizada no banco de dados
    const result = await client.query(
      `SELECT 
        id, 
        product_name as productName,
        model,
        capacity,
        height,
        power,
        input,
        output
      FROM contracts
      WHERE product_name ILIKE $1;`,
      [`%${search}%`]
    );

    // Manipular os resultados da consulta conforme necessário
    const contracts = result.rows as Contract[];

    // Retorna o conteúdo da página com base nos resultados da consulta
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
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
  } finally {
    // Fecha a conexão com o banco de dados, independentemente de ter ocorrido um erro ou não
    await client.end();
  }
}
