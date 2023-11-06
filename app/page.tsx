import React from 'react';
import Select from 'react-select';
import Search from './components/search';
import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import SelectForm from './components/select'

export default async function IndexPage() {

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Usuário</Title>
      <Text>Gerenciador de Proposta</Text>
      <Search />
      <Card className="mt-6">
      <SelectForm/>
  

        {/* <select>
          <option value="elevador">Elevador 1</option>
          <option value="elevador">Elevador 2</option>
          <option value="elevador">Elevador 3</option>
        </select>

        <select>
          <option value="capacidade">Capacidade 1</option>
          <option value="capacidade">Capacidade 2</option>
          <option value="capacidade">Capacidade 3</option>
        </select>

        <select>
          <option value="altura">Altura 1</option>
          <option value="altura">Altura 2</option>
          <option value="altura">Altura 3</option>
        </select> */}
      </Card>
    </main>
  );
}