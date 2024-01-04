// paymentForm.tsx
import { Grid, Flex, Select, SelectItem, Text, Title, TextInput } from "@tremor/react";
import { useEffect, useRef } from 'react';
import usePaymentFormLogic from './paymentFormLogic';
import { PaymentInfoType, usePaymentInfo } from '../contexts/paymentInfoContext';

export default function PaymentInfoForm() {
  const {
    data,
    paymentInfo,
    fields,
    fieldNames,
    handleValueChange,
  } = usePaymentFormLogic();
  const { isSaved, savePaymentInfo } = usePaymentInfo();

  const prevBanksRef = useRef();
  useEffect(() => {
    prevBanksRef.current = paymentInfo?.banks;
  });
  const prevBanks = prevBanksRef.current;

  useEffect(() => {
    if (paymentInfo && paymentInfo.banks && data.banks && prevBanks !== paymentInfo.banks) {
      const selectedBank = data.banks[paymentInfo.banks];
      if (selectedBank) {
        handleValueChange('bankAgency' as keyof PaymentInfoType, selectedBank?.agency || '');
        handleValueChange('accountNumber' as keyof PaymentInfoType, selectedBank?.account || '');
      }
    }
  }, [paymentInfo?.banks, data.banks]);

  return (
    <>
      <Title>Informações de Pagamento</Title>
      <Grid className="grid-cols-3 gap-4 h-60 mb-20 w-full">
        {fields.map((field, index) => (
          <Flex key={index} flexDirection="col" alignItems="start" className="space-y-2 w-full">
            <Text>{fieldNames[field]}</Text>
            {field === 'bankAgency' || field === 'accountNumber' ? (
              <TextInput
                value={paymentInfo?.[field] || ''}
                onValueChange={(value) => handleValueChange(field as keyof PaymentInfoType, value)}
                placeholder={`Digite o ${fieldNames[field]}...`}
                disabled={isSaved}
              />
            ) : (
              <Select
                value={paymentInfo?.[field] || ''}
                onValueChange={(value) => handleValueChange(field as keyof PaymentInfoType, value)}
                placeholder={`Selecione o ${fieldNames[field]}...`}
                disabled={isSaved}
              >
                {data[field]?.map((option, optionIndex) => (
                  <SelectItem key={optionIndex} value={optionIndex.toString()}>
                    {option?.name || option?.title || `Parcelas: ${option?.numberOfInstallments}, Taxa de juros: ${option?.interestRate}`}
                  </SelectItem>
                ))}
              </Select>
            )}
          </Flex>
        ))}
        <button onClick={savePaymentInfo}>Salvar</button>
      </Grid>
    </>
  );
};