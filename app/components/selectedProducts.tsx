//selectedProducts.tsx
'use client';
import React from 'react';
import { Table, Title, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';
import { useSelectedProduct } from '../contexts/selectedProductContext'; // Adicione esta linha

interface Product {
  title: string;
  model: string;
  capacity: string;
  height: string;
  power: string;
  input: string; // Adicione esta linha
  output: string; // Adicione esta linha
}

const SelectedProducts: React.FC = () => { // Remova SelectedProductsProps daqui
  const { selectedProducts } = useSelectedProduct(); // Adicione esta linha

  return (
    <>
      <Title>Itens da Venda</Title> 
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