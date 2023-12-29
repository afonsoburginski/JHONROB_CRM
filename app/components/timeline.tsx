// Timeline.tsx
'use client'
import React from 'react';
import { Grid, Text, ProgressBar } from '@tremor/react';

interface TimelineProps {
  step: number;
}

const Timeline: React.FC<TimelineProps> = ({ step }) => {
  const progress = (step / 3) * 100;

  return (
    <Grid className="flex flex-col justify-between items-center w-full mt-2">
      <Grid className="flex justify-between w-full">
        <Text className={`w-1/3 transition-colors duration-500 ${step >= 1 ? 'text-blue-500' : 'text-gray-500'}`}>
          <span className={`${step >= 1 ? 'bg-blue-500' : 'bg-gray-500'} rounded-full w-2 h-2 inline-block mr-2`}></span>
          Passo 1: adicionar produtos
        </Text>
        <Text className={`w-1/3 transition-colors duration-500 ${step >= 2 ? 'text-blue-500' : 'text-gray-500'}`}>
          <span className={`${step >= 2 ? 'bg-blue-500' : 'bg-gray-500'} rounded-full w-2 h-2 inline-block mr-2`}></span>
          Passo 2: selecionar informações
        </Text>
        <Text className={`w-1/3 transition-colors duration-500 ${step >= 3 ? 'text-blue-500' : 'text-gray-500'}`}>
          <span className={`${step >= 3 ? 'bg-blue-500' : 'bg-gray-500'} rounded-full w-2 h-2 inline-block mr-2`}></span>
          Passo 3: prazos e observações
        </Text>
      </Grid>
      <ProgressBar className="transition-all duration-500" value={progress} />
    </Grid>
  );
};

export default Timeline;