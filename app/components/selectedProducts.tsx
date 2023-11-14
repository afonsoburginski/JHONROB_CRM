'use client';

import React from 'react';
import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';

interface Product {
  title: string;
  model: string;
  capacity: string;
  height: string;
  power: string;
}

interface InputOutput {
  title: string;
  type: string;
}

interface SelectedProductsProps {
  selectedProducts: Product[];
  inputsAndOutputs: InputOutput[];
}

const SelectedProducts: React.FC<SelectedProductsProps> = ({ selectedProducts, inputsAndOutputs }) => {
  const getInputInfo = (product: Product): string => {
    const inputInfo = inputsAndOutputs.find((io) => io.type === 'input');
    return inputInfo ? inputInfo.title : 'N/A';
  };

  const getOutputInfo = (product: Product): string => {
    const outputInfo = inputsAndOutputs.find((io) => io.type === 'output');
    return outputInfo ? outputInfo.title : 'N/A';
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
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
        {selectedProducts.map((product, index) => (
          <TableRow key={index}>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.model}</TableCell>
            <TableCell>{product.capacity}</TableCell>
            <TableCell>{product.height}</TableCell>
            <TableCell>{product.power}</TableCell>
            <TableCell>{getInputInfo(product)}</TableCell>
            <TableCell>{getOutputInfo(product)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SelectedProducts;