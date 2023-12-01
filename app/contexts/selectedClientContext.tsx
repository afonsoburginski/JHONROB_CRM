// selectedClientContext.tsx
'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Propose {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  observation: string | null;
  groups: string;
  product: string;
  type: string;
  model: string;
  capacity: string;
  height: string;
  power: string;
  input: string;
  output: string;
  clientId: number | null;
}

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cpfCnpj: string;
  ie: string;
  proposes: Propose[];
}

interface SelectedClientContextData {
  selectedClient: Client | null;
  setSelectedClient: (client: Client | null) => void;
  resetSelectedClient: () => void; // Adicione esta linha
}

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