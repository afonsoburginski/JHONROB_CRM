'use client'
import { useEffect, useState } from 'react';
import { Card, Title, Text } from '@tremor/react';
import Search from '../components/search';
import ProposeTable from './proposeTable';

interface Propose {
  id: number;
  title: string;
  content: string;
  observation: string;
  groups: string;
  inputOutputs: string;
}

export default function ProposePage({ searchParams }: { searchParams: { q: string }; }) {
  const [proposes, setProposes] = useState<Propose[]>([]);
  const search = searchParams.q ?? '';

  useEffect(() => {
    const fetchProposes = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/propose?search=${search}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProposes(data);
      } catch (error) {
        console.error('Error fetching proposes:', error);
      }
    };

    fetchProposes();
  }, [search]);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Propostas</Title>
      <Text>Lista detalhada de propostas</Text>
      <Search />
      <Card className="mt-6">
        <ProposeTable proposes={proposes} />
      </Card>
    </main>
  );
}