// observationContext.tsx
'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ObservationContextData {
  observation: string;
  setObservation: (observation: string) => void;
  resetObservation: () => void; // Adicione esta linha
}

const ObservationContext = createContext<ObservationContextData | undefined>(undefined);

export const ObservationProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [observation, setObservation] = useState<string>('');

  const resetObservation = () => { // Adicione esta função
    setObservation('');
  };

  return (
    <ObservationContext.Provider value={{ observation, setObservation, resetObservation }}>
      {children}
    </ObservationContext.Provider>
  );
};

export function useObservation(): ObservationContextData {
  const context = useContext(ObservationContext);
  if (!context) {
    throw new Error('useObservation must be used within a ObservationProvider');
  }
  return context;
}