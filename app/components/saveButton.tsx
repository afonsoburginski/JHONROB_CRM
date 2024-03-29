// saveButton.tsx
'use client'
import React from 'react';
import { Button } from '@tremor/react';
import { useSelectedClient } from '../contexts/selectedClientContext';
import { useSelectedProduct } from '../contexts/selectedProductContext';
import { useObservation } from '../contexts/observationContext';
import { usePaymentInfo, PaymentInfoType } from '../contexts/paymentInfoContext';
import { showToastSuccess, showToastError } from './toastfy';

const SaveButton: React.FC = () => {
  const { selectedProducts, resetSelectedProducts } = useSelectedProduct();
  const { selectedClient, resetSelectedClient } = useSelectedClient();
  const { observation, resetObservation } = useObservation();
  
  const paymentInfoContext = usePaymentInfo();

  if (!paymentInfoContext) {
    throw new Error('usePaymentInfo must be used within a PaymentInfoProvider');
  }

  const { paymentInfo, setPaymentInfo } = paymentInfoContext;

  const handleSubmit = async () => {
    if (!selectedProducts || selectedProducts.length === 0) {
      showToastError('Nenhum produto selecionado');
      return;
    }
    
    if (!selectedClient) {
      showToastError('Nenhum cliente selecionado');
      return;
    }

    if (!paymentInfo) {
      showToastError('Informações de pagamento não fornecidas');
      return;
    }
    
    const { paymentMethods, salesPeople, installments, banks, bankAgency, accountNumber, companies } = paymentInfo;
    
    const productSelections = selectedProducts.map(product => ({
      groups: product.group ? product.group.title : '',
      product: product.product ? product.product.title : '',
      description: product.product && product.product.description ? product.product.description : '',
      tag: product.product && product.product.tag ? product.product.tag : '',
      type: product.type ? product.type.title : '',
      model: product.model ? product.model.title : '',
      capacity: product.capacity ? product.capacity.title : '',
      height: product.height ? product.height.title : '',
      power: product.power ? product.power.title : '',
      input: Array.isArray(product.input) ? product.input.map(input => input.title).join(', ') : product.input.title,
      output: Array.isArray(product.output) ? product.output.map(output => output.title).join(', ') : product.output.title,
      observation: product.observation || "",
      manufacturingTime: product.manufacturingTime,
      assemblyTime: product.assemblyTime,
    }));

    console.log(productSelections);

    const data = {
      title: `Proposta ${selectedClient.name}`,
      content: '',
      observation: observation,
      clientId: selectedClient.id,
      productSelections,
      paymentInfo,
    };
    
    console.log(data);

    try {
      const response = await fetch('http://localhost:3000/api/savePropose', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response from server:', response);
    
      if (!response.ok) {
        showToastError(`Erro ao salvar: ${response.status}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const responseData = await response.json();
      
        showToastSuccess('Proposta salva com sucesso');
      
        resetSelectedProducts();
        resetSelectedClient();
        resetObservation();
      }
    } catch (error) {
      console.error('Erro ao salvar:', error);
      showToastError(`Erro ao salvar: ${error.message}`);
    }
  };

  return (
    <Button className='ml-auto' style={{ borderRadius: '5px' }} variant='secondary' onClick={handleSubmit}>
      Salvar
    </Button>
  );
};

export default SaveButton;