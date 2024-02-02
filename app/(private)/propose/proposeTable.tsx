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
  <div className='flex flex-col w-full h-full overflow-auto'>
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell className="w-1/4 py-1">ID</TableHeaderCell>
          <TableHeaderCell className="w-1/4 py-1">Título</TableHeaderCell>
          <TableHeaderCell className="w-1/4 py-1">Observação</TableHeaderCell>
          <TableHeaderCell className="w-1/4 py-1">Status</TableHeaderCell>
          <TableHeaderCell className="w-1/4 py-1">Gerar Proposta</TableHeaderCell>
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
  </div>
);

export default ProposeTable;