'use client'
import React from 'react';
import { Table, Title, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';
import { useSelectedClient } from '../contexts/selectedClientContext';

const SelectedClients: React.FC = () => {
  console.log('Renderizando SelectedClients');
  const { selectedClient } = useSelectedClient();
  console.log(selectedClient);

  return (
    <div className='flex flex-col w-full'>
      <Title className="text-lg font-bold">Dados do Cliente</Title> 
      <Table className="bg-grey-lighter text-grey-darker mt-1">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="w-1/3">Nome</TableHeaderCell>
            <TableHeaderCell className="w-1/3">Email</TableHeaderCell>
            <TableHeaderCell className="w-1/3">Telefone</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className="w-1/3">{selectedClient ? selectedClient.name : '-'}</TableCell>
            <TableCell className="w-1/3">{selectedClient ? selectedClient.email : '-'}</TableCell>
            <TableCell className="w-1/3">{selectedClient ? selectedClient.phone : '-'}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
  
      <Table className="bg-grey-lighter text-grey-darker mt-1">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="w-1/3">Endereço</TableHeaderCell>
            <TableHeaderCell className="w-1/3">Cidade</TableHeaderCell>
            <TableHeaderCell className="w-1/3">Estado</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className="w-1/3">{selectedClient ? selectedClient.address : '-'}</TableCell>
            <TableCell className="w-1/3">{selectedClient ? selectedClient.city : '-'}</TableCell>
            <TableCell className="w-1/3">{selectedClient ? selectedClient.state : '-'}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
  
      <Table className="bg-grey-lighter text-grey-darker mt-1">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="w-1/3">CEP</TableHeaderCell>
            <TableHeaderCell className="w-1/3">CPF/CNPJ</TableHeaderCell>
            <TableHeaderCell className="w-1/3">IE</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className="w-1/3">{selectedClient ? selectedClient.zip : '-'}</TableCell>
            <TableCell className="w-1/3">{selectedClient ? selectedClient.cpfCnpj : '-'}</TableCell>
            <TableCell className="w-1/3">{selectedClient ? selectedClient.ie : '-'}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default SelectedClients;