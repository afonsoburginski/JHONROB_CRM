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
      <div className='h-80 overflow-auto'>
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
                <TableCell><div style={{ lineHeight: '1.0' }}>{product.group}</div></TableCell>
                <TableCell><div style={{ lineHeight: '1.0' }}>{product.product}</div></TableCell>
                <TableCell><div style={{ lineHeight: '1.0' }}>{product.type}</div></TableCell>
                <TableCell><div style={{ lineHeight: '1.0' }}>{product.model}</div></TableCell>
                <TableCell><div style={{ lineHeight: '1.0' }}>{product.capacity}</div></TableCell>
                <TableCell><div style={{ lineHeight: '1.0' }}>{product.height}</div></TableCell>
                <TableCell><div style={{ lineHeight: '1.0' }}>{product.power}</div></TableCell>
                <TableCell><div style={{ lineHeight: '1.0' }}>{product.input}</div></TableCell>
                <TableCell><div style={{ lineHeight: '1.0' }}>{product.output}</div></TableCell>
                <TableCell style={{ padding: '0'}}>
                  <Button style={{ borderRadius: '5px' }} variant='secondary' onClick={() => handleRemoveProduct(product.tempId)}>
                    <HiXMark />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {Array.from({ length: 6 - selectedProducts.length }).map((_, index) => (
              <TableRow key={index + selectedProducts.length}>
                <TableCell colSpan={10}>
                  <div style={{ visibility: 'hidden', lineHeight: '1.0'}}>Placeholder</div>
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