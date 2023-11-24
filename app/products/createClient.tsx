'use client'
// createClient.tsx
import React from 'react';
import { Button } from '@tremor/react';
import { Form, Input } from 'reactstrap';

const CreateClient = () => {
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '300px',
    margin: '0 auto',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  return (
    <Form style={formStyle}>
      <Input style={inputStyle} type="text" placeholder="Nome do cliente" />
      <Input style={inputStyle} type="email" placeholder="Email do cliente" />
      <Input style={inputStyle} type="text" placeholder="Telefone do cliente" />
      <Input style={inputStyle} type="text" placeholder="Endereço do cliente" />
      <Input style={inputStyle} type="text" placeholder="Cidade do cliente" />
      <Input style={inputStyle} type="text" placeholder="Estado do cliente" />
      <Input style={inputStyle} type="text" placeholder="CEP do cliente" />
      <Input style={inputStyle} type="text" placeholder="CPF ou CNPJ do cliente" />
      <Input style={inputStyle} type="text" placeholder="Inscrição Estadual do cliente" />
      <Button type="submit">Cadastrar Cliente</Button>
    </Form>
  );
};

export default CreateClient;