// selectClient.tsx
'use client';
import { useState, useEffect } from 'react';
import { SearchSelect, SearchSelectItem } from '@tremor/react';
import { useSelectedClient } from '../contexts/selectedClientContext';
import { HiMagnifyingGlass } from "react-icons/hi2";

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
  proposes: any;
}

export default function SelectClient() {
  const { selectedClient, setSelectedClient } = useSelectedClient();
  const [clients, setClients] = useState<Client[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    fetch('api/clients')
      .then(response => response.json())
      .then(data => {
        setClients(data);
      });
  }, []);

  function handleSearch(value: string) {
    setSearchTerm(value);
    const matchedClient = clients.find(client => client.name.includes(value));
    if (matchedClient) {
      setSelectedClient(matchedClient);
    }
  }

  return (
    <div 
      className="flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rounded-md shadow-sm flex">
        <SearchSelect
          id="search"
          icon={HiMagnifyingGlass}
          placeholder="Pesquisar por nome..."
          onValueChange={handleSearch}
          className="w-full"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={searchTerm}
        >
          {clients.map((client) => (
            <SearchSelectItem key={client.id} value={client.name} onClick={() => setSelectedClient(client)}>
              {client.name}
            </SearchSelectItem>
          ))}
        </SearchSelect>
      </div>
    </div>
  );
}