'use client'
import React from 'react';
import { useSelectedClient } from '../contexts/selectedClientContext';
import { useSelectedProduct } from '../contexts/selectedProductContext';

const SaveButton: React.FC = () => {
  const { selectedProducts } = useSelectedProduct();
  const { selectedClient } = useSelectedClient();

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
    
    for (const product of selectedProducts) {
      const requiredFields = ['group'];
      for (const field of requiredFields) {
        if (!(field in product)) {
          console.warn(`product.${field} is missing or undefined`);
          return;
        }
      }
      
      const data = {
        title: product.title, 
        content: "", // Adicione o conteúdo aqui
        observation: "", // Adicione a observação aqui
        groups: JSON.stringify(product.group),
        product: product.title,
        type: "", // Adicione o tipo aqui
        model: "", // Adicione o modelo aqui
        capacity: "", // Adicione a capacidade aqui
        height: product.height,
        power: product.power,
        input: JSON.stringify(product.inputOutput),
        output: JSON.stringify(product.inputOutput),
        clientId: selectedClient.id,
      };

      console.log('Data to be sent:', data); // Log dos dados a serem enviados
      
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
    }
  };

  return (
    <button onClick={handleSubmit} className='bg-white hover:bg-gray-100 text-gray-800 font-normal py-1 px-4 border border-gray-400 rounded'>
      Salvar
    </button>
  );
};

export default SaveButton;