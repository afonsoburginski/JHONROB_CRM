'use client'

import React, { useState } from 'react';
import { Title } from '@tremor/react';
import { useSelectedProduct } from '../contexts/selectedProductContext';

const ObserveProducts: React.FC = () => {
  const { selectedGroups, selectedInputOutputs } = useSelectedProduct();
  const [observation, setObservation] = useState('');

  const saveObservation = async () => {
    console.log('selectedGroups', selectedGroups);
    console.log('selectedInputOutputs', selectedInputOutputs);
    try {
      const response = await fetch('http://localhost:3000/api/createPropose', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          title: 'Observation', 
          content: observation, 
          groups: selectedGroups, 
          inputOutputs: selectedInputOutputs
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error saving observation:', error);
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
      {/* TODO: Adicione componentes para permitir ao usuário selecionar grupos e entradas/saídas */}
      <div className='flex justify-end items-end grid-cols-3 w-full mt-4'>
        <button onClick={saveObservation} className='bg-white hover:bg-gray-100 text-gray-800 font-normal py-1 px-4 border border-gray-400 rounded'>
          Salvar
        </button>
      </div>
    </>
  );
};

export default ObserveProducts;