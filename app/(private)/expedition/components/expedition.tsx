import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { Grid, Text, Title, SearchSelect, SearchSelectItem, NumberInput, Button, Card, Flex } from '@tremor/react';
import { useExpeditionContext } from '../../../contexts/expeditionContext';
import { HiXMark } from "react-icons/hi2";
import Layout from './layout';
import ExpeditionModal from 'app/components/expeditionModal';

export default React.memo(function Expedition() {
  const { setOfs: setOfsContext, setAttachedItems, setSavedItems, savedItems } = useExpeditionContext();
  const [selectedOf, setSelectedOf] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [sentItems, setSentItems] = useState([]);
  const [ofs, setOfs] = useState([]);
  const [product, setProduct] = useState([]);
  const [piece, setPiece] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredPieces, setFilteredPieces] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false); // Adicione este estado
  const [isSaved, setIsSaved] = useState(false); // Adicione este estado

  useEffect(() => {
    axios.get('http://localhost:3000/expedition')
      .then(response => {
        const { of, product, piece } = response.data;
        setOfs(of);
        setProduct(product);
        setPiece(piece);
      })
      .catch(error => {
        console.error('Erro ao buscar dados', error);
      });
  }, []);

  useEffect(() => {
    if (selectedOf) {
      setFilteredProducts(product.filter(p => selectedOf.products.includes(p.id)));
    } else {
      setFilteredProducts([]);
    }
  }, [selectedOf, product]);

  useEffect(() => {
    if (selectedProduct) {
      setFilteredPieces(piece.filter(p => selectedProduct.pieces.includes(p.id)));
    } else {
      setFilteredPieces([]);
    }
  }, [selectedProduct, piece]);

  const handleAdd = useCallback(() => {
    let newSavedItems = [...savedItems];
    const productIndex = newSavedItems.findIndex(item => item.product.id === selectedProduct.id);
    if (productIndex !== -1) {
      const pieceIndex = newSavedItems[productIndex].pieces.findIndex(p => p.piece.id === selectedPiece.id);
      if (pieceIndex !== -1) {
        newSavedItems[productIndex].pieces[pieceIndex] = { 
          piece: { ...newSavedItems[productIndex].pieces[pieceIndex].piece, quantity: quantity }, 
          quantity 
        };
      } else {
        newSavedItems[productIndex] = {
          ...newSavedItems[productIndex],
          pieces: [...newSavedItems[productIndex].pieces, { piece: { ...selectedPiece, quantity: quantity }, quantity }]
        };
      }
    } else {
      newSavedItems = [...newSavedItems, { of: selectedOf, product: selectedProduct, pieces: [{ piece: { ...selectedPiece, quantity: quantity }, quantity }] }];
    }
    setSavedItems(newSavedItems);
    setSentItems(newSavedItems);
    setSelectedPiece(null);
    setQuantity(0);
  }, [savedItems, selectedProduct, selectedPiece, quantity]);

  const handleRemove = useCallback((productIndex, pieceIndex) => {
    let newSavedItems = [...savedItems];
    newSavedItems[productIndex].pieces.splice(pieceIndex, 1);
    if (newSavedItems[productIndex].pieces.length === 0) {
      newSavedItems.splice(productIndex, 1);
    }
    setSavedItems(newSavedItems);
    setSentItems(newSavedItems);
  }, [savedItems]);

  const handleSave = useCallback(async () => {
    try {
      const response = await axios.post('api/expedition', savedItems, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Dados salvos com sucesso');
      setSavedItems([]);
      setSentItems([]);
      setIsSaved(true); // Defina o status de salvamento como true
    } catch (error) {
      console.log('Erro ao salvar os dados', error);
      setIsSaved(false); // Defina o status de salvamento como false
    } finally {
      setIsModalOpen(true); // Abra o modal após a tentativa de salvar os dados
    }
  }, [savedItems]);

    return (
      <Grid className="grid grid-cols-4 h-[84vh]">
        <Grid className="col-span-1 bg-white p-4 flex flex-col gap-5" >
          <Grid className="grid grid-cols-2 gap-4">
            <div>
              <Text>OF</Text>
              <SearchSelect value={selectedOf?.id} onChange={(id) => setSelectedOf(ofs.find(item => item.id === id))}>
                {ofs.map((item) => <SearchSelectItem key={item.id} value={item.id}>{item.id}</SearchSelectItem>)}
              </SearchSelect>
            </div>
            <div>
              <Text>Produto</Text>
              <SearchSelect value={selectedProduct?.id} onChange={(id) => setSelectedProduct(filteredProducts.find(item => item.id === id))}>
                {filteredProducts.map((item) => <SearchSelectItem key={item.id} value={item.id}>{`${item.id} - ${item.name}`}</SearchSelectItem>)}
              </SearchSelect>
            </div>
          </Grid>
          <Grid className="grid grid-cols-2 gap-4">
            <div>
              <Text>Peça</Text>
              <SearchSelect value={selectedPiece?.id} onChange={(id) => setSelectedPiece(filteredPieces.find(item => item.id === id))}>
                {filteredPieces.map((item) => <SearchSelectItem key={item.id} value={item.id}>{item.id}</SearchSelectItem>)}
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
        <Button onClick={handleAdd}>Adicionar</Button>
        <Grid className="overflow-auto h-[50vh] flex flex-col p-2 gap-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
          {savedItems.map((item, productIndex) => (
            <Card key={productIndex}>
              <Text className="font-bold">OF: {item.of.id}</Text>
              <Text className="font-semibold">Produto: {item.product.id} - {item.product.name}</Text>
              {item.pieces.map((pieceItem, pieceIndex) => (
              <Flex key={pieceItem.piece.id}>
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
          <Button onClick={handleSave}>Salvar</Button>
          <ExpeditionModal 
            isOpen={isModalOpen} 
            closeModal={() => setIsModalOpen(false)} 
            isSaved={isSaved} 
            linkedDocumentUrl="/caminho/para/o/documento" 
          />
      </Grid>
      <Flex className="col-span-3 bg-gray-200 p-4 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent" alignItems='start' >
        <Layout savedItems={sentItems} />
      </Flex>
    </Grid>
  );
});