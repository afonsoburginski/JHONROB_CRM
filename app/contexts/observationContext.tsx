'use client'
// ObservationContext.tsx
import React, { createContext, useState, useContext } from 'react';

interface ObservationContextData {
  observation: string;
  setObservation: React.Dispatch<React.SetStateAction<string>>;
}

const ObservationContext = createContext<ObservationContextData>({} as ObservationContextData);

const ObservationProvider: React.FC = ({ children }) => {
  const [observation, setObservation] = useState('');

  return (
    <ObservationContext.Provider value={{ observation, setObservation }}>
      {children}
    </ObservationContext.Provider>
  );
};

function useObservation(): ObservationContextData {
  const context = useContext(ObservationContext);
  if (!context) {
    throw new Error('useObservation must be used within an ObservationProvider');
  }
  return context;
}

export { ObservationProvider, useObservation };