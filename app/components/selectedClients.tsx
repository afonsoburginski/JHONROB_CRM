// selectedClients.tsx
'use client'
import React from 'react';
import { Table, Title, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, TextInput } from '@tremor/react';
import { useSelectedClient } from '../contexts/selectedClientContext';
import SelectClient from './selectClient';

const TextInputCell: React.FC<{value: string | null, placeholder: string}> = ({ value, placeholder }) => {
  return (
    <TextInput value={value || ''} disabled placeholder={placeholder} style={{width: '100%'}} />
  );
}

const SelectedClients: React.FC = () => {
  const { selectedClient } = useSelectedClient();

  return (
    <div className='flex flex-col w-full h-48 overflow-auto'>
      <div className='flex justify-between items-center w-full'>
        <Title>Dados do Cliente</Title> 
        <div className="flex items-center">
          <SelectClient />
        </div>
      </div>
      <Table className="bg-grey-lighter text-grey-darker mt-1 mb-4">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="w-1/4 py-1">Nome</TableHeaderCell>
            <TableHeaderCell className="w-1/4 py-1">Email</TableHeaderCell>
            <TableHeaderCell className="w-1/4 py-1">Telefone</TableHeaderCell>
            <TableHeaderCell className="w-1/4 py-1">Endereço</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={`w-1/4 py-0`}><TextInputCell value={selectedClient?.name || null} placeholder="Nome" /></TableCell>
            <TableCell className={`w-1/4 py-0`}><TextInputCell value={selectedClient?.email || null} placeholder="Email" /></TableCell>
            <TableCell className={`w-1/4 py-0`}><TextInputCell value={selectedClient?.phone || null} placeholder="Telefone" /></TableCell>
            <TableCell className={`w-1/4 py-0`}><TextInputCell value={selectedClient?.address || null} placeholder="Endereço" /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
        
      <Table className="bg-grey-lighter text-grey-darker">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="w-1/4 py-1">Cidade</TableHeaderCell>
            <TableHeaderCell className="w-1/4 py-1">Estado</TableHeaderCell>
            <TableHeaderCell className="w-1/4 py-1">Cep</TableHeaderCell>
            <TableHeaderCell className="w-1/4 py-1">Cpf/Cnpj</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={`w-1/4 py-0`}><TextInputCell value={selectedClient?.city || null} placeholder="Cidade" /></TableCell>
            <TableCell className={`w-1/4 py-0`}><TextInputCell value={selectedClient?.state || null} placeholder="Estado" /></TableCell>
            <TableCell className={`w-1/4 py-0`}><TextInputCell value={selectedClient?.zip || null} placeholder="Cep" /></TableCell>
            <TableCell className={`w-1/4 py-0`}><TextInputCell value={selectedClient?.cpfCnpj || null} placeholder="Cpf/Cnpj" /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default SelectedClients;