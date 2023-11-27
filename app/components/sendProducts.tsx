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
    console.log('Selected products:', JSON.stringify(selectedProducts));
  
    if (!selectedProducts || selectedProducts.length === 0) {
      console.error('No products selected');
      return;
    }
  
    const product = selectedProducts[0];
    console.log('Selected product:', JSON.stringify(product));
  
    console.log('Checking product fields');
    const requiredFields = ['group'];
    for (const field of requiredFields) {
      if (!product[field]) {
        console.warn(`product.${field} is missing or undefined`);
        return; // Return early if a required field is missing
      } else {
        console.log(`product.${field}:`, product[field]);
      }
    }
    console.log('All required product fields present');
  
    const data = {
      title: 'Titulo', 
      content: 'Teste', 
      observation: observation, // Use the observation from the state
      groups: product.group, 
      model: product.model,
      capacity: product.capacity,
      height: product.height,
      power: product.power,
      input: product.input, // Modificado para product.input
      output: product.output, // Modificado para product.output
      type: product.type, 
      product: product.product, 
    };
  
    console.log('Data to send', JSON.stringify(data));
  
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
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Response data:', JSON.stringify(responseData));
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }
  };

  return (
    <>
      <div className='flex flex-col'>
        <Title className='mb-2 text-lg text-gray-900'>Observação Geral</Title>
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