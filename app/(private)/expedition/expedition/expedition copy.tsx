// expedition.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Grid, Text, SearchSelect, SearchSelectItem, NumberInput, Button, Card, Flex } from '@tremor/react';
import Checkbox from '@mui/material/Checkbox'; // Importe o Checkbox do Material-UI
import { useExpeditionContext } from '../../../contexts/expeditionContext';
import Layout from './layout';

export const of = [
  { name: '100', amount: 10, client: 'Cliente 1', emission: '2022-01-01', delivery: '2022-01-10', tag: 'Tag1' },
  { name: '200', amount: 20, client: 'Cliente 2', emission: '2022-02-01', delivery: '2022-02-10', tag: 'Tag2' },
  { name: '300', amount: 30, client: 'Cliente 3', emission: '2022-03-01', delivery: '2022-03-10', tag: 'Tag3' },
  { name: '400', amount: 40, client: 'Cliente 4', emission: '2022-04-01', delivery: '2022-04-10', tag: 'Tag4' },
];

export const product = [
  { name: 'Produto 1', pieces: ['Peça 1', 'Peça 2'] },
  { name: 'Produto 2', pieces: ['Peça 3'] },
  { name: 'Produto 3', pieces: ['Peça 4', 'Peça 5'] },
  { name: 'Produto 4', pieces: ['Peça 6'] }
];

export const piece = [
  { name: 'Peça 1', quantity: 10, balance: 10, code: '100', rdProduct: '1', unit: 'Pç', color: 'red', material: 'iron', dimensions: '10x20x30', weight: '20' },
  { name: 'Peça 2', quantity: 20, balance: 10, code: '200', rdProduct: '2', unit: 'Pç', color: 'blue', material: 'iron', dimensions: '20x30x40', weight: '30' },
  { name: 'Peça 3', quantity: 30, balance: 15, code: '300', rdProduct: '3', unit: 'Pç', color: 'green', material: 'iron', dimensions: '30x40x50', weight: '40' },
  { name: 'Peça 4', quantity: 30, balance: 15, code: '400', rdProduct: '4', unit: 'Pç', color: 'green', material: 'iron', dimensions: '30x40x50', weight: '40' },
  { name: 'Peça 5', quantity: 30, balance: 15, code: '500', rdProduct: '5', unit: 'Pç', color: 'green', material: 'iron', dimensions: '30x40x50', weight: '40' },
  { name: 'Peça 6', quantity: 30, balance: 15, code: '600', rdProduct: '6', unit: 'Pç', color: 'green', material: 'iron', dimensions: '30x40x50', weight: '40' },
];

export default function Expedition() {
  const { ofs, setOfs, attachedItems, setAttachedItems, selectedOF, setSelectedOF, savedItems, setSavedItems, info, setInfo } = useExpeditionContext();
  const [selectedProduct, setSelectedProduct] = useState('');
  const [availablePieces, setAvailablePieces] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState('');
  const [pieceQuantity, setPieceQuantity] = useState(1);

  const handleSubmit = () => {
    console.log('handleSubmit foi chamada');
    console.log(attachedItems);
    setSavedItems([...attachedItems]);
  }

  const handleSelectProduct = (productName) => {
    setSelectedProduct(productName);
    const productItem = product.find(p => p.name === productName);
    if (productItem) {
      setAvailablePieces(productItem.pieces);
    } else {
      setAvailablePieces([]);
    }
  };

  const handleSelectPiece = (pieceName) => {
    setSelectedPiece(pieceName);
    const pieceItem = piece.find(p => p.name === pieceName);
    if (pieceItem) {
      setPieceQuantity(pieceItem.quantity);
    } else {
      setPieceQuantity(0);
    }
  };

  const handlePieceQuantityChange = (quantity) => {
    setPieceQuantity(quantity);
  };

  const handleAddItem = () => {
    if (!selectedPiece) {
      return;
    }
  
    const item = piece.find(p => p.name === selectedPiece);
    if (item) {
      setAttachedItems(prevItems => {
        const existingItemIndex = prevItems.findIndex(i => i.of === selectedOF);
        if (existingItemIndex !== -1) {
          const newItems = [...prevItems];
          const existingItem = newItems[existingItemIndex];
          const existingProductIndex = existingItem.product.findIndex(p => p.name === selectedProduct);
          if (existingProductIndex !== -1) {
            const existingPieceIndex = existingItem.product[existingProductIndex].pieces.findIndex(p => p.name === item.name);
            if (existingPieceIndex === -1) {
              existingItem.product[existingProductIndex].pieces = [...existingItem.product[existingProductIndex].pieces, {name: item.name, checked: false, quantity: pieceQuantity}];
            } else {
              return prevItems;
            }
          } else {
            existingItem.product = [...existingItem.product, {name: selectedProduct, pieces: [{name: item.name, checked: false, quantity: pieceQuantity}]}];
          }
          console.log('Item adicionado:', newItems);
          setSavedItems(prevItems => [...prevItems, newItems]);
          return newItems;
        } else {
          const newItem = { of: selectedOF, product: [{name: selectedProduct, pieces: [{name: item.name, checked: false, quantity: pieceQuantity}]}], quantity: pieceQuantity };
          console.log('Item adicionado:', [...prevItems, newItem]);
          setSavedItems(prevItems => [...prevItems, newItem]);
          return [...prevItems, newItem];
        }
      });
    } else {
    }
  };

  const handlePieceCheckChange = (itemIndex, productIndex, pieceIndex) => {
    setAttachedItems(prevItems => {
      const newItems = [...prevItems];
      const item = {...newItems[itemIndex]};
      const product = {...item.product[productIndex]};
      const piece = {...product.pieces[pieceIndex]};
      piece.checked = !piece.checked;
      product.pieces[pieceIndex] = piece;
      item.product[productIndex] = product;
      newItems[itemIndex] = item;
      return newItems;
    });
  };

  const handleRemoveItem = (item) => {
    setAttachedItems(attachedItems.filter(i => i !== item));
  };

  return (
    <Grid className="grid grid-cols-4 h-[84vh]">
      <Grid className="col-span-1 bg-white p-4 flex flex-col gap-5">
        <Grid className="grid grid-cols-2 gap-4">
          <div>
            <Text>OF</Text>
            <SearchSelect id="of-select" value={selectedOF} onValueChange={setSelectedOF}>
              {of.map(o => <SearchSelectItem key={o.name} value={o.name}>{o.name}</SearchSelectItem>)}
            </SearchSelect>
          </div>
          <div>
            <Text>Produto</Text>
            <SearchSelect id="product-select" value={selectedProduct} onValueChange={handleSelectProduct}>
              {product.map(p => <SearchSelectItem key={p.name} value={p.name}>{p.name}</SearchSelectItem>)}
            </SearchSelect>
          </div>
        </Grid>
        <Grid className="grid grid-cols-2 gap-4">
          <div>
            <Text>Peça</Text>
            <SearchSelect id="piece-select" value={selectedPiece} onValueChange={handleSelectPiece}>
              {availablePieces.map(p => <SearchSelectItem key={p} value={p}>{p}</SearchSelectItem>)}
            </SearchSelect>
          </div>
          <div>
            <Text>Quantidade</Text>
            <NumberInput id="quantity-input" value={pieceQuantity} onChange={(e) => handlePieceQuantityChange(e.target.value)} />
          </div>
        </Grid>
        <Button onClick={handleAddItem} disabled={!selectedPiece} className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Adicionar</Button>
        {attachedItems.map((item, index) => (
          <Grid key={index} className="flex flex-col">
            <Text>{`OF: ${item.of}`}</Text>
            <Grid className="grid grid-cols-2 gap-4">
              {item.product.map((product, productIndex) => (
                <Card key={productIndex} className="p-4 shadow-lg rounded-lg w-full h-auto">
                  <Text className="text-lg font-bold mb-2">{`Produto: ${product.name}`}</Text>
                  {product.pieces.map((piece, pieceIndex) => (
                    <Flex key={pieceIndex} className="flex items-center mt-3">
                      <Checkbox
                        checked={piece.checked}
                        onChange={() => handlePieceCheckChange(index, productIndex, pieceIndex)}
                      />
                      <Text className="ml-2 text-gray-700">{piece.name}</Text>
                      <Text className="ml-2 text-sm text-gray-500">{`Quantidade: ${piece.quantity}`}</Text>
                    </Flex>
                  ))}
                  <Button variant='secondary' onClick={() => handleRemoveItem(item)}>Remover Produto</Button>
                </Card>
              ))}
            </Grid>
          </Grid>
        ))}
        <Button onClick={handleSubmit}>Enviar</Button>
      </Grid>
      <Flex className="col-span-3 bg-gray-200 p-4" alignItems='start' >
        <Layout
          selectedOF={selectedOF}
          attachedItems={attachedItems}
          savedItems={savedItems}
          info={info}
          setSavedItems={setSavedItems}
        />
      </Flex>
    </Grid>
  );
}