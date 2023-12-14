// productTable.tsx
'use client'
import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Button } from '@tremor/react';

const ProductTable: React.FC<ProductTableProps> = ({ groups }) => {
  console.log(groups);
  if (!groups) {
    return <p>Carregando...</p>;
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Grupo</TableHeaderCell>
          <TableHeaderCell>Equipamento</TableHeaderCell>
          <TableHeaderCell>Produto</TableHeaderCell>
          <TableHeaderCell>Modelo</TableHeaderCell>
          <TableHeaderCell>Capacidade</TableHeaderCell>
          <TableHeaderCell>Altura</TableHeaderCell>
          <TableHeaderCell>Potência</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {groups.map((group) => (
          group.products.map((product) => (
            product.types.map((type) => (
              product.models.map((model) => (
                model.capacities.map((capacity) => (
                  capacity.heights.map((height) => (
                    height.powers.map((power) => (
                      <TableRow key={`${group.id}-${product.id}-${model.id}-${type.id}-${capacity.id}-${height.id}-${power.id}`}>
                        <TableCell>{group.id}</TableCell>
                        <TableCell>{group.title}</TableCell>
                        <TableCell>{product.title}</TableCell>
                        <TableCell>{type.title}</TableCell>
                        <TableCell>{model.title}</TableCell>
                        <TableCell>{capacity.title}</TableCell>
                        <TableCell>{height.title}</TableCell>
                        <TableCell>{power.title}</TableCell>
                      </TableRow>
                    ))
                  ))
                ))
              ))
            ))
          ))
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;