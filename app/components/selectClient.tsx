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
  proposes: any; // 'proposes' é agora obrigatório
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

  function handleSearch(term: string) {
    setSearchTerm(term);
    const matchedClient = clients.find(client => client.name.includes(term));
    if (matchedClient) {
      if (!matchedClient.id || !matchedClient.name || !matchedClient.email || !matchedClient.phone || !matchedClient.address || !matchedClient.city || !matchedClient.state || !matchedClient.zip || !matchedClient.cpfCnpj || !matchedClient.ie || !matchedClient.proposes) {
        console.error('Client is missing required properties');
        return;
      }
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
          onChange={(event) => handleSearch((event.target as HTMLInputElement).value)} // Atualizado para usar a asserção de tipo
          className="w-full"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
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