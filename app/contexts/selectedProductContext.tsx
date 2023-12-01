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
  id: number;
  title: string;
  group: Group;
  inputOutput: InputOutput;
  height: string;
  power: string;
}

interface SelectedProductContextData {
  selectedProduct: Product | null;
  selectProduct: (product: Product | null) => void;
  selectedProducts: Product[];
  addProductToTable: (product: Product) => void;
  resetSelectedProducts: () => void; // Adicione esta linha
}

const SelectedProductContext = createContext<SelectedProductContextData>({} as SelectedProductContextData);

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
    setSelectedProducts(prevProducts => [...prevProducts, product]);
  };

  const resetSelectedProducts = () => { // Adicione esta função
    setSelectedProducts([]);
  };

  return (
    <SelectedProductContext.Provider value={{ selectedProduct, selectProduct, selectedProducts, addProductToTable, resetSelectedProducts }}>
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