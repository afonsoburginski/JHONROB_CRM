// selectedClientContext.tsx
'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

const SelectedClientContext = createContext<SelectedClientContextData | undefined>(undefined);

export const SelectedClientProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const resetSelectedClient = () => { // Adicione esta função
    setSelectedClient(null);
  };

  return (
    <SelectedClientContext.Provider value={{ selectedClient, setSelectedClient, resetSelectedClient }}>
      {children}
    </SelectedClientContext.Provider>
  );
};

export function useSelectedClient(): SelectedClientContextData {
  const context = useContext(SelectedClientContext);
  if (!context) {
    throw new Error('useSelectedClient must be used within a SelectedClientProvider');
  }
  return context;
}