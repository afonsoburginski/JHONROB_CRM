// expeditionTable.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { HiXMark } from "react-icons/hi2";
import { ToastContainer } from 'react-toastify';
import { showToastError } from '../../components/toastfy';
import { Card, Flex, Title, Text, Button, SearchSelect, SearchSelectItem, MultiSelect, MultiSelectItem, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { useExpeditionContext } from '../../contexts/expeditionContext';

export default function ExpeditionTable({ searchParams, onNext }: { searchParams: { q: string }; onNext: () => void; }) {
  const { ofs, setOfs, attachedItems, setAttachedItems, selectedOF, setSelectedOF, savedItems, setSavedItems, savedOFs, setSavedOFs, ofInfos, setOfInfos } = useExpeditionContext();
  const [items, setItems] = useState(ofInfos.map(of => of.items).flat());
  const [selectedItemIndices, setSelectedItemIndices] = useState([]);

  useEffect(() => {
    const fetchedItems = [
      { product: 'Item 1', quantity: 10, balance: 10, code: 'A1', rdProduct: 'RD1', unit: 'kg', color: 'red', material: 'steel', dimensions: '10x20x30', weight: '2kg' },
      { product: 'Item 2', quantity: 20, balance: 10, code: 'B1', rdProduct: 'RD2', unit: 'kg', color: 'blue', material: 'iron', dimensions: '20x30x40', weight: '3kg' },
      { product: 'Item 3', quantity: 30, balance: 15, code: 'C1', rdProduct: 'RD3', unit: 'kg', color: 'green', material: 'aluminium', dimensions: '30x40x50', weight: '4kg' },
      { product: 'Item 4', quantity: 30, balance: 15, code: 'C1', rdProduct: 'RD3', unit: 'kg', color: 'green', material: 'aluminium', dimensions: '30x40x50', weight: '4kg' },
      { product: 'Item 5', quantity: 30, balance: 15, code: 'C1', rdProduct: 'RD3', unit: 'kg', color: 'green', material: 'aluminium', dimensions: '30x40x50', weight: '4kg' },
      { product: 'Item 6', quantity: 30, balance: 15, code: 'C1', rdProduct: 'RD3', unit: 'kg', color: 'green', material: 'aluminium', dimensions: '30x40x50', weight: '4kg' },
    ];
    setItems(fetchedItems);
  }, []);


  const handleSave = () => {
    console.log('salvo')
    setSavedItems(attachedItems);
    if (selectedOF && !savedOFs.includes(selectedOF)) {
      setSavedOFs([...savedOFs, selectedOF]);
      setOfInfos([...ofInfos, { of: selectedOF, items: attachedItems }]);
    }
  }

  const handleSelectOF = (of: string) => {
    setSelectedOF(of);
    const selectedOf = ofs.find(o => o.of === of);
    if (selectedOf) {
      setAttachedItems(selectedOf.items);
    } else {
      setAttachedItems([]);
    }
  }

  const handleSelectItem = (indices: React.SetStateAction<never[]>) => {
    setSelectedItemIndices(indices);
  }

  const handleAddItem = () => {
    if (selectedItemIndices.length > 0 && selectedOF !== null) {
      const newItems = selectedItemIndices.map(index => items[index]).filter(item => {
        const isItemAlreadyAttached = attachedItems.some(attachedItem => attachedItem.code === item.code);
        if (isItemAlreadyAttached) {
          showToastError(`O item ${item.name} já foi adicionado.`);
        }
        return !isItemAlreadyAttached;
      });

      setAttachedItems((prevItems) => {
        const updatedItems = [...prevItems, ...newItems];
        setOfs(ofs.map(of => of.of === selectedOF ? { ...of, items: updatedItems } : of));
        return updatedItems;
      });
      setSelectedItemIndices([]);
    }
  }

  const handleRemoveItem = (index: number) => {
    setAttachedItems((prevItems) => prevItems.filter((itemIndex) => itemIndex !== index));
  }

  return (
    <div>
      <ToastContainer />
      <Title>Entrada de expedição</Title>
      <Text>Selecione a OF e anexe itens a ela</Text>
      <div className="flex flex-col md:flex-row gap-4">
        <SearchSelect onValueChange={handleSelectOF} className="md:w-1/2 w-9">
          <SearchSelectItem value="OF 100">OF 100</SearchSelectItem>
          <SearchSelectItem value="OF 200">OF 200</SearchSelectItem>
          <SearchSelectItem value="OF 300">OF 300</SearchSelectItem>
          <SearchSelectItem value="OF 400">OF 400</SearchSelectItem>
        </SearchSelect>
        <div className="w-full md:w-1/2 flex gap-4">
        <MultiSelect onValueChange={handleSelectItem} className="flex-grow">
          {items.map((item, index) => (
            <MultiSelectItem key={index} value={index}>{item.product}</MultiSelectItem>
          ))}
        </MultiSelect>
          <Button onClick={handleAddItem}>Add item</Button>
        </div>
      </div>
      <Card className="mt-6">
        <Title>Selected: {selectedOF ? selectedOF : 'None'}</Title>
        <Text>OFs salvas: {savedOFs.join(', ')}</Text>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Product</TableHeaderCell>
              <TableHeaderCell>Quantity</TableHeaderCell>
              <TableHeaderCell>Balance</TableHeaderCell>
              <TableHeaderCell>Code</TableHeaderCell>
              <TableHeaderCell>RD Product</TableHeaderCell>
              <TableHeaderCell>Unit</TableHeaderCell>
              <TableHeaderCell>Color</TableHeaderCell>
              <TableHeaderCell>Material</TableHeaderCell>
              <TableHeaderCell>(AxLxC)</TableHeaderCell>
              <TableHeaderCell>Weight</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attachedItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.product}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.balance}</TableCell>
                <TableCell>{item.code}</TableCell>
                <TableCell>{item.rdProduct}</TableCell>
                <TableCell>{item.unit}</TableCell>
                <TableCell>{item.color}</TableCell>
                <TableCell>{item.material}</TableCell>
                <TableCell>{item.dimensions}</TableCell>
                <TableCell>{item.weight}</TableCell>
                <TableCell>
                  <Button variant='secondary' onClick={() => handleRemoveItem(index)}>
                    <HiXMark />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <Flex className='mt-5'>
        <Button variant='secondary' onClick={handleSave}>Salvar</Button>
        <Button variant='secondary' onClick={onNext}>Next</Button>
      </Flex>
    </div>
  );
}