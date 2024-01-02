// paymentForm.tsx
'use client'
import { Grid, Flex, Select, SelectItem, Text, Title } from "@tremor/react";
import usePaymentFormLogic from './paymentFormLogic';

export default function PaymentInfoForm() {
  const {
    data,
    paymentInfo,
    fields,
    fieldNames,
    handleValueChange,
  } = usePaymentFormLogic();

  return (
    <>
      <Title>Informações de Pagamento</Title>
      <Grid className="grid-cols-3 gap-4 h-60 mb-20 w-full">
        {fields.map((field, index) => (
          <Flex key={index} flexDirection="col" alignItems="start" className="space-y-2 w-full">
            <Text>{fieldNames[field]}</Text>
            <Select
              value={paymentInfo?.[field] || ''}
              onValueChange={(value) => handleValueChange(field, value)}
              placeholder={`Selecione o ${fieldNames[field]}...`}
            >
              {data[field]?.map((option, optionIndex) => (
                <SelectItem key={optionIndex} value={optionIndex.toString()}>
                  {option?.name || option?.title || `Parcelas: ${option?.numberOfInstallments}, Taxa de juros: ${option?.interestRate}`}
                </SelectItem>
              ))}
            </Select>
          </Flex>
        ))}
      </Grid>
    </>
  );
};