'use client'
import React from 'react';
import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';

interface Contract {
  title: string;
  model: string;
  capacity: string;
  height: string;
  power: string;
  input: string; // Nova propriedade
}
interface ContractsTableProps {
  contracts: Contract[];
}

const ContractsTable: React.FC<ContractsTableProps> = ({ contracts }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell>Produto</TableHeaderCell>
        <TableHeaderCell>Modelo</TableHeaderCell>
        <TableHeaderCell>Capacidade</TableHeaderCell>
        <TableHeaderCell>Altura</TableHeaderCell>
        <TableHeaderCell>Power</TableHeaderCell>
        <TableHeaderCell>Entrada</TableHeaderCell> {/* Nova coluna */}
      </TableRow>
    </TableHead>
    <TableBody>
      {contracts.map((contract, index) => (
        <TableRow key={index}>
          <TableCell>{contract.title}</TableCell>
          <TableCell>{contract.model}</TableCell>
          <TableCell>{contract.capacity}</TableCell>
          <TableCell>{contract.height}</TableCell>
          <TableCell>{contract.power}</TableCell>
          <TableCell>{contract.input}</TableCell> {/* Nova célula */}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default ContractsTable;
