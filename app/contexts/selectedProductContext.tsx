//selectedProductContext.tsx
'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Product {
    id: number;
    title: string;
}

interface SelectedProductContextData {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
  selectedProducts: Product[];
  addProductToTable: (product: Product) => void;
}

// Inclua um valor inicial para o selectedProducts e addProductToTable no contexto
const SelectedProductContext = createContext<SelectedProductContextData>({
  selectedProduct: null,
  setSelectedProduct: () => {},
  selectedProducts: [],
  addProductToTable: () => {},
});

interface SelectedProductProviderProps {
  children: ReactNode;
}

export const SelectedProductProvider: React.FC<SelectedProductProviderProps> = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    const selectProduct = (product: Product) => {
        setSelectedProduct(product);
    };

    const addProductToTable = (product: Product) => {
        setSelectedProducts(prevProducts => [...prevProducts, product]);
    };

    return (
        <SelectedProductContext.Provider value={{ selectedProduct, setSelectedProduct, selectedProducts, addProductToTable }}>
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