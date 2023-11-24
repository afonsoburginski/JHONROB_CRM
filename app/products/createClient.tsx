'use client';
// CreateClient.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@tremor/react';
import { Form, Input } from 'reactstrap';

const CreateClient = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/createClient', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const client = await response.json();
      console.log('Client created:', client);
    } catch (error) {
      console.error('A network error occurred when attempting to create a client:', error);
    }
  };


  return (
    <Form className="flex flex-col w-full max-w-screen-xl gap-5" onSubmit={handleSubmit(onSubmit)}>
      <div className='flex grid-cols-4 gap-5'>
        <div className='grid-cols-2 w-full'>
          <label className="block text-sm font-medium text-gray-700">Nome do cliente:</label>
          <Input className="p-2 rounded border border-gray-300 mt-1 block w-full" type="text" placeholder="Nome do cliente" {...register('name')} />
        </div>
        <div className='grid-cols-2 w-full'>
          <label className="block text-sm font-medium text-gray-700">Email do cliente:</label>
          <Input className="p-2 rounded border border-gray-300 mt-1 block w-full" type="email" placeholder="Email do cliente" {...register('email')} />
        </div>
        <div className='grid-cols-2 w-full'>
          <label className="block text-sm font-medium text-gray-700">Telefone do cliente:</label>
          <Input className="p-2 rounded border border-gray-300 mt-1 block w-full" type="text" placeholder="Telefone do cliente" {...register('phone')} />
        </div>
        <div className='grid-cols-2 w-full'>
          <label className="block text-sm font-medium text-gray-700">Endereço do cliente:</label>
          <Input className="p-2 rounded border border-gray-300 mt-1 block w-full" type="text" placeholder="Endereço do cliente" {...register('address')} />
        </div>
      </div>

      <div className='flex grid-cols-4 gap-5'>
        <div className='grid-cols-2 w-full'>
          <label className="block text-sm font-medium text-gray-700">Cidade do cliente:</label>
          <Input className="p-2 rounded border border-gray-300 mt-1 block w-full" type="text" placeholder="Cidade do cliente" {...register('city')} />
        </div>
        <div className='grid-cols-2 w-full'>
          <label className="block text-sm font-medium text-gray-700">Estado do cliente:</label>
          <Input className="p-2 rounded border border-gray-300 mt-1 block w-full" type="text" placeholder="Estado do cliente" {...register('state')} />
        </div>
      </div>

      <div className='flex grid-cols-4 gap-5'>
        <div className='grid-cols-2 w-full'>
          <label className="block text-sm font-medium text-gray-700">CEP do cliente:</label>
          <Input className="p-2 rounded border border-gray-300 mt-1 block w-full" type="text" placeholder="CEP do cliente" {...register('zip')} />
        </div>
        <div className='grid-cols-2 w-full'>
          <label className="block text-sm font-medium text-gray-700">CPF ou CNPJ do cliente:</label>
          <Input className="p-2 rounded border border-gray-300 mt-1 block w-full" type="text" placeholder="CPF ou CNPJ do cliente" {...register('cpfCnpj')} />
        </div>
        <div className='grid-cols-2 w-full'>
          <label className="block text-sm font-medium text-gray-700">Inscrição Estadual do cliente:</label>
          <Input className="p-2 rounded border border-gray-300 mt-1 block w-full" type="text" placeholder="Inscrição Estadual do cliente" {...register('ie')} />
        </div>
      </div>

      <div className='flex justify-end items-end grid-cols-3 w-full'>
        <Button className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-1 px-4 border border-gray-400 rounded" type="submit">Cadastrar Cliente</Button>
      </div>
    </Form>
  );
}

export default CreateClient;