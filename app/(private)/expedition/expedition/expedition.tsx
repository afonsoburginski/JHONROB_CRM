// expedition.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Grid, Text, Title, SearchSelect, SearchSelectItem, NumberInput, Button, Card, Flex } from '@tremor/react';
import { useExpeditionContext } from '../../../contexts/expeditionContext';
import { HiXMark } from "react-icons/hi2";
import Layout from './layout';

export const of = [
  { id: '100', amount: 10, client: 'Cliente 1', emission: '2022-01-01', delivery: '2022-01-10', tag: 'SP-1' },
  { id: '200', amount: 20, client: 'Cliente 2', emission: '2022-02-01', delivery: '2022-02-10', tag: 'RD-5' },
  { id: '300', amount: 30, client: 'Cliente 3', emission: '2022-03-01', delivery: '2022-03-10', tag: 'VR-2' },
  { id: '400', amount: 40, client: 'Cliente 4', emission: '2022-04-01', delivery: '2022-04-10', tag: 'LT-3' },
];

export const product = [
  { id: '(16000411)', name: 'FIXDR LONG TC', },
  { id: '(16000415)', name: 'BICA DSC CHUTE TC', },
  { id: '(160001754)', name: 'PONT ESQ ACION TC', },
  { id: '(16000366)', name: 'TAMBOR PE TC', },
];

export const piece = [
  { id: 'CONE EXT TAMPA SL 07 CONJ SOLDA', quantity: 10, balance: 10, code: '100', rdProduct: '1', unit: 'Pç', color: 'red', material: 'iron', dimensions: '10x20x30', weight: '20' },
  { id: 'CONE INT TAMPA SL 05 A 09', quantity: 20, balance: 10, code: '200', rdProduct: '2', unit: 'Pç', color: 'blue', material: 'iron', dimensions: '20x30x40', weight: '30' },
  { id: 'ESTRUT TAMPA ENTR SL 05 A 09', quantity: 30, balance: 15, code: '300', rdProduct: '3', unit: 'Pç', color: 'green', material: 'iron', dimensions: '30x40x50', weight: '40' },
  { id: 'TRIPE TAMPA SL 05 A 09', quantity: 30, balance: 15, code: '400', rdProduct: '4', unit: 'Pç', color: 'green', material: 'iron', dimensions: '30x40x50', weight: '40' },
  { id: 'ENTR 0240 TAMPA SL 05 C/PORTA', quantity: 30, balance: 15, code: '500', rdProduct: '5', unit: 'Pç', color: 'green', material: 'iron', dimensions: '30x40x50', weight: '40' },
  { id: 'VENT RLS 630 C/ MTR 15CV', quantity: 30, balance: 15, code: '600', rdProduct: '6', unit: 'Pç', color: 'green', material: 'iron', dimensions: '30x40x50', weight: '40' },
];

export default function Expedition() {
  const { setOfs, setAttachedItems, setSavedItems, savedItems } = useExpeditionContext();
  const [selectedOf, setSelectedOf] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [sentItems, setSentItems] = useState([]);

  const handleSave = () => {
    const existingProduct = savedItems.find(item => item.product.id === selectedProduct.id);
    
    if (existingProduct) {
      const existingPiece = existingProduct.pieces.find(p => p.piece.id === selectedPiece.id);
      if (!existingPiece) {
        existingProduct.pieces = [...existingProduct.pieces, { piece: { ...selectedPiece, quantity: quantity }, quantity }];
      } else {
        existingPiece.quantity += quantity;
        existingPiece.piece.quantity = quantity;
      }
    } else {
      setSavedItems(prevState => [...prevState, { of: selectedOf, product: selectedProduct, pieces: [{ piece: { ...selectedPiece, quantity: quantity }, quantity }] }]);
    }
    setSelectedPiece(null);
  };

  const handleRemove = (productIndex, pieceIndex) => {
    setSavedItems(prevState => {
      const newSavedItems = [...prevState];
      newSavedItems[productIndex].pieces.splice(pieceIndex, 1);
      if (newSavedItems[productIndex].pieces.length === 0) {
        newSavedItems.splice(productIndex, 1);
      }
      return newSavedItems;
    });
  };

  const handleSend = () => {
    console.log('Dados Enviados', { of: selectedOf, product: selectedProduct, piece: selectedPiece, quantity });
    setSentItems(savedItems);
    setSavedItems([]);
  };

  return (
    <Grid className="grid grid-cols-4 h-[84vh]">
      <Grid className="col-span-1 bg-white p-4 flex flex-col gap-5" >
        <Grid className="grid grid-cols-2 gap-4">
          <div>
            <Text>OF</Text>
            <SearchSelect value={selectedOf?.id} onChange={(id) => setSelectedOf(of.find(item => item.id === id))}>
              {of.map((item) => <SearchSelectItem key={item.id} value={item.id}>{item.id}</SearchSelectItem>)}
            </SearchSelect>
          </div>
          <div>
            <Text>Produto</Text>
            <SearchSelect value={selectedProduct?.id} onChange={(id) => setSelectedProduct(product.find(item => item.id === id))}>
              {product.map((item) => <SearchSelectItem key={item.id} value={item.id}>{`${item.id} - ${item.name}`}</SearchSelectItem>)}
            </SearchSelect>
          </div>
        </Grid>
        <Grid className="grid grid-cols-2 gap-4">
          <div>
            <Text>Peça</Text>
            <SearchSelect value={selectedPiece?.id} onChange={(id) => setSelectedPiece(piece.find(item => item.id === id))}>
              {piece.map((item) => <SearchSelectItem key={item.code} value={item.id}>{item.id}</SearchSelectItem>)}
            </SearchSelect>
          </div>
          <div>
            <Text>Quantidade</Text>
            <NumberInput 
              value={quantity} 
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value > selectedPiece?.quantity) {
                  setQuantity(selectedPiece?.quantity);
                } else {
                  setQuantity(value);
                }
              }} 
              max={selectedPiece?.quantity} 
            />
          </div>
        </Grid>

        <Button onClick={handleSave}>Salvar</Button>
        <Grid className="overflow-auto h-[50vh] flex flex-col p-2 gap-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
          {savedItems.map((item, productIndex) => (
            <Card key={productIndex}>
              <Text className="font-bold">OF: {item.of.id}</Text>
              <Text className="font-semibold">Produto: {item.product.id} - {item.product.name}</Text>
              {item.pieces.map((pieceItem, pieceIndex) => (
                <Flex key={pieceIndex}>
                  <Text>PÇ: {pieceItem.piece.id}</Text>
                  <div className="flex">
                    <Text className="mr-2">Qtd: {pieceItem.piece.quantity}</Text>
                    <Button variant="light" onClick={() => handleRemove(productIndex, pieceIndex)}>
                      <HiXMark />
                    </Button>
                  </div>
                </Flex>
              ))}
            </Card>
          ))}
        </Grid>
        <div className="flex-grow"></div>
          <Button onClick={handleSend}>Enviar</Button>
      </Grid>
      <Flex className="col-span-3 bg-gray-200 p-4 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent" alignItems='start' >
        <Layout savedItems={sentItems} />
      </Flex>
    </Grid>
  );
}