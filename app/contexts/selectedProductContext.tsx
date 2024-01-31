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
  isObservationModalOpen: boolean;
  openObservationModal: () => void;
  closeObservationModal: () => void;
  updateProductObservation: (tempId: number, observation: string) => void;
  updateProductManufacturingTime: (tempId: number, manufacturingTime: Date) => void;
  updateProductAssemblyTime: (tempId: number, assemblyTime: Date) => void;
}

export const SelectedProductContext = createContext<SelectedProductContextData>({} as SelectedProductContextData);

interface SelectedProductProviderProps {
  children: ReactNode;
}

export const SelectedProductProvider: React.FC<SelectedProductProviderProps> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [isObservationModalOpen, setIsObservationModalOpen] = useState(false);

  const selectProduct = (product: Product | null) => {
    setSelectedProduct(product);
  };

  const addProductToTable = (product: Product) => {
    const productWithTempId = { ...product, tempId: Date.now(), observation: product.observation || '' };
    setSelectedProducts(prevProducts => [...prevProducts, productWithTempId]);
  };

  const removeProduct = (tempId: number) => {
    setSelectedProducts(prevProducts => prevProducts.filter(product => product.tempId !== tempId));
  };

  const resetSelectedProducts = () => {
    setSelectedProducts([]);
  };

  const resetFields = () => {
    setSelectedProduct(null);
  };

  const openObservationModal = () => {
    setIsObservationModalOpen(true);
  };

  const closeObservationModal = () => {
    setIsObservationModalOpen(false);
  };

  const updateProductObservation = (tempId: number, observation: string) => {
    setSelectedProducts(prevProducts => prevProducts.map(product => product.tempId === tempId ? { ...product, observation } : product));
  };

  const updateProductManufacturingTime = (tempId: number, manufacturingTime: Date) => {
    setSelectedProducts(prevProducts => prevProducts.map(product => product.tempId === tempId ? { ...product, manufacturingTime } : product));
  };

  const updateProductAssemblyTime = (tempId: number, assemblyTime: Date) => {
    setSelectedProducts(prevProducts => prevProducts.map(product => product.tempId === tempId ? { ...product, assemblyTime } : product));
  };

  return (
    <SelectedProductContext.Provider value={{ selectedProduct, selectProduct, selectedProducts, addProductToTable, removeProduct, resetSelectedProducts, resetFields, isObservationModalOpen, openObservationModal, closeObservationModal, updateProductObservation, updateProductManufacturingTime, updateProductAssemblyTime }}>
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