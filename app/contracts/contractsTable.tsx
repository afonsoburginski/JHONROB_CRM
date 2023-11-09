import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

interface Contract {
  id: number;
  productName: string;
  model: string;
  capacity: string;
  height: string;
  power: string;
  input: string;
  output: string;
}

interface ContractsTableProps {
  contracts: Contract[];
}

const ContractsTable: React.FC<ContractsTableProps> = ({ contracts }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Produto</TableHeaderCell>
          <TableHeaderCell>Modelo</TableHeaderCell>
          <TableHeaderCell>Capacidade</TableHeaderCell>
          <TableHeaderCell>Altura</TableHeaderCell>
          <TableHeaderCell>Power</TableHeaderCell>
          <TableHeaderCell>Entrada</TableHeaderCell>
          <TableHeaderCell>Saída</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {contracts.map((contract) => (
          <TableRow key={contract.id}>
            <TableCell>{contract.id}</TableCell>
            <TableCell>
              <Text>{contract.productName}</Text>
            </TableCell>
            <TableCell>
              <Text>{contract.model}</Text>
            </TableCell>
            <TableCell>
              <Text>{contract.capacity}</Text>
            </TableCell>
            <TableCell>
              <Text>{contract.height}</Text>
            </TableCell>
            <TableCell>
              <Text>{contract.power}</Text>
            </TableCell>
            <TableCell>
              <Text>{contract.input}</Text>
            </TableCell>
            <TableCell>
              <Text>{contract.output}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ContractsTable;
