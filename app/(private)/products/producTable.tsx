// productTable.tsx
'use client'
import React, { useState } from 'react';
import { Title, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Button } from '@tremor/react';
import EditProductsModal from './editProductModal';

const ProductTable: React.FC<ProductTableProps> = ({ groups = [] }) => {
  const [openRows, setOpenRows] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  const toggleRow = (id: string) => {
    const currentOpenRows = [...openRows];
    const index = currentOpenRows.indexOf(id);
  
    if (index !== -1) {
      currentOpenRows.splice(index, 1);
    } else {
      currentOpenRows.push(id);
    }
  
    setOpenRows(currentOpenRows);
  }

  const toggleProductSelection = (id: string) => {
    const currentSelectedProducts = [...selectedProducts];
    const index = currentSelectedProducts.indexOf(id);
  
    if (index !== -1) {
      currentSelectedProducts.splice(index, 1);
    } else {
      currentSelectedProducts.push(id);
    }
  
    setSelectedProducts(currentSelectedProducts);
  }

  const handleEditSelected = () => {
    const selectedProductIds = groups.flatMap(group => 
      group.products.filter(product => selectedProducts.includes(product.id)).map(product => product.id)
    );
  
    setSelectedProducts(selectedProductIds);
    setIsEditing(true);
  }

  const countVariations = (product: Product) => {
    let count = 0;
    if (product.types && product.models) {
      product.types.forEach((type: Type) => {
        product.models.forEach((model: Model) => {
          if (model.capacities) {
            model.capacities.forEach((capacity: Capacity) => {
              if (capacity.heights) {
                capacity.heights.forEach((height: Height) => {
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
              <TableHeaderCell></TableHeaderCell>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Grupo</TableHeaderCell>
              <TableHeaderCell>Equipamento</TableHeaderCell>
              <TableHeaderCell>Variações</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groups && groups.map((group) => (
              group.products.map((product) => (
                <React.Fragment key={product.id}>
                  <TableRow onClick={() => toggleRow(product.id)}>
                    <TableCell>
                      <input type="checkbox" onChange={() => toggleProductSelection(product.id)} />
                    </TableCell>
                    <TableCell>{group.id}</TableCell>
                    <TableCell>{group.title}</TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell colSpan={5}>
                      <span className="bg-blue-500 text-white rounded-full px-1.5 inline-block">
                        {countVariations(product)}
                      </span>
                    </TableCell>
                  </TableRow>
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
        {selectedProducts.length > 0 && <Button onClick={handleEditSelected}>Editar Selecionados</Button>}
      </div>
      <EditProductsModal open={isEditing} onClose={() => setIsEditing(false)} products={selectedProducts} />
    </>
  );
};

export default ProductTable;