// proposeTable.tsx
'use client'
import React from 'react';
import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, BadgeDelta } from '@tremor/react';
import ProposeButton from '../../components/proposeButton';
import ObservationModal from '../../components/observationModal';

interface ProposeTableProps {
  proposes: Propose[];
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
      {proposes && proposes.map((propose) => (
        <TableRow key={propose.id}>
          <TableCell>{propose.id}</TableCell>
          <TableCell>{`Proposta ${propose.clientName}`}</TableCell>
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