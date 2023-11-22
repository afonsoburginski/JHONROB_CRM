'use client'
import React from 'react';
import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';

interface Propose {
  id: number;
  title: string;
  content: string;
  observation: string;
  groups: string;
  inputOutputs: string;
}

interface ProposeTableProps {
  proposes: Propose[];
}

const ProposeTable: React.FC<ProposeTableProps> = ({ proposes }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell>ID</TableHeaderCell>
        <TableHeaderCell>Título</TableHeaderCell>
        <TableHeaderCell>Conteúdo</TableHeaderCell>
        <TableHeaderCell>Observação</TableHeaderCell>
        <TableHeaderCell>Grupos</TableHeaderCell>
        <TableHeaderCell>Entradas e Saídas</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {proposes && proposes.map((propose, index) => (
        <TableRow key={index}>
          <TableCell>{propose.id}</TableCell>
          <TableCell>{propose.title}</TableCell>
          <TableCell>{propose.content}</TableCell>
          <TableCell>{propose.observation}</TableCell>
          <TableCell>{JSON.stringify(propose.groups)}</TableCell>
          <TableCell>{JSON.stringify(propose.inputOutputs)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default ProposeTable;