'use client'
// ObserveForm.tsx
import React, { useState } from 'react';
import { Title } from '@tremor/react';

const ObserveForm: React.FC = () => {
  const [observation, setObservation] = useState('');

  return (
    <div className='flex flex-col'>
      <Title className='mb-2 text-lg'>Observação Geral</Title>
      <textarea
        style={{ height: '145px' }}
        className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id='observation'
        value={observation}
        onChange={(e) => setObservation(e.target.value)}
      />
    </div>
  );
};

export default ObserveForm;