// selectedClientContext.tsx
'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';

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
}

interface SelectedClientContextData {
  selectedClient: Client | null;
  setClient: (client: Client) => void;
}

const SelectedClientContext = createContext<SelectedClientContextData>({} as SelectedClientContextData);

export const SelectedClientProvider: React.FC = ({ children }) => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const setClient = (client: Client) => {
    console.log('Adicionando cliente à tabela:', client);
    setSelectedClient(client);
  };

  useEffect(() => {
    console.log('Renderizando SelectedClients:', selectedClient);
  }, [selectedClient]);

  return (
    <SelectedClientContext.Provider value={{ selectedClient, setClient }}>
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