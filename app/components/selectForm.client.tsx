//selectForm.client.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useSelectedProduct } from '../contexts/selectedProductContext';

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
  id: string;
  title: string;
  type: string;
  input: string;
  output: string;
}

export default function SelectFormClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const {selectedProduct, setSelectedProduct } = useSelectedProduct();
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<Capacity | null>(null);
  const [selectedHeight, setSelectedHeight] = useState<Height | null>(null);
  const [selectedPower, setSelectedPower] = useState<string | null>(null);
  const [selectedInput, setSelectedInput] = useState<InputOutput | null>(null);
  const [selectedOutput, setSelectedOutput] = useState<InputOutput | null>(null);
  const [inputsAndOutputs, setInputsAndOutputs] = useState<InputOutput[]>([]);
  const { addProductToTable } = useSelectedProduct();

  useEffect(() => {
    console.log('Executando useEffect')
    const getData = async () => {
      const response = await fetch('http://localhost:3000/api/products');
      const { products: productsData, inputOutputs } = await response.json();
      console.log('Dados recebidos:', productsData, inputOutputs)
      setProducts(productsData);
      setInputsAndOutputs(inputOutputs);
    };
  
    getData();
  }, []);

  const handleProductChange = (selectedOption: any) => {
    console.log('handleProductChange chamado com:', selectedOption)
    const selectedProduct = products.find(product => product.id === selectedOption.value);
    setSelectedProduct(selectedProduct || null);
    setSelectedModel(null);
    setSelectedCapacity(null);
    setSelectedHeight(null);
    setSelectedPower(null);
  };
  
  const handleModelChange = (selectedOption: any) => {
    const selectedModel = selectedProduct?.models.find(model => model.id === selectedOption.value);
    setSelectedModel(selectedModel);
    setSelectedCapacity(null);
    setSelectedHeight(null);
    setSelectedPower(null);
  };
  
  const handleCapacityChange = (selectedOption: any) => {
    const selectedCapacity = selectedModel?.capacities.find(capacity => capacity.id === selectedOption.value);
    setSelectedCapacity(selectedCapacity);
    setSelectedHeight(null);
    setSelectedPower(null);
  };
  
  const handleHeightChange = (selectedOption: any) => {
    const selectedHeight = selectedCapacity?.heights.find(height => height.id === selectedOption.value);
    setSelectedHeight(selectedHeight);
    setSelectedPower(selectedHeight?.power || null);
  };
  
  const handlePowerChange = (selectedOption: any) => {
    setSelectedPower(selectedOption.value);
  };
  
  const handleInputChange = (selectedOption) => {
    console.log(selectedOption); // Adicione esta linha
    setSelectedInput(selectedOption);
  };
  
  const handleOutputChange = (selectedOption: any) => {
    console.log('selectedOption:', selectedOption); // Adicione esta linha
    setSelectedOutput(selectedOption);
  };

  const handleSave = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (!selectedProduct || !selectedModel || !selectedCapacity || !selectedHeight || !selectedPower || !selectedInput || !selectedOutput) {
      setErrorMessage('Todos os campos devem ser preenchidos antes de salvar o produto');
      return;
    }
  
    console.log('selectedPower:', selectedPower); // Adicione esta linha
    console.log('selectedInput:', selectedInput); // Adicione esta linha
    console.log('selectedOutput:', selectedOutput); // Adicione esta linha
  
    const savedProduct = {
      title: selectedProduct.title,
      model: selectedModel.title,
      capacity: selectedCapacity.title,
      height: selectedHeight.title,
      power: selectedPower,
      input: selectedInput.label, // Altere esta linha
      output: selectedOutput.label, // Altere esta linha
    };
  
    addProductToTable(savedProduct);
    setSelectedProduct(null);
    setSelectedModel(null);
    setSelectedCapacity(null);
    setSelectedHeight(null);
    setSelectedPower(null);
    setSelectedInput(null);
    setSelectedOutput(null);
  };

  return (
    <>
      <form className='flex flex-col w-full max-w-screen-xl gap-5'>
        <div className='flex grid-cols-4 gap-5'>
          <div className='grid-cols-1 w-full'>
            <label>Produto</label>
            <Select
              value={selectedProduct ? { value: selectedProduct.id, label: selectedProduct.title } : null}
              onChange={handleProductChange}
              options={products?.map((item) => ({ value: item.id, label: item.title }))}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Modelo</label>
            <Select
              value={selectedModel ? { value: selectedModel.id, label: selectedModel.title } : null}
              onChange={handleModelChange}
              options={(selectedProduct?.models || []).map((model) => ({ value: model.id, label: model.title }))}
              isDisabled={!selectedProduct}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Capacidade</label>
            <Select
              value={selectedCapacity ? { value: selectedCapacity.id, label: selectedCapacity.title } : null}
              onChange={handleCapacityChange}
              options={(selectedModel?.capacities || []).map((capacity) => ({ value: capacity.id, label: capacity.title }))}
              isDisabled={!selectedModel}
            />
          </div>
        </div>

        <div className='grid grid-cols-4 gap-5'>
          <div className='grid-cols-1 w-full'>
            <label>Altura</label>
            <Select
              value={selectedHeight ? { value: selectedHeight.id, label: selectedHeight.title } : null}
              onChange={handleHeightChange}
              options={(selectedCapacity?.heights || []).map((height) => ({ value: height.id, label: height.title }))}
              isDisabled={!selectedCapacity}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Potência</label>
            <Select
              value={selectedPower ? { value: selectedPower, label: selectedPower } : null}
              onChange={handlePowerChange}
              options={(selectedHeight?.powers || []).map((power) => ({ value: power, label: power }))}
              isDisabled={!selectedHeight}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Entrada</label>
            <Select
              value={selectedInput}
              onChange={handleInputChange}
              options={inputsAndOutputs.map((item) => ({ value: item.input, label: item.input }))}
              isDisabled={!selectedPower}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Saída</label>
            <Select
              value={selectedOutput}
              onChange={handleOutputChange}
              options={inputsAndOutputs.map((item) => ({ value: item.output, label: item.output }))}
              isDisabled={!selectedPower}
            />
          </div>
        </div>
        <div className='flex justify-end items-end grid-cols-3 w-full'>
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-normal py-1 px-4 border border-gray-400 rounded'  onClick={handleSave}>
            Adicionar
          </button>
        </div>
      </form>
    </>
  );
}
