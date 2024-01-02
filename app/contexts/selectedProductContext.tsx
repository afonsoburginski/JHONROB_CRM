// selectedProductContext.tsx
'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SelectedProductContextData {
  selectedProduct: Product | null;
  selectProduct: (product: Product | null) => void;
  selectedProducts: Product[];
  addProductToTable: (product: Product) => void;
  removeProduct: (tempId: number) => void;
  resetSelectedProducts: () => void;
  resetFields: () => void;
}

export const SelectedProductContext = createContext<SelectedProductContextData>({} as SelectedProductContextData);

interface SelectedProductProviderProps {
  children: ReactNode;
}

export const SelectedProductProvider: React.FC<SelectedProductProviderProps> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const selectProduct = (product: Product | null) => {
    console.log('selectProduct chamado com', product);
    setSelectedProduct(product);
  };

  const addProductToTable = (product: Product) => {
    console.log('addProductToTable chamado com', product);
    const productWithTempId = { ...product, tempId: Date.now() };
    setSelectedProducts(prevProducts => {
      console.log('setSelectedProducts chamado com', [...prevProducts, productWithTempId]);
      return [...prevProducts, productWithTempId];
    });
  };

  const removeProduct = (tempId: number) => {
    console.log('removeProduct chamado com', tempId);
    setSelectedProducts(prevProducts => prevProducts.filter(product => product.tempId !== tempId));
  };

  const resetSelectedProducts = () => {
    console.log('resetSelectedProducts chamado');
    setSelectedProducts([]);
  };

  const resetFields = () => { // Adicione esta função
    console.log('resetFields chamado');
    setSelectedProduct(null);
  };

  return (
    <SelectedProductContext.Provider value={{ selectedProduct, selectProduct, selectedProducts, addProductToTable, removeProduct, resetSelectedProducts, resetFields }}>
      {children}
    </SelectedProductContext.Provider>
  );
};

export const useSelectedProduct = (): SelectedProductContextData => {
  const context = useContext(SelectedProductContext);
  if (!context) {
    throw new Error('useSelectedProduct must be used within a SelectedProductProvider');
  }
  return context;
};