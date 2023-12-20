'use client'
// saveButton.tsx
import React from 'react';
import { Button } from '@tremor/react';
import { useSelectedClient } from '../contexts/selectedClientContext';
import { useSelectedProduct } from '../contexts/selectedProductContext';
import { useObservation } from '../contexts/observationContext';
import { showToastSuccess, showToastError } from './toastfy';

const SaveButton: React.FC = () => {
  const { selectedProducts, resetSelectedProducts } = useSelectedProduct();
  const { selectedClient, resetSelectedClient } = useSelectedClient();
  const { observation, resetObservation } = useObservation();

  const handleSubmit = async () => {
    if (!selectedProducts || selectedProducts.length === 0) {
      showToastError('Nenhum produto selecionado');
      return;
    }
    
    if (!selectedClient) {
      showToastError('Nenhum cliente selecionado');
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
      title: `Proposta ${selectedClient.name}`,
      content: '',
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
      showToastError(`Erro ao salvar: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const responseData = await response.json();

      resetSelectedProducts();
      resetSelectedClient();
      resetObservation();

      showToastSuccess('Proposta salva com sucesso');
    }
  };

  return (
    <Button className='ml-auto' style={{ borderRadius: '5px' }} variant='secondary' onClick={handleSubmit}>
      Salvar
    </Button>
  );
};

export default SaveButton;