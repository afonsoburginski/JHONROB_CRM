// selectedProducts.tsx
'use client';
import React from 'react';
import { HiXMark } from "react-icons/hi2";
import { Table, Title, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Button } from '@tremor/react';
import { useSelectedProduct } from '../contexts/selectedProductContext';

const SelectedProducts: React.FC = () => {
  const { selectedProducts, removeProduct } = useSelectedProduct();

  const handleRemoveProduct = (tempId: number) => {
    removeProduct(tempId);
  };

  return (
    <>
      <Title>Itens da Venda</Title> 
      <div className='h-80'>
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
              <TableCell><div style={{ lineHeight: '1.0' }}>{product.group.title}</div></TableCell>
              <TableCell><div style={{ lineHeight: '1.0' }}>{product.product.title}</div></TableCell>
              <TableCell><div style={{ lineHeight: '1.0' }}>{product.type.title}</div></TableCell>
              <TableCell><div style={{ lineHeight: '1.0' }}>{product.model.title}</div></TableCell>
              <TableCell><div style={{ lineHeight: '1.0' }}>{product.capacity.title}</div></TableCell>
              <TableCell><div style={{ lineHeight: '1.0' }}>{product.height.title}</div></TableCell>
              <TableCell><div style={{ lineHeight: '1.0' }}>{product.power.title}</div></TableCell>
              <TableCell><div style={{ lineHeight: '1.0' }}>{product.input.title}</div></TableCell>
              <TableCell><div style={{ lineHeight: '1.0' }}>{product.output.title}</div></TableCell>
              <TableCell style={{ padding: '0'}}>
                <Button style={{ borderRadius: '5px' }} variant='secondary' onClick={() => product.tempId !== undefined && handleRemoveProduct(product.tempId)}>
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