import { useState, useEffect } from 'react';
import { useSelectedProduct } from '../contexts/selectedProductContext';

interface Selection {
  id: number;
  title: string;
  [key: string]: any;
}

interface Selections {
  [key: string]: Selection | null;
}

const fields = ['group', 'product', 'type', 'model', 'capacity', 'height', 'power', 'input', 'output'];

const useSelectFormLogic = () => {
  const [data, setData] = useState({});
  const [selections, setSelections] = useState<Selections>(fields.reduce((obj, field) => ({ ...obj, [field]: null }), {}));

  const { addProductToTable } = useSelectedProduct(); 

  useEffect(() => {
    fetch('api/products')
      .then(response => response.json())
      .then(apiData => {
        setData(apiData);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleChange = (field, value) => {
    if (value === null) {
      setSelections(prevSelections => {
        const newSelections = { ...prevSelections };
        newSelections[field] = null;
        return newSelections;
      });
    } else if (value !== null && data[field]) {
      const selectedItem = data[field].find(item => item.id === value);
      if (selectedItem) {
        setSelections(prevSelections => ({
          ...prevSelections,
          [field]: selectedItem,
        }));
      }
    }
  };

  const resetSelections = () => {
    setSelections(fields.reduce((obj, field) => ({ ...obj, [field]: null }), {}));
  };

  const handleSave = (event) => {
    event.preventDefault();
  
    const savedProduct: Product = fields.reduce((obj, field) => ({
      ...obj,
      [field]: selections[field] ? selections[field] : null,
    }), {} as Product);
  
    addProductToTable(savedProduct);
    resetSelections();
  };

  return {
    ...selections,
    handleChange,
    handleSave,
    data,
  };
};

export default useSelectFormLogic;