'use client'
// createClient.tsx
import React from 'react';
import { Button } from '@tremor/react';
import { Form, Input } from 'reactstrap';

const CreateClient = () => {
  return (
    <Form className="flex flex-col space-y-4 w-72 m-auto">
      <Input className="p-2 rounded border border-gray-300" type="text" placeholder="Nome do cliente" />
      <Input className="p-2 rounded border border-gray-300" type="email" placeholder="Email do cliente" />
      <Input className="p-2 rounded border border-gray-300" type="text" placeholder="Telefone do cliente" />
      <Input className="p-2 rounded border border-gray-300" type="text" placeholder="Endereço do cliente" />
      <Input className="p-2 rounded border border-gray-300" type="text" placeholder="Cidade do cliente" />
      <Input className="p-2 rounded border border-gray-300" type="text" placeholder="Estado do cliente" />
      <Input className="p-2 rounded border border-gray-300" type="text" placeholder="CEP do cliente" />
      <Input className="p-2 rounded border border-gray-300" type="text" placeholder="CPF ou CNPJ do cliente" />
      <Input className="p-2 rounded border border-gray-300" type="text" placeholder="Inscrição Estadual do cliente" />
      <Button type="submit">Cadastrar Cliente</Button>
    </Form>
  );
};

export default CreateClient;