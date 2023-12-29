// selectForm.tsx
'use client'
import { Select, SelectItem, Button, Grid, Text } from '@tremor/react';
import useSelectFormLogic from './selectFormLogic';
import { useState } from 'react';

export default function SelectFormClient() {
  const {
    handleChange,
    handleSave,
    data,
    ...selections
  } = useSelectFormLogic();

  const [key, setKey] = useState(Math.random());

  const fields = ['group', 'product', 'type', 'model', 'capacity', 'height', 'power', 'input', 'output'];

  const fieldNames = {
    group: 'Grupo',
    product: 'Produto',
    type: 'Tipo',
    model: 'Modelo',
    capacity: 'Capacidade',
    height: 'Altura',
    power: 'Potência',
    input: 'Entrada',
    output: 'Saída',
  };

  const handleSaveAndReset = (event) => {
    handleSave(event);
    setKey(Math.random()); // Atualiza a chave para forçar uma nova renderização
  };

  return (
    <form className='flex flex-col w-full max-w-full gap-5 h-48' onSubmit={handleSaveAndReset}>
      <Grid className='grid-cols-4 gap-5'>
        {fields.slice(0, 4).map((field, index) => (
          <Grid key={index} className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-1">{fieldNames[field]}</Text>
            <Select
              key={`${field}-${key}`} // Adiciona a chave ao componente de seleção
              value={selections[field]?.id}
              onValueChange={value => handleChange(field, value)}
              disabled={index !== 0 && !selections[fields[fields.findIndex(f => f === field) - 1]]} // Melhorado
              placeholder={`Selecione o ${fieldNames[field]}...`}
            >
              {data[field]?.map((option, optionIndex) => (
                <SelectItem key={optionIndex} value={option?.id}>
                  {option?.title}
                </SelectItem>
              ))}
            </Select>
          </Grid>
        ))}
      </Grid>
      <Grid className='grid-cols-5 gap-5'>
        {fields.slice(4).map((field, index) => (
          <Grid key={index} className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-1">{fieldNames[field]}</Text>
            <Select
              key={`${field}-${key}`} // Adiciona a chave ao componente de seleção
              value={selections[field]?.id}
              onValueChange={value => handleChange(field, value)}
              disabled={index !== 0 && !selections[fields[fields.findIndex(f => f === field) - 1]]} // Melhorado
              placeholder={`Selecione o ${fieldNames[field]}...`}
            >
              {data[field]?.map((option, optionIndex) => (
                <SelectItem key={optionIndex} value={option?.id}>
                  {option?.title}
                </SelectItem>
              ))}
            </Select>
          </Grid>
        ))}
      </Grid>
      <Grid className='flex justify-end items-end grid-cols-3 w-full'>
        <Button size='xs' style={{ borderRadius: '5px' }} variant='secondary' type="submit">
          Adicionar
        </Button>
      </Grid>
    </form>
  );
}