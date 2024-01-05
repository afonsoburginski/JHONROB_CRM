// saveButton.tsx
'use client'
import React from 'react';
import { Button } from '@tremor/react';
import { useSelectedClient } from '../contexts/selectedClientContext';
import { useSelectedProduct } from '../contexts/selectedProductContext';
import { useObservation } from '../contexts/observationContext';
import { usePaymentInfo } from '../contexts/paymentInfoContext';
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
    
    const { paymentMethod, salesPerson, installment, bank, bankAgency, accountNumber, company } = paymentInfo;
    
    const productSelections = selectedProducts.map(product => ({
      groups: product.group ? product.group.title : '',
      type: product.type ? product.type.title : '',
      model: product.model ? product.model.title : '',
      capacity: product.capacity ? product.capacity.title : '',
      height: product.height ? product.height.title : '',
      power: product.power ? product.power.title : '',
      product: product.product ? product.product.title : '',
      input: Array.isArray(product.input) ? product.input.map(input => input.title).join(', ') : product.input.title,
      output: Array.isArray(product.output) ? product.output.map(output => output.title).join(', ') : product.output.title,
    }));

    const data = {
      title: `Proposta ${selectedClient.name}`,
      content: '',
      observation: observation,
      clientId: selectedClient.id,
      productSelections,
      paymentInfo: {
        paymentMethod,
        salesPerson,
        installment,
        bank,
        bankAgency,
        accountNumber,
        company,
      },
    };

    console.log(data);

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
    
      showToastSuccess('Proposta salva com sucesso'); // Mova esta linha para cima
    
      resetSelectedProducts();
      resetSelectedClient();
      resetObservation();
    }
  };

  return (
    <Button className='ml-auto' style={{ borderRadius: '5px' }} variant='secondary' onClick={handleSubmit}>
      Salvar
    </Button>
  );
};

export default SaveButton;