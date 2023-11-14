// ContractsTable.tsx
import React from 'react';
import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';

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
        {/* Adicione outras colunas conforme necessário */}
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
          {/* Adicione outras células conforme necessário */}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default ContractsTable;
