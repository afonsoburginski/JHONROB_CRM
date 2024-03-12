import React, { createContext, useState, useContext } from 'react';

interface ExpeditionContextData {
  ofs: any[];
  setOfs: React.Dispatch<React.SetStateAction<any[]>>;
  attachedItems: any[];
  setAttachedItems: React.Dispatch<React.SetStateAction<any[]>>;
  selectedOF: string;
  setSelectedOF: React.Dispatch<React.SetStateAction<string>>;
  savedItems: any[];
  setSavedItems: React.Dispatch<React.SetStateAction<any[]>>;
}

const ExpeditionContext = createContext<ExpeditionContextData | undefined>(undefined);

export const ExpeditionProvider = ({ children }) => {
  const [ofs, setOfs] = useState([]);
  const [attachedItems, setAttachedItems] = useState([]);
  const [selectedOF, setSelectedOF] = useState('');
  const [savedItems, setSavedItems] = useState([]);

  return (
    <ExpeditionContext.Provider value={{ ofs, setOfs, attachedItems, setAttachedItems, selectedOF, setSelectedOF, savedItems, setSavedItems }}>
      {children}
    </ExpeditionContext.Provider>
  );
};

export const useExpeditionContext = (): ExpeditionContextData => {
  const context = useContext(ExpeditionContext);
  if (!context) {
    throw new Error('useExpeditionContext must be used within a ExpeditionProvider');
  }
  return context;
};