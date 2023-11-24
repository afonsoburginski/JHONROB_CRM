// selectedProducts.tsx
'use client';
import React from 'react';
import { Table, Title, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';
import { useSelectedProduct } from '../contexts/selectedProductContext';

interface Product {
  group: string;
  product: string;
  type: string;
  model: string;
  capacity: string;
  height: string;
  power: string;
  input: string[]; // Atualizado para ser um array de strings
  output: string[]; // Atualizado para ser um array de strings
}

const SelectedProducts: React.FC = () => {
  const { selectedProducts } = useSelectedProduct();

  return (
    <>
      <Title>Itens da Venda</Title> 
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Grupo</TableHeaderCell>
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
          {selectedProducts.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.group}</TableCell>
              <TableCell>{product.product}</TableCell>
              <TableCell>{product.type}</TableCell>
              <TableCell>{product.model}</TableCell>
              <TableCell>{product.capacity}</TableCell>
              <TableCell>{product.height}</TableCell>
              <TableCell>{product.power}</TableCell>
              <TableCell>{product.input}</TableCell>
              <TableCell>{product.output}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default SelectedProducts;