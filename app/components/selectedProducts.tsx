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
  input: string[];
  output: string[];
}

const SelectedProducts: React.FC = () => {
  const { selectedProducts, removeProduct } = useSelectedProduct(); // Adicione removeProduct

  const handleRemoveProduct = (index: number) => {
    removeProduct(index);
  };

  return (
    <>
      <Title>Itens da Venda</Title> 
      <div className='max-h-96 overflow-auto'>
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
              <TableHeaderCell>Remover</TableHeaderCell> {/* Adicione uma coluna para o botão de remover */}
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedProducts.map((product, index) => (
              <TableRow key={index} style={{ height: '46.53px' }}>
                <TableCell style={{ lineHeight: '1.0' }}>{product.group}</TableCell>
                <TableCell style={{ lineHeight: '1.0' }}>{product.product}</TableCell>
                <TableCell style={{ lineHeight: '1.0' }}>{product.type}</TableCell>
                <TableCell style={{ lineHeight: '1.0' }}>{product.model}</TableCell>
                <TableCell style={{ lineHeight: '1.0' }}>{product.capacity}</TableCell>
                <TableCell style={{ lineHeight: '1.0' }}>{product.height}</TableCell>
                <TableCell style={{ lineHeight: '1.0' }}>{product.power}</TableCell>
                <TableCell style={{ lineHeight: '1.0' }}>{product.input}</TableCell>
                <TableCell style={{ lineHeight: '1.0' }}>{product.output}</TableCell>
                <TableCell style={{ lineHeight: '1.0' }}>
                  <button onClick={() => handleRemoveProduct(index)}>X</button> {/* Adicione um botão de remover */}
                </TableCell>
              </TableRow>
            ))}
            {Array.from({ length: 7 - selectedProducts.length }).map((_, index) => (
              <TableRow key={index + selectedProducts.length} style={{ height: '46.53px' }}>
                <TableCell colSpan={10}>
                  <div style={{ visibility: 'hidden', lineHeight: '1.0' }}>Placeholder</div>
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