// selectClient.tsx
'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useSelectedClient } from '../contexts/selectedClientContext';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { SearchSelect, SearchSelectItem } from '@tremor/react';

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

export default function SelectClient() {
  const { selectedClient, setSelectedClient } = useSelectedClient();
  const [clients, setClients] = useState<Client[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showSearchSelect, setShowSearchSelect] = useState(false);

  useEffect(() => {
    fetch('/api/clients')
      .then(response => response.json())
      .then(data => {
        setClients(data);
      });
  }, []);

  function handleSearch(term: string) {
    setSearchTerm(term);
    const matchedClient = clients.find(client => client.name.includes(term));
    if (matchedClient) {
      setSelectedClient(matchedClient);
    }
  }

  const props = useSpring({
    width: isHovered || isFocused ? '100%' : '0%',
    config: { tension: 280, friction: 60 }
  });

  return (
    <div 
    className="relative mt-5 ml-auto" // Adicione ml-auto aqui
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => {
      if (!isFocused) {
        setIsHovered(false);
      }
    }}
  >
    <label htmlFor="search" className="sr-only">
      Pesquisar
    </label>
    <animated.div style={props} className="rounded-md shadow-sm flex items-center">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
        aria-hidden="true"
      >
        <MagnifyingGlassIcon
          className="mr-3 h-4 w-4 text-gray-400"
          aria-hidden={isHovered || isFocused} // Esconde o ícone quando o mouse está sobre o componente ou quando ele está focado
        />
      </div>
      <SearchSelect
        id="search"
        placeholder="Pesquisar por nome..."
        onChange={(value) => handleSearch(value)}
        className="w-full" // Garante que o SearchSelect preencha todo o espaço disponível
      >
        {clients.map((client) => (
          <SearchSelectItem key={client.id} value={client.name} onClick={() => setSelectedClient(client)}>
            {client.name}
          </SearchSelectItem>
        ))}
      </SearchSelect>
    </animated.div>
  </div>
  );
}