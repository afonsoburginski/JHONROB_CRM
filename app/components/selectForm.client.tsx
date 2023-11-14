'use client'
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useSelectedProduct } from '../contexts/selectedProductContext';
import { fetchProducts, fetchInputOutputOptions } from '../data';

interface Product {
  id: string;
  title: string;
  models: Model[];
}

interface Model {
  id: string;
  title: string;
  capacities: Capacity[];
}

interface Capacity {
  id: string;
  title: string;
  heights: Height[];
}

interface Height {
  id: string;
  title: string;
  powers: string[];
}

interface InputOutput {
  title: string;
  type: string;
}

export default function SelectFormClient() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedCapacity, setSelectedCapacity] = useState(null);
  const [selectedHeight, setSelectedHeight] = useState(null);
  const [selectedPower, setSelectedPower] = useState(null);
  const [selectedInput, setSelectedInput] = useState(null);
  const [selectedOutput, setSelectedOutput] = useState(null);
  const [inputsAndOutputs, setInputsAndOutputs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3000/api/products');
      const data = await response.json();
      setProducts(data.products);
      setInputsAndOutputs(data.inputsAndOutputs);
    };
  
    getData();
  }, []);

  const handleProductChange = (selectedOption: any) => {
    setSelectedProduct(selectedOption);
    setSelectedModel(null);
    setSelectedCapacity(null);
    setSelectedHeight(null);
    setSelectedPower(null);
  };
  
  const handleModelChange = (selectedOption: any) => {
    setSelectedModel(selectedOption);
    setSelectedCapacity(null);
    setSelectedHeight(null);
    setSelectedPower(null);
  };
  
  const handleCapacityChange = (selectedOption: any) => {
    setSelectedCapacity(selectedOption);
    setSelectedHeight(null);
    setSelectedPower(null);
  };
  
  const handleHeightChange = (selectedOption: any) => {
    setSelectedHeight(selectedOption);
  
    const selectedPower = selectedOption?.power || null;
    setSelectedPower(selectedPower?.value || null);
  };
  
  const handlePowerChange = (selectedOption: any) => {
    setSelectedPower(selectedOption?.value || null);
    setSelectedPower(selectedOption);
  };

  const productOptions = products.map((product) => ({
    value: product,
    label: product.title,
  }));
  
  const inputOptions = inputsAndOutputs
    .filter((item) => item.type === 'input')
    .map((input) => ({ value: input.id, label: input.title }));
  
  const outputOptions = inputsAndOutputs
    .filter((item) => item.type === 'output')
    .map((output) => ({ value: output.id, label: output.title }));

  const handleSave = async () => {
    try {
      const savedProduct: Product = {
        id: '',
        title: selectedProduct?.title || '',
        models: [
          {
            id: '',
            title: selectedModel?.title || '',
            capacities: [
              {
                id: '',
                title: selectedCapacity?.title || '',
                heights: [
                  {
                    id: '',
                    title: selectedHeight?.title || '',
                    powers: [selectedPower || ''],
                  },
                ],
              },
            ],
          },
        ],
      };
  
      console.log('Produto salvo:', savedProduct);
      setSelectedProduct(null);
      setSelectedModel(null);
      setSelectedCapacity(null);
      setSelectedHeight(null);
      setSelectedPower(null);
      setSelectedInput(null);
      setSelectedOutput(null);
    } catch (error) {
      console.error('Erro ao salvar o produto:', error);
    }
  };
  
  const { setSelectedProduct: setSelectedProductContext } = useSelectedProduct();
  const handleProductSelect = (product: Product) => {
    setSelectedProductContext(product);
    setSelectedProduct(product);
    setSelectedModel(null);
    setSelectedCapacity(null);
    setSelectedHeight(null);
    setSelectedPower(null);
    setSelectedInput(null);
    setSelectedOutput(null);
    handleSave();
  };

  return (
    <>
      <form className='flex flex-col w-full max-w-screen-xl gap-5'>
        <div className='flex grid-cols-4 gap-5'>

          <div className='grid-cols-1 w-full'>
            <label>Produto</label>
            <Select
              value={selectedProduct}
              onChange={handleProductChange}
              options={productOptions.map((item) => ({
                value: item,
                label: item.title,
              }))}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Modelo</label>
            <Select
              value={selectedModel}
              onChange={handleModelChange}
              options={selectedProduct ? selectedProduct.models.map((model) => ({
                value: model,
                label: model.title,
              })) : []}
              isDisabled={!selectedProduct}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Capacidade</label>
            <Select
              value={selectedCapacity}
              onChange={handleCapacityChange}
              options={selectedModel ? selectedModel.capacities.map((capacity) => ({
                value: capacity,
                label: capacity.title,
              })) : []}
              isDisabled={!selectedModel}
            />
          </div>
        </div>

        <div className='grid grid-cols-4 gap-5'>
          <div className='grid-cols-1 w-full'>
            <label>Altura</label>
            <Select
              value={selectedHeight}
              onChange={handleHeightChange}
              options={selectedCapacity ? selectedCapacity.heights.map((height) => ({
                value: height,
                label: height.title,
                powers: height.powers,
              })) : []}
              isDisabled={!selectedCapacity}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Potência</label>
            <Select
              value={selectedPower}
              onChange={handlePowerChange}
              options={selectedHeight ? selectedHeight.powers.map((power) => ({
                value: power,
                label: power,
              })) : []}
              isDisabled={!selectedHeight}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Entrada</label>
            <Select
              value={selectedInput}
              options={inputOptions}
              onChange={(selectedOption) => setSelectedInput(selectedOption)}
              isDisabled={!selectedPower}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Saída</label>
            <Select
              value={selectedOutput}
              options={outputOptions}
              onChange={(selectedOption) => setSelectedOutput(selectedOption)}
              isDisabled={!selectedInput}
            />
          </div>
        </div>
        <div className='flex justify-end items-end grid-cols-3 w-full'>
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-normal py-1 px-4 border border-gray-400 rounded' onClick={handleSave}>
            Adicionar
          </button>
        </div>
      </form>
    </>
  );
}
