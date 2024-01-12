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
        const parsedData = JSON.parse(cachedData);
        setData(parsedData);
        setPaymentInfo(parsedData);
        return;
      }

      try {
        const response = await fetch('/api/payment');
        const data = await response.json();
        console.log('Data received from API:', data);
        localStorage.setItem('paymentData', JSON.stringify(data));
        setData(data);
        setPaymentInfo(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [setPaymentInfo]);

  const fields = ['company', 'paymentMethod', 'installment', 'salesPeople', 'bank', 'bankAgency', 'accountNumber'];

  const fieldNames = {
    company: 'Empresa',
    paymentMethod: 'Método de Pagamento',
    installment: 'Parcelamento',
    salesPeople: 'Vendedor',
    bank: 'Banco',
    bankAgency: 'Agência',
    accountNumber: 'Número da Conta',
  };

  const handleValueChange = (field: keyof PaymentInfoType, value: any) => {
    let stringValue;
    if (Array.isArray(value)) {
      stringValue = value.map(item => Object.values(item).join(', ')).join('; ');
    } else {
      stringValue = value;
    }
    setPaymentInfo({ ...paymentInfo, [field]: stringValue });
  };

  return {
    data,
    paymentInfo,
    fields,
    fieldNames,
    handleValueChange,
  };
}