import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import SelectForm from './components/selectForm';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const result = await sql`
    SELECT id, name, username, email 
    FROM users 
    WHERE name ILIKE ${'%' + search + '%'};
  `;
  const users = result.rows as User[];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Gerenciador de Proposta</Title>
      <Text>Gerenciador de Proposta.</Text>
      <Card className="mt-6">
        <SelectForm/>
      </Card>
      <Card className="mt-6">
        aaaaaaaaaaaa
      </Card>
    </main>
  );
}
