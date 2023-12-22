// selectedProductContext.tsx
'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Group {
  id: number;
  name: string;
}

interface InputOutput {
  id: number;
  name: string;
  power: string;
  height: string;
}

interface Product {
  [x: string]: any;
  id: number;
  title: string;
  group: Group;
  inputOutput: InputOutput;
  height: string;
  power: string;
  tempId?: number;
}

interface SelectedProductContextData {
  selectedProduct: Product | null;
  selectProduct: (product: Product | null) => void;
  selectedProducts: Product[];
  addProductToTable: (product: Product) => void;
  removeProduct: (tempId: number) => void;
  resetSelectedProducts: () => void;
}

export const SelectedProductContext = createContext<SelectedProductContextData>({} as SelectedProductContextData);

interface SelectedProductProviderProps {
  children: ReactNode;
}

export const SelectedProductProvider: React.FC<SelectedProductProviderProps> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const selectProduct = (product: Product | null) => {
    setSelectedProduct(product);
  };

  const addProductToTable = (product: Product) => {
    const productWithTempId = { ...product, tempId: Date.now() };
    setSelectedProducts(prevProducts => [...prevProducts, productWithTempId]);
  };

  const removeProduct = (tempId: number) => {
    setSelectedProducts(prevProducts => prevProducts.filter(product => product.tempId !== tempId));
  };

  const resetSelectedProducts = () => {
    setSelectedProducts([]);
  };

  return (
    <SelectedProductContext.Provider value={{ selectedProduct, selectProduct, selectedProducts, addProductToTable, removeProduct, resetSelectedProducts }}>
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