// selectedClients.tsx
'use client'
import React from 'react';
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
  unmounted: { opacity: 0 }, // Adicione esta linha
};

const SelectedClients: React.FC = () => {
  const { selectedClient } = useSelectedClient();

  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-between items-center w-full'>
        <Title>Dados do Cliente</Title> 
        <div className="flex items-center">
          <SelectClient />
        </div>
      </div>
      <Table className="bg-grey-lighter text-grey-darker">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="w-1/3 py-1">Nome</TableHeaderCell>
            <TableHeaderCell className="w-1/3 py-1">Email</TableHeaderCell>
            <TableHeaderCell className="w-1/3 py-1">Telefone</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={`w-1/3 py-0`}>
              <Transition in={selectedClient !== null} timeout={duration}>
                {state => (
                  <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                    {selectedClient ? selectedClient.name : '-'}
                  </div>
                )}
              </Transition>
            </TableCell>
            <TableCell className={`w-1/3 py-0`}>
              <Transition in={selectedClient !== null} timeout={duration}>
                {state => (
                  <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                    {selectedClient ? selectedClient.email : '-'}
                  </div>
                )}
              </Transition>
            </TableCell>
            <TableCell className={`w-1/3 py-0`}>
              <Transition in={selectedClient !== null} timeout={duration}>
                {state => (
                  <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                    {selectedClient ? selectedClient.phone : '-'}
                  </div>
                )}
              </Transition>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
        
      <Table className="bg-grey-lighter text-grey-darker mt-1">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="w-1/3 py-1">Endereço</TableHeaderCell>
            <TableHeaderCell className="w-1/3 py-1">Cidade</TableHeaderCell>
            <TableHeaderCell className="w-1/3 py-1">Estado</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={`w-1/3 py-0`}>
              <Transition in={selectedClient !== null} timeout={duration}>
                {state => (
                  <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                    {selectedClient ? selectedClient.address : '-'}
                  </div>
                )}
              </Transition>
            </TableCell>
            <TableCell className={`w-1/3 py-0`}>
              <Transition in={selectedClient !== null} timeout={duration}>
                {state => (
                  <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                    {selectedClient ? selectedClient.city : '-'}
                  </div>
                )}
              </Transition>
            </TableCell>
            <TableCell className={`w-1/3 py-0`}>
              <Transition in={selectedClient !== null} timeout={duration}>
                {state => (
                  <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                    {selectedClient ? selectedClient.state : '-'}
                  </div>
                )}
              </Transition>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table className="bg-grey-lighter text-grey-darker mt-1">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="w-1/3 py-1">CEP</TableHeaderCell>
            <TableHeaderCell className="w-1/3 py-1">CPF/CNPJ</TableHeaderCell>
            <TableHeaderCell className="w-1/3 py-1">IE</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={`w-1/3 py-0`}>
              <Transition in={selectedClient !== null} timeout={duration}>
                {state => (
                  <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                    {selectedClient ? selectedClient.zip : '-'}
                  </div>
                )}
              </Transition>
            </TableCell>
            <TableCell className={`w-1/3 py-0`}>
              <Transition in={selectedClient !== null} timeout={duration}>
                {state => (
                  <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                    {selectedClient ? selectedClient.cpfCnpj : '-'}
                  </div>
                )}
              </Transition>
            </TableCell>
            <TableCell className={`w-1/3 py-0`}>
              <Transition in={selectedClient !== null} timeout={duration}>
                {state => (
                  <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                    {selectedClient ? selectedClient.ie : '-'}
                  </div>
                )}
              </Transition>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default SelectedClients;