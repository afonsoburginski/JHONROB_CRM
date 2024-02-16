// expeditionContext.tsx
import React, { createContext, useState, useContext } from 'react';

type Item = {
  name: string;
  quantity: number;
  balance: number;
  code: string;
  rdProduct: string;
  unit: string;
  color: string;
  material: string;
  dimensions: string;
  weight: string;
};

type OF = {
  of: string;
  items: Item[];
};

type ExpeditionContextType = {
  ofs: OF[];
  setOfs: (ofs: OF[]) => void;
  attachedItems: Item[];
  setAttachedItems: (items: Item[]) => void;
  selectedOF: string;
  setSelectedOF: (of: string) => void;
  selectedProduct: string;
  setSelectedProduct: (product: string) => void;
  savedItems: Item[];
  setSavedItems: (items: Item[]) => void;
  savedOFs: string[];
  setSavedOFs: React.Dispatch<React.SetStateAction<string[]>>;
  ofInfos: OF[];
  setOfInfos: React.Dispatch<React.SetStateAction<OF[]>>;
};

const ExpeditionContext = createContext<ExpeditionContextType | undefined>(undefined);

export const ExpeditionProvider: React.FC = ({ children }) => {
  const [ofs, setOfs] = useState<OF[]>([]);
  const [attachedItems, setAttachedItems] = useState<Item[]>([]);
  const [selectedOF, setSelectedOF] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [savedItems, setSavedItems] = useState<Item[]>([]);
  const [savedOFs, setSavedOFs] = useState<string[]>([]);
  const [ofInfos, setOfInfos] = useState<OF[]>([]);

  return (
    <ExpeditionContext.Provider
      value={{
        ofs,
        setOfs,
        attachedItems,
        setAttachedItems,
        selectedOF,
        setSelectedOF,
        selectedProduct,
        setSelectedProduct,
        savedItems,
        setSavedItems,
        savedOFs,
        setSavedOFs,
        ofInfos,
        setOfInfos,
      }}
    >
      {children}
    </ExpeditionContext.Provider>
  );
};

export const useExpeditionContext = () => {
  const context = useContext(ExpeditionContext);
  if (context === undefined) {
    throw new Error('useExpeditionContext must be used within a ExpeditionProvider');
  }
  return context;
};