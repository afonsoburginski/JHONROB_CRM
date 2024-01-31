// usePaymentFormLogic.ts
import { useState, useEffect } from 'react';
import { usePaymentInfo } from '../contexts/paymentInfoContext';

const fields = ['company', 'paymentMethod', 'installment', 'salesPeople', 'bank'];

const fieldTitles = {
  company: 'Empresa',
  paymentMethod: 'Método de Pagamento',
  installment: 'Parcelas',
  salesPeople: 'Vendedor',
  bank: 'Banco',
};

const usePaymentFormLogic = (initialData = {}) => {
  const { setPaymentInfo, paymentInfo, isSaved } = usePaymentInfo();
  const [data, setData] = useState(initialData);
  const [newFormData, setNewFormData] = useState({
    company: [],
    paymentMethod: [],
    installment: [],
    salesPeople: [],
    bank: [],
  });

  useEffect(() => {
    fetch('/api/payment')
      .then(response => response.json())
      .then(apiData => {
        const formData = {
          company: apiData.company?.map(company => ({
            id: company.id,
            title: company.name,
            cnpj: company.cnpj || "",
            ie: company.ie || "",
            address: company.address || ""
          })) || [],
          paymentMethod: apiData.paymentMethod?.map(method => ({ id: method.id, title: method.title })) || [],
          installment: apiData.installment?.map(installment => ({
            id: installment.id,
            title: `${installment.numberOfInstallments} parcelas`,
            paymentMethodId: installment.paymentMethodId
          })) || [],
          salesPeople: apiData.salesPeople?.map(salesPerson => ({ id: salesPerson.id, title: salesPerson.name })) || [],
          bank: apiData.bank?.map(bank => ({
            id: bank.id,
            title: bank.title,
            agency: bank.agency,
            account: bank.account
          })) || [],
        };

        setNewFormData(formData);
        setData(formData);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleChange = (field, value) => {
    const selectedItem = data[field]?.find(item => item.id === value);
    if (selectedItem) {
      if (field === 'bank') {
        setPaymentInfo({ ...paymentInfo, [field]: { ...selectedItem, agency: selectedItem.agency, account: selectedItem.account } });
      } else if (field === 'company') {
        setPaymentInfo({
          ...paymentInfo,
          [field]: { ...selectedItem, cnpj: selectedItem.cnpj || "", ie: selectedItem.ie || "", address: selectedItem.address || "" },
        });
      } else {
        setPaymentInfo({ ...paymentInfo, [field]: selectedItem });
      }
      if (field === 'paymentMethod') {
        setData(prevData => ({
          ...prevData,
          installment: newFormData.installment.filter(installment => installment.paymentMethodId === selectedItem.id),
        }));
      }
    }
  };

  return {
    handleChange,
    data,
    paymentInfo,
    isSaved,
    fieldTitles,
  };
};

export default usePaymentFormLogic;
