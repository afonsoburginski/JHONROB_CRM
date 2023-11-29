'use client'
// saveButton.tsx
import React from 'react';
import { useSelectedClient } from '../contexts/selectedClientContext';
import { useSelectedProduct } from '../contexts/selectedProductContext';
import { useObservation } from '../contexts/observationContext';

const SaveButton: React.FC = () => {
  const { selectedProducts } = useSelectedProduct();
  const { selectedClient } = useSelectedClient();
  const { observation } = useObservation();

  console.log('Selected client:', selectedClient);

  const handleSubmit = async () => {
    console.log('Selected products:', selectedProducts); // Log dos produtos selecionados
    console.log('Selected client:', selectedClient); // Log do cliente selecionado

    if (!selectedProducts || selectedProducts.length === 0) {
      console.error('No products selected');
      return;
    }
    
    if (!selectedClient) {
      console.error('No client selected');
      return;
    }
    
    const productSelections = selectedProducts.map(product => ({
      groups: product.group,
      type: product.type,
      model: product.model,
      capacity: product.capacity,
      height: product.height,
      power: product.power,
      product: product.product,
      input: product.input.join(', '),
      output: product.output.join(', '),
    }));

    const data = {
      title: `Proposta ${selectedClient.name}`, // Use the actual title value
      content: '', // Use the actual content value
      observation: observation,
      clientId: selectedClient.id,
      productSelections,
    };

    console.log('Data to be sent:', data);

    const response = await fetch('http://localhost:3000/api/savePropose', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const responseData = await response.json();
      console.log('Response data:', responseData); // Log dos dados da resposta
    }
  };

  return (
    <button onClick={handleSubmit} className='bg-white hover:bg-gray-100 text-gray-800 font-normal py-1 px-4 border border-gray-400 rounded'>
      Salvar
    </button>
  );
};

export default SaveButton;