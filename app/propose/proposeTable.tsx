'use client'
import React from 'react';
import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';

interface ProposeTableProps {
  proposes: Propose[];
}

interface Propose {
  id: number;
  title: string;
  content: string;
  observation: string;
  groups: string;
  inputOutputs: string;
  equipment: string;
  product: string;
  model: string;
  capacity: string;
  height: string;
  power: string;
  input: string;
  output: string;
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
        <TableHeaderCell>Equipamento</TableHeaderCell>
        <TableHeaderCell>Produto</TableHeaderCell>
        <TableHeaderCell>Modelo</TableHeaderCell>
        <TableHeaderCell>Capacidade</TableHeaderCell>
        <TableHeaderCell>Altura</TableHeaderCell>
        <TableHeaderCell>Potência</TableHeaderCell>
        <TableHeaderCell>Entrada</TableHeaderCell>
        <TableHeaderCell>Saída</TableHeaderCell>
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
          <TableCell>{propose.equipment}</TableCell>
          <TableCell>{propose.product}</TableCell>
          <TableCell>{propose.model}</TableCell>
          <TableCell>{propose.capacity}</TableCell>
          <TableCell>{propose.height}</TableCell>
          <TableCell>{propose.power}</TableCell>
          <TableCell>{propose.input}</TableCell>
          <TableCell>{propose.output}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default ProposeTable;