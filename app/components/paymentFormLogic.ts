// paymentFormLogic.ts
import { useState, useEffect } from 'react';
import { PaymentInfoType } from '../contexts/paymentInfoContext';

export default function usePaymentFormLogic() {
  const [data, setData] = useState<any>({}); 
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfoType>({}); 

  useEffect(() => {
    fetch('/api/payment')
      .then(response => response.json())
      .then(data => {
        console.log('Data received from API:', data);
        setData(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const fields = ['companies', 'paymentMethods', 'installments', 'salesPeople', 'banks', 'bankAgency', 'accountNumber'];

  const fieldNames = {
    companies: 'Empresa',
    paymentMethods: 'Método de Pagamento',
    installments: 'Parcelamento',
    salesPeople: 'Vendedor',
    banks: 'Banco',
    bankAgency: 'Agência',
    accountNumber: 'Número da Conta',
  };

  const handleValueChange = (field: keyof PaymentInfoType, value: string) => {
    setPaymentInfo(prevState => ({ ...prevState, [field]: value }));
  };

  return {
    data,
    paymentInfo,
    fields,
    fieldNames,
    handleValueChange,
  };
}