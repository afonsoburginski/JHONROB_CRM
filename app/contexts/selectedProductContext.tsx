// selectedProductContext.tsx
'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Product {
  id: number;
  title: string;
  group: Group;
  inputOutput: InputOutput;
  height: string; // Adicione esta linha se 'height' pertencer ao produto
  power: string; // Adicione esta linha se 'power' pertencer ao produto
}

interface InputOutput {
  id: number;
  name: string;
  power: string; // Adicione esta linha se 'power' pertencer à entrada/saída
  height: string; // Adicione esta linha se 'height' pertencer à entrada/saída
}

interface SelectedProductContextData {
  selectedProduct: Product | null;
  selectProduct: (product: Product | null) => void;
  selectedProducts: Product[];
  addProductToTable: (product: Product) => void;
  selectedGroups: Group[];
  setSelectedGroups: (groups: Group[]) => void;
  selectedInputOutputs: InputOutput[];
  setSelectedInputOutputs: (inputOutputs: InputOutput[]) => void;
}

const SelectedProductContext = createContext<SelectedProductContextData>({} as SelectedProductContextData);

interface SelectedProductProviderProps {
  children: ReactNode;
}

export const SelectedProductProvider: React.FC<SelectedProductProviderProps> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<Group[]>([]);
  const [selectedInputOutputs, setSelectedInputOutputs] = useState<InputOutput[]>([]);

  const selectProduct = (product: Product | null) => {
    setSelectedProduct(product);
  };

  const addProductToTable = (product: Product) => {
    if (product === null) {
      console.error('Product is null');
      return;
    }
  
    setSelectedProducts(prevProducts => [...prevProducts, product]);
    setSelectedGroups(prevGroups => [...prevGroups, product.group]); // adicione o grupo do produto aos grupos selecionados
    setSelectedInputOutputs(prevInputOutputs => [...prevInputOutputs, product.inputOutput]); // adicione a entrada/saída do produto às entradas/saídas selecionadas
  };

  return (
    <SelectedProductContext.Provider value={{ selectedProduct, selectProduct, selectedProducts, addProductToTable, selectedGroups, setSelectedGroups, selectedInputOutputs, setSelectedInputOutputs }}>
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