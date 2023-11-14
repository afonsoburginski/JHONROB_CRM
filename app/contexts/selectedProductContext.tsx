'use client'
import React, { createContext, useState, useContext } from 'react';

interface Product {
    id: number;
    title: string;
}

interface SelectedProductContextData {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
}

const SelectedProductContext = createContext<SelectedProductContextData | undefined>(undefined);

export const SelectedProductProvider: React.FC = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const selectProduct = (product: Product) => {
        setSelectedProduct(product);
    };

    return (
        <SelectedProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
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