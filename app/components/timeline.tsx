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
    <Grid className="flex flex-col justify-between items-center w-full">
      <Grid className="flex justify-between w-full">
        <Text className={`w-1/3 transition-colors duration-500 ${step >= 1 ? 'text-blue-500' : 'text-gray-500'}`}>Passo 1</Text>
        <Text className={`w-1/3 transition-colors duration-500 ${step >= 2 ? 'text-blue-500' : 'text-gray-500'}`}>Passo 2</Text>
        <Text className={`w-1/3 transition-colors duration-500 ${step >= 3 ? 'text-blue-500' : 'text-gray-500'}`}>Passo 3</Text>
      </Grid>
      <ProgressBar className="transition-all duration-500" value={progress} max={100} />
    </Grid>
  );
};

export default Timeline;