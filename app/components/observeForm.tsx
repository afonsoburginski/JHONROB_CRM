// ObserveForm.tsx
'use client'
import React from 'react';
import { Title, Textarea, Grid } from '@tremor/react';
import { useObservation } from '../contexts/observationContext';

const ObserveForm: React.FC = () => {
  const { observation, setObservation } = useObservation();

  return (
    <Grid className='flex flex-col'>
      <Title className='mb-2 text-lg'>Observação Geral</Title>
      <Textarea
        placeholder='Digite uma observação geral para a proposta...'
        style={{ height: '197px' }}
        className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id='observation'
        value={observation}
        onChange={(e) => setObservation(e.target.value)}
      />
    </Grid>
  );
};

export default ObserveForm;