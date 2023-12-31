// propose/page.tsx
'use client'
import { useEffect, useState } from 'react';
import { Card, Title, Text } from '@tremor/react';
import Search from '../../components/search';
import ProposeTable from './proposeTable';

export default function ProposePage({ searchParams }: { searchParams: { q: string }; }) {
  const [proposes, setProposes] = useState<Propose[]>([]);
  const search = searchParams.q ?? '';

  useEffect(() => {
    const fetchProposes = async () => {
      try {
        const response = await fetch(`api/propose?search=${search}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Adicione o nome do cliente aos dados da proposta
        const updatedProposes = data.map((propose: Propose) => ({
          ...propose,
          clientName: propose.client.name,
        }));
        setProposes(updatedProposes);
      } catch (error) {
        console.error('Error fetching proposes:', error);
      }
    };

    fetchProposes();
  }, [search]);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-screen-2xl">
      <Title>Propostas</Title>
      <Text>Lista detalhada de propostas, busque por ID ou Nome.</Text>
      <Search />
      <Card className="mt-6">
        <ProposeTable proposes={proposes} />
      </Card>
    </main>
  );
}