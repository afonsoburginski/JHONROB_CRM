// selectedProducts.tsx
'use client';
import React from 'react';
import { Table, Title, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';
import { useSelectedProduct } from '../contexts/selectedProductContext';

import { Button } from '@tremor/react';
import { AiOutlineClose } from 'react-icons/ai';
import CloseIcon from '@mui/icons-material/Close';


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
  tempId?: number; // Adicione esta linha
}

const SelectedProducts: React.FC = () => {
  const { selectedProducts, removeProduct } = useSelectedProduct(); // Adicione removeProduct

  const handleRemoveProduct = (tempId: number) => { // Atualize esta linha
    removeProduct(tempId); // Atualize esta linha
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
              <TableHeaderCell style={{ padding: '0'}}>Remover</TableHeaderCell>
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

                <TableCell style={{ lineHeight: '1.0', padding: '0' }}>
                  <Button style={{ borderRadius: '5px' }} variant='secondary' onClick={() => handleRemoveProduct(product.tempId)}>
                    <AiOutlineClose />
                  </Button>
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