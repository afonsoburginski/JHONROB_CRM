// proposeTable.tsx
'use client'
import React from 'react';
import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, BadgeDelta } from '@tremor/react';
import ProposeButton from '../../components/proposeButton';
import ObservationModal from '../../components/observationModal';

interface ProposeTableProps {
  proposes: Propose[];
}

interface Propose {
  id: number;
  title: string;
  content: string;
  observation: string;
  groups: string;
  product: string;
  type: string;
  model: string;
  capacity: string;
  height: string;
  power: string;
  input: string;
  output: string;
  createdAt: Date; // Adicione esta linha
  clientId: number; // Adicione esta linha
  client: { 
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
  };
  productSelections: any[];
}

const ProposeTable: React.FC<ProposeTableProps> = ({ proposes }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell>ID</TableHeaderCell>
        <TableHeaderCell>Título</TableHeaderCell>
        <TableHeaderCell>Observação</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
        <TableHeaderCell>Gerar Proposta</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {proposes && proposes.map((propose, index) => (
        <TableRow key={index}>
          <TableCell>{propose.id}</TableCell>
          <TableCell>{`Proposta ${propose.client.name}`}</TableCell> 
          <TableCell>
            <ObservationModal observation={propose.observation} />
          </TableCell>
          <TableCell>
            <BadgeDelta size="sm">
              Aprovado
            </BadgeDelta>
          </TableCell>
          <TableCell>
            <ProposeButton propose={propose} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default ProposeTable;