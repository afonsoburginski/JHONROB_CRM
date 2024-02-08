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
  savedItems: Item[]; // Adicione esta linha
  setSavedItems: (items: Item[]) => void; // Adicione esta linha
};

const ExpeditionContext = createContext<ExpeditionContextType | undefined>(undefined);

export const ExpeditionProvider: React.FC = ({ children }) => {
  const [ofs, setOfs] = useState<OF[]>([]);
  const [attachedItems, setAttachedItems] = useState<Item[]>([]);
  const [selectedOF, setSelectedOF] = useState<string>('');
  const [savedItems, setSavedItems] = useState<Item[]>([]); // Inicialize savedItems com um array vazio

  return (
    <ExpeditionContext.Provider value={{ ofs, setOfs, attachedItems, setAttachedItems, selectedOF, setSelectedOF, savedItems, setSavedItems }}>
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