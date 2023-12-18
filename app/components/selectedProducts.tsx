// selectedProducts.tsx
'use client';
import React from 'react';
import { HiXMark } from "react-icons/hi2";
import { Table, Title, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Button } from '@tremor/react';
import { useSelectedProduct } from '../contexts/selectedProductContext';

interface Product {
  group: string;
  product: string;
  type: string;
  model: string;
  capacity: string;
  height: string;
  power: string;
  input: string[];
  output: string[];
  tempId?: number;
}

const SelectedProducts: React.FC = () => {
  const { selectedProducts, removeProduct } = useSelectedProduct();

  const handleRemoveProduct = (tempId: number) => {
    removeProduct(tempId);
  };

  return (
    <>
      <Title>Itens da Venda</Title> 
      <div className='max-h-80 overflow-auto'>
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
              <TableHeaderCell style={{ padding: '0'}}>Remover</TableHeaderCell>
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
                <TableCell>
                  <Button style={{ borderRadius: '5px' }} variant='secondary' onClick={() => handleRemoveProduct(product.tempId)}>
                    <HiXMark />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {Array.from({ length: 6 - selectedProducts.length }).map((_, index) => (
              <TableRow key={index + selectedProducts.length}>
                <TableCell colSpan={10}>
                  <div style={{ visibility: 'hidden', lineHeight: '1.0', height: '12px'}}>Placeholder</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default SelectedProducts;