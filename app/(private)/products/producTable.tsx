// productTable.tsx
'use client'
import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Button } from '@tremor/react';

type Model = {
  id: number;
  title: string;
  // Adicione outros campos para Model aqui
};

type Type = {
  id: number;
  title: string;
  // Adicione outros campos para Type aqui
};

type Product = {
  id: number;
  title: string;
  groupId: number;
  group: Group;
  models: Model[];
  types: Type[];
};

type Group = {
  id: number;
  title: string;
  products: Product[];
};

type ProductTableProps = {
  groups: Group[] | undefined;
};

const ProductTable: React.FC<ProductTableProps> = ({ groups }) => {
  console.log(groups);
  if (!groups) {
    return <p>Carregando...</p>;
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>ID do Grupo</TableHeaderCell>
          <TableHeaderCell>Título do Grupo</TableHeaderCell>
          <TableHeaderCell>Título do Produto</TableHeaderCell>
          <TableHeaderCell>Título do Modelo</TableHeaderCell>
          <TableHeaderCell>Título do Tipo</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {groups.map((group) => (
          group.products.map((product) => (
            product.models.map((model) => (
              product.types.map((type) => (
                <TableRow key={`${group.id}-${product.id}-${model.id}-${type.id}`}>
                  <TableCell>{group.id}</TableCell>
                  <TableCell>{group.title}</TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>{model.title}</TableCell>
                  <TableCell>{type.title}</TableCell>
                </TableRow>
              ))
            ))
          ))
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;