// paymentForm.tsx
'use client'
import { Select, SelectItem, Button, Grid, Title, Text, TextInput } from '@tremor/react';
import usePaymentFormLogic from './paymentFormLogic';
import { usePaymentInfo } from '../contexts/paymentInfoContext';

export default function PaymentForm() {
  const { handleChange, data, paymentInfo, fieldTitles } = usePaymentFormLogic();
  const { isSaved, savePaymentInfo } = usePaymentInfo();

  return (
    <Grid className='flex flex-col w-full max-w-full gap-4 h-60 mb-20'>
      <Title>Informações de Pagamento</Title>
      <Grid className='grid-cols-2 gap-5'>
        {Object.keys(data).map((field, index) => (
          <Grid key={index} className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-1">{fieldTitles[field]}</Text>
            <Select
              key={`${field}-${index}`}
              value={paymentInfo[field]?.id || ''}
              onValueChange={value => handleChange(field, value)}
              placeholder={`Selecione o ${fieldTitles[field]}...`}
              enableClear
              disabled={isSaved}
            >
              {data[field]?.map((option, optionIndex) => (
                <SelectItem key={optionIndex} value={option?.id}>
                  {option?.title}
                </SelectItem>
              ))}
            </Select>
          </Grid>
        ))}
        <Grid className='flex grid-cols-2 gap-x-5 w-full'>
          <Grid className='w-1/2'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-1">Agência</Text>
            <TextInput
              value={paymentInfo['bank']?.agency || ''}
              placeholder="Informe o número da agência"
              disabled={isSaved}
            />
          </Grid>
          <Grid className='w-1/2'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-1">Conta</Text>
            <TextInput
              value={paymentInfo['bank']?.account || ''}
              placeholder="Informe o número da conta"
              disabled={isSaved}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid className='flex justify-end items-end grid-cols-2 w-full'>
        <Button size='xs' style={{ borderRadius: '5px' }} variant='secondary' onClick={savePaymentInfo}>
          Salvar
        </Button>
      </Grid>
    </Grid>
  );
}