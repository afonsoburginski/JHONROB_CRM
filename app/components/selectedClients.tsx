'use client'
// selectedClients.tsx
import React from 'react';
import { Table, Title, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';
import { useSelectedClient } from '../contexts/selectedClientContext';
import { useSpring, animated } from 'react-spring';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import SelectClient from './selectClient';

const SelectedClients: React.FC = () => {
  const { selectedClient } = useSelectedClient();
  const [isHovered, setIsHovered] = React.useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = React.useState(false);

  const animationProps = useSpring({
    opacity: isHovered ? 1 : 0,
    transform: isHovered ? 'translateX(0)' : 'translateX(12%)',
    onRest: () => setIsAnimatingOut(false),
    onStart: () => {
      if (!isHovered) {
        setIsAnimatingOut(true);
      }
    },
  });

  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-between items-center w-full'>
        <Title>Dados do Cliente</Title> 
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex items-center"
        >
          <animated.div style={animationProps} className="flex items-center z-50">
            <SelectClient />
          </animated.div>
          {!isHovered && !isAnimatingOut && <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 flex items-center mt-5" />}
        </div>
      </div>
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