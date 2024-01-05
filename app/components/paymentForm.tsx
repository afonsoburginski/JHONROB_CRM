// paymentForm.tsx
import { Grid, Flex, Select, SelectItem, Button, Text, Title, TextInput } from "@tremor/react";
import { useEffect } from 'react';
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

  useEffect(() => {
    if (paymentInfo?.banks && data?.banks) {
      const selectedBank = data.banks[paymentInfo.banks];
      if (selectedBank) {
        if (paymentInfo.bankAgency !== selectedBank.agency) {
          handleValueChange('bankAgency' as keyof PaymentInfoType, selectedBank?.agency || '');
        }
        if (paymentInfo.accountNumber !== selectedBank.account) {
          handleValueChange('accountNumber' as keyof PaymentInfoType, selectedBank?.account || '');
        }
      }
    }
  }, [paymentInfo?.banks, data?.banks, handleValueChange, paymentInfo?.bankAgency, paymentInfo?.accountNumber]);

  const fieldComponents = {
    bankAgency: TextInput,
    accountNumber: TextInput,
    default: Select,
  };

  return (
    <>
      <Title>Informações de Pagamento</Title>
      <Grid className="grid-cols-3 gap-4 h-60 mb-20 w-full">
        {fields.map((field, index) => {
          const FieldComponent = fieldComponents[field] || fieldComponents.default;
          return (
            <Flex key={index} flexDirection="col" alignItems="start" className="space-y-2 w-full">
              <Text>{fieldNames[field]}</Text>
              {FieldComponent === Select ? (
                <FieldComponent
                  value={paymentInfo?.[field] || ''}
                  onValueChange={(value) => handleValueChange(field as keyof PaymentInfoType, value)}
                  placeholder={`Digite o ${fieldNames[field]}...`}
                  disabled={isSaved}
                >
                  {data?.[field]?.map((option, optionIndex) => (
                    <SelectItem key={optionIndex} value={optionIndex.toString()}>
                      {option?.name || option?.title || `Parcelas: ${option?.numberOfInstallments}, Taxa de juros: ${option?.interestRate}`}
                    </SelectItem>
                  ))}
                </FieldComponent>
              ) : (
                <FieldComponent
                  value={paymentInfo?.[field] || ''}
                  onValueChange={(value) => handleValueChange(field as keyof PaymentInfoType, value)}
                  placeholder={`Digite o ${fieldNames[field]}...`}
                  disabled={isSaved}
                />
              )}
            </Flex>
          );
        })}
        <Button onClick={savePaymentInfo}>Salvar</Button>
      </Grid>
    </>
  );
};