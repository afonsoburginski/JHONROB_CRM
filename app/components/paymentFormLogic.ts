// paymentFormLogic.ts
import { useState, useEffect } from 'react';
import { PaymentInfoType, usePaymentInfo } from '../contexts/paymentInfoContext';

export default function usePaymentFormLogic() {
  const [data, setData] = useState<any>(null);
  const { paymentInfo, setPaymentInfo } = usePaymentInfo();

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem('paymentData');
      if (cachedData) {
        setData(JSON.parse(cachedData));
        return;
      }

      try {
        const response = await fetch('/api/payment');
        const data = await response.json();
        console.log('Data received from API:', data);
        localStorage.setItem('paymentData', JSON.stringify(data));
        setData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
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
    setPaymentInfo({ ...paymentInfo, [field]: value });
  };

  return {
    data,
    paymentInfo,
    fields,
    fieldNames,
    handleValueChange,
  };
}