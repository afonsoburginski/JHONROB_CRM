// selectedClients.tsx
'use client'
import React, { useRef } from 'react';
import { Table, Title, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';
import { useSelectedClient } from '../contexts/selectedClientContext';
import SelectClient from './selectClient';
import { Transition } from 'react-transition-group';

const duration = 150;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
  unmounted: { opacity: 0 },
};

const TransitionCell: React.FC<{value: string | null}> = ({ value }) => {
  const nodeRef = useRef(null);
  return (
    <TableCell className={`w-1/4 py-0`}>
      <Transition in={value !== null} timeout={duration} nodeRef={nodeRef}>
        {state => (
          <div ref={nodeRef} style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            {value || '-'}
          </div>
        )}
      </Transition>
    </TableCell>
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
      <Table className="bg-grey-lighter text-grey-darker mt-5 mb-5">
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
            <TransitionCell value={selectedClient?.name || null} />
            <TransitionCell value={selectedClient?.email || null} />
            <TransitionCell value={selectedClient?.phone || null} />
            <TransitionCell value={selectedClient?.address || null} />
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
            <TransitionCell value={selectedClient?.city || null} />
            <TransitionCell value={selectedClient?.state || null} />
            <TransitionCell value={selectedClient?.zip || null} />
            <TransitionCell value={selectedClient?.cpfCnpj || null} />
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default SelectedClients;