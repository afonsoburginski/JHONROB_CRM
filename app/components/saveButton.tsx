'use client'
// saveButton.tsx
import React from 'react';
import { Button } from '@tremor/react';
import { useSelectedClient } from '../contexts/selectedClientContext';
import { useSelectedProduct } from '../contexts/selectedProductContext';
import { useObservation } from '../contexts/observationContext';
import { showToastSuccess, showToastError } from './toastfy'; // importe as funções do toast

const SaveButton: React.FC = () => {
  const { selectedProducts, resetSelectedProducts } = useSelectedProduct(); // Adicione resetSelectedProducts
  const { selectedClient, resetSelectedClient } = useSelectedClient(); // Adicione resetSelectedClient
  const { observation, resetObservation } = useObservation(); // Adicione resetObservation

  const handleSubmit = async () => {
    if (!selectedProducts || selectedProducts.length === 0) {
      showToastError('Nenhum produto selecionado'); // mostre um toast de erro
      return;
    }
    
    if (!selectedClient) {
      showToastError('Nenhum cliente selecionado'); // mostre um toast de erro
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

    const response = await fetch('http://localhost:3000/api/savePropose', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      showToastError(`Erro ao salvar: ${response.status}`); // mostre um toast de erro
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const responseData = await response.json();

      resetSelectedProducts();
      resetSelectedClient();
      resetObservation();

      showToastSuccess('Proposta salva com sucesso'); // mostre um toast de sucesso
    }
  };

  return (
    <Button style={{ borderRadius: '5px' }} variant='secondary' onClick={handleSubmit}>
      Salvar
    </Button>
  );
};

export default SaveButton;