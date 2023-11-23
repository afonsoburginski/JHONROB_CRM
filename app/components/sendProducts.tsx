'use client'
//SendProducts.tsx
import React, { useState } from 'react';
import { Title } from '@tremor/react';
import { useSelectedProduct } from '../contexts/selectedProductContext';

const SendProducts: React.FC = () => {
  const { selectedProducts } = useSelectedProduct();
  const [observation, setObservation] = useState('');

  const handleSubmit = async () => {
    console.log('handleSubmit called');
    console.log('Selected products:', selectedProducts);
  
    if (!selectedProducts || selectedProducts.length === 0) {
      console.error('No products selected');
      return;
    }
  
    const product = selectedProducts[0];
    console.log('Selected product:', product);
  
    console.log('Checking required product fields');
    if (!product.group || !product.equipment || !product.title) {
      console.error('Missing required product fields');
      console.error('product.group:', product.group);
      console.error('product.equipment:', product.equipment);
      console.error('product.title:', product.title);
      return;
    }
    console.log('Required product fields present');
  
    const data = {
      title: 'Titulo', 
      content: observation, 
      observation: 'Your observation here',
      group: { title: product.group }, // Make sure group is an object with a title field
      inputOutput: product.inputOutput ? product.inputOutput.map(io => ({ input: io.input, output: io.output })) : [],
      equipment: product.equipment,
      product: product.title,
      model: product.model,
      capacity: product.capacity,
      height: product.height,
      power: product.power,
      input: product.input,
      output: product.output,
    };
  
    console.log('Data to send', data); // Log the data that will be sent
  
    try {
      console.log('Sending fetch request');
  
      const response = await fetch('http://localhost:3000/api/savePropose', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      console.log('Fetch request sent, awaiting response...');
  
      if (!response.ok) {
        console.error('Response status:', response.status);
        const responseBody = await response.text();
        console.error('Response body:', responseBody);
        return;
      }
  
      const responseData = await response.json();
      console.log('Response data:', responseData);
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }
  };

  return (
    <>
      <div className='flex flex-col mt-5'>
        <Title className='mb-2 text-lg text-gray-900'>Observação</Title>
        <textarea
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32'
          id='observation'
          value={observation}
          onChange={(e) => setObservation(e.target.value)}
        />
      </div>
      <div className='flex justify-end items-end grid-cols-3 w-full mt-4'>
        <button onClick={() => { console.log('Button clicked'); handleSubmit(); }} className='bg-white hover:bg-gray-100 text-gray-800 font-normal py-1 px-4 border border-gray-400 rounded'>
          Salvar
        </button>
      </div>
    </>
  );
};

export default SendProducts;