// productTable.tsx
'use client'
import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Title, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Button } from '@tremor/react';

const ProductTable: React.FC<ProductTableProps> = ({ groups }) => {
  const [openRows, setOpenRows] = useState([]);

  const toggleRow = (id) => {
    const currentOpenRows = [...openRows];
    const index = currentOpenRows.indexOf(id);

    if (index !== -1) {
      currentOpenRows.splice(index, 1);
    } else {
      currentOpenRows.push(id);
    }

    setOpenRows(currentOpenRows);
  }

  const countVariations = (product) => {
    let count = 0;
    if (product.types && product.models) {
      product.types.forEach((type) => {
        product.models.forEach((model) => {
          if (model.capacities) {
            model.capacities.forEach((capacity) => {
              if (capacity.heights) {
                capacity.heights.forEach((height) => {
                  if (height.powers) {
                    count += height.powers.length;
                  }
                });
              }
            });
          }
        });
      });
    }
    return count;
  }

  return (
    <>    
      <div className='max-h-max overflow-auto'>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Grupo</TableHeaderCell>
              <TableHeaderCell>Equipamento</TableHeaderCell>
              <TableHeaderCell>Variações</TableHeaderCell>
              <TableHeaderCell>Produto</TableHeaderCell>
              <TableHeaderCell>Modelo</TableHeaderCell>
              <TableHeaderCell>Capacidade</TableHeaderCell>
              <TableHeaderCell>Altura</TableHeaderCell>
              <TableHeaderCell>Potência</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groups && groups.map((group) => (
              group.products.map((product) => (
                <React.Fragment key={product.id}>
                  <TableRow onClick={() => toggleRow(product.id)}>
                    <TableCell>{group.id}</TableCell>
                    <TableCell>{group.title}</TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell colSpan={5}>
                      <span className="bg-blue-500 text-white rounded-full px-1.5 inline-block">
                        {countVariations(product)}
                      </span>
                    </TableCell>
                  </TableRow>
                  {openRows.includes(product.id) && product.types.map((type) =>
                    product.models.map((model) =>
                      model.capacities.map((capacity) =>
                        capacity.heights.map((height) =>
                          height.powers.map((power) => (
                            <TableRow 
                              key={`${group.id}-${product.id}-${type.id}-${model.id}-${capacity.id}-${height.id}-${power.id}`}
                              style={{ lineHeight: '1.0' }}
                            >
                              <TableCell colSpan={4}></TableCell>
                              <TableCell>{"└─ " + type.title}</TableCell>
                              <TableCell>{model.title}</TableCell>
                              <TableCell>{capacity.title}</TableCell>
                              <TableCell>{height.title}</TableCell>
                              <TableCell>{power.title}</TableCell>
                            </TableRow>
                          ))
                        )
                      )
                    )
                  )}
                </React.Fragment>
              ))
            ))}
            {Array(8 - (groups ? groups.length : 0)).fill(0).map((_, index) => (
              <TableRow key={`empty-${index}`}>
                <TableCell colSpan={7}>&nbsp;</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ProductTable;