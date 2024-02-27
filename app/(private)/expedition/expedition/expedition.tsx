// expedition.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { SearchSelect, SearchSelectItem, MultiSelect, MultiSelectItem, NumberInput, Button, Grid, Flex, Title, Text, Card } from '@tremor/react';
import { Checkbox } from '@mui/material';
import { useExpeditionContext } from '../../../contexts/expeditionContext';
import Layout from './layout';
import { of, product as products, piece } from '../data';

export default function Expedition() {
  const { selectedOF, setSelectedOF, attachedItems, setAttachedItems, savedItems, setSavedItems } = useExpeditionContext();
  const [selectedProduct, setSelectedProduct] = useState('');
  const [availablePieces, setAvailablePieces] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState('');
  const [pieceQuantity, setPieceQuantity] = useState(1);

  const handleSelectProduct = (productName) => {
    setSelectedProduct(productName);
    const product = products.find(p => p.name === productName);
    if (product) {
      setAvailablePieces(product.pieces);
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
      console.log('No piece selected');
      return;
    }
  
    const item = piece.find(p => p.name === selectedPiece);
    if (item) {
      setAttachedItems(prevItems => {
        console.log('Previous items:', prevItems);
        const existingItemIndex = prevItems.findIndex(i => i.of === selectedOF);
        if (existingItemIndex !== -1) {
          const newItems = [...prevItems];
          const existingItem = newItems[existingItemIndex];
          const existingProductIndex = existingItem.product.findIndex(p => p.name === selectedProduct);
          if (existingProductIndex !== -1) {
            // Verifique se a peça já existe
            const existingPieceIndex = existingItem.product[existingProductIndex].pieces.findIndex(p => p.name === item.name);
            if (existingPieceIndex === -1) {
              // Se a peça não existir, adicione a nova peça
              existingItem.product[existingProductIndex].pieces = [...existingItem.product[existingProductIndex].pieces, {name: item.name, checked: false}];
              console.log('Added new piece to existing product:', existingItem);
            } else {
              // Se a peça já existir, não faça nada ou informe ao usuário
              console.log("Peça já adicionada ao produto.");
              return prevItems;
            }
          } else {
            // Se o produto não existir, adicione o novo produto e a peça
            existingItem.product = [...existingItem.product, {name: selectedProduct, pieces: [{name: item.name, checked: false}]}];
            console.log('Added new product and piece to existing item:', existingItem);
          }
          existingItem.quantity = pieceQuantity; // atualize a quantidade se necessário
          return newItems;
        } else {
          // Se não existir um item com a OF selecionada, crie um novo item
          const newItem = { of: selectedOF, product: [{name: selectedProduct, pieces: [{name: item.name, checked: false}]}], quantity: pieceQuantity };
          console.log('Created new item:', newItem);
          return [...prevItems, newItem];
        }
      });
    } else {
      console.log(`No piece found with name: ${selectedPiece}`);
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
              {products.map(p => <SearchSelectItem key={p.name} value={p.name}>{p.name}</SearchSelectItem>)}
            </SearchSelect>
          </div>
        </Grid>
        <Grid className="grid grid-cols-2 gap-4">
          <div flexDirection="column">
            <Text>Peça</Text>
            <SearchSelect id="piece-select" value={selectedPiece} onValueChange={handleSelectPiece}>
              {availablePieces.map(p => <SearchSelectItem key={p} value={p}>{p}</SearchSelectItem>)}
            </SearchSelect>
          </div>
          <div flexDirection="column">
            <Text>Quantidade</Text>
            <NumberInput id="quantity-input" value={pieceQuantity} onChange={(e) => handlePieceQuantityChange(e.target.value)} />
          </div>
        </Grid>
        <Button onClick={handleAddItem} disabled={!selectedPiece} className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Adicionar</Button>
        {attachedItems.map((item, index) => (
          <Grid key={index} className="flex flex-col">
            <Title>{`OF: ${item.of}`}</Title>
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
                    <Text className="ml-2 text-sm text-gray-500">{`Quantidade: ${pieceQuantity}`}</Text>
                  </Flex>
                ))}
                <Button variant='secondary' onClick={() => handleRemoveItem(item)}>Remover Produto</Button>
              </Card>
            ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Flex className="col-span-3 bg-gray-200 p-4" alignItems='start' >
        <Layout 
          selectedOF={selectedOF}
          attachedItems={attachedItems} 
          savedItems={savedItems} 
          setSavedItems={setSavedItems} 
        />
      </Flex>
    </Grid>
  );
}