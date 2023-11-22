// selectedProductContext.tsx
'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Product {
  id: number;
  title: string;
  group: Group; // assumindo que cada produto tem um grupo associado
  inputOutput: InputOutput; // assumindo que cada produto tem uma entrada/saída associada
}

interface Group {
  id: number;
  name: string;
  // outros campos que um grupo pode ter
}

interface InputOutput {
  id: number;
  name: string;
  // outros campos que uma entrada/saída pode ter
}

interface SelectedProductContextData {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
  selectedProducts: Product[];
  addProductToTable: (product: Product) => void;
  selectedGroups: Group[];
  setSelectedGroups: (groups: Group[]) => void;
  selectedInputOutputs: InputOutput[];
  setSelectedInputOutputs: (inputOutputs: InputOutput[]) => void;
}

const SelectedProductContext = createContext<SelectedProductContextData>({
  selectedProduct: null,
  setSelectedProduct: () => {},
  selectedProducts: [],
  addProductToTable: () => {},
  selectedGroups: [],
  setSelectedGroups: () => {},
  selectedInputOutputs: [],
  setSelectedInputOutputs: () => {},
});

interface SelectedProductProviderProps {
  children: ReactNode;
}

export const SelectedProductProvider: React.FC<SelectedProductProviderProps> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<Group[]>([]);
  const [selectedInputOutputs, setSelectedInputOutputs] = useState<InputOutput[]>([]);

  const selectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  // BEGIN: ed8c6549bwf9
  const addProductToTable = (product: Product) => {
    setSelectedProducts(prevProducts => [...prevProducts, product]);
    setSelectedGroups(prevGroups => [...prevGroups, product.group]); // adicione o grupo do produto aos grupos selecionados
    setSelectedInputOutputs(prevInputOutputs => [...prevInputOutputs, product.inputOutput]); // adicione a entrada/saída do produto às entradas/saídas selecionadas
  };
  // END: ed8c6549bwf9

  return (
    <SelectedProductContext.Provider value={{ selectedProduct, setSelectedProduct, selectedProducts, addProductToTable, selectedGroups, setSelectedGroups, selectedInputOutputs, setSelectedInputOutputs }}>
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