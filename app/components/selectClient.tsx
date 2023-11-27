'use client'
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useSelectedClient } from '../contexts/selectedClientContext';

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

const SelectClient: React.FC = () => {
  const { setClient } = useSelectedClient();
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  useEffect(() => {
    fetch('/api/clients')
      .then(response => response.json())
      .then(data => {
        console.log('Dados recebidos da API:', data);
        setClients(data);
      });
  }, []);

  const handleClientChange = (selectedOption: any) => {
    console.log('Opção selecionada:', selectedOption);
    setSelectedClient(selectedOption);
    setClient(selectedOption); // Atualiza o cliente selecionado
  };

  return (
    <Select 
      value={selectedClient} 
      onChange={handleClientChange} 
      options={clients} 
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id.toString()}
    />
  );
};

export default SelectClient;