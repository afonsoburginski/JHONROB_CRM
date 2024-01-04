// paymentFormLogic.ts
import { useState, useEffect } from 'react';
import { PaymentInfoType } from '../contexts/paymentInfoContext';
import { usePaymentInfo } from '../contexts/paymentInfoContext';

export default function usePaymentFormLogic() {
  const [data, setData] = useState<any>({});
  const { paymentInfo, setPaymentInfo } = usePaymentInfo();

  useEffect(() => {
    const cachedData = localStorage.getItem('paymentData');
    if (cachedData) {
      const data = JSON.parse(cachedData);
      setData(data);
      return;
    }

    fetch('/api/payment')
      .then(response => response.json())
      .then(data => {
        console.log('Data received from API:', data);
        localStorage.setItem('paymentData', JSON.stringify(data));
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

  const handleValueChange = (field: string, value: string) => {
    setPaymentInfo(prevState => ({ ...prevState, [field as keyof PaymentInfoType]: value }));
  };

  return {
    data,
    paymentInfo,
    fields,
    fieldNames,
    handleValueChange,
  };
}