'use client';

import React, { useState, useEffect  } from 'react';
import Select from 'react-select';
import { products, inputsAndOutputs } from '../data';

export default function SelectForm() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedCapacity, setSelectedCapacity] = useState(null);
  const [selectedHeight, setSelectedHeight] = useState(null);
  const [selectedPower, setSelectedPower] = useState(null);
  const [selectedInput, setSelectedInput] = useState(null);
  const [selectedOutput, setSelectedOutput] = useState(null);

  useEffect(() => {
    console.log('inputsAndOutputs:', inputsAndOutputs);
  }, []);

  const handleProductChange = (selectedOption) => {
    setSelectedProduct(selectedOption);
    setSelectedModel(null);
    setSelectedCapacity(null);
    setSelectedHeight(null);
    setSelectedPower(null);
  };

  const handleModelChange = (selectedOption) => {
    setSelectedModel(selectedOption);
    setSelectedCapacity(null);
    setSelectedHeight(null);
    setSelectedPower(null);
  };

  const handleCapacityChange = (selectedOption) => {
    setSelectedCapacity(selectedOption);
    setSelectedHeight(null);
    setSelectedPower(null);
  };


  const handleHeightChange = (selectedOption) => {
    console.log("Selected Height Change");
    console.log("Selected Height:", selectedOption);
    setSelectedHeight(selectedOption);
  
    // Encontrar o power associado à altura selecionada
    const selectedPower = selectedOption?.power || null;
    console.log("Selected Power from Height:", selectedPower);
    setSelectedPower({ value: selectedPower, label: selectedPower });
  };
  
  const handlePowerChange = (selectedOption) => {
    console.log("Selected Power Change");
    console.log("Selected Power:", selectedOption);
    setSelectedPower(selectedOption);
  };

  const inputOptions = (inputsAndOutputs || [])
  .filter((item) => item.type === 'input')
  .map((input) => ({ value: input.id, label: input.title }));

  const outputOptions = (inputsAndOutputs || [])
  .filter((item) => item.type === 'output')
  .map((output) => ({ value: output.id, label: output.title }));

  return (
    <form className='flex flex-col w-full max-w-screen-xl gap-5'>

      <div className='flex grid-cols-4 gap-5'>
        <div className='grid-cols-1 w-full'>
          <label>Produto</label>
          <Select
            value={selectedProduct}
            onChange={handleProductChange}
            options={products.map((item) => ({ value: item, label: item.title }))}
          />
        </div>
        <div className='grid-cols-1 w-full'>
          <label>Modelo</label>
          <Select
            value={selectedModel}
            onChange={handleModelChange}
            options={(selectedProduct?.value.models || []).map((model) => ({ value: model, label: model.title }))}
            isDisabled={!selectedProduct}
          />
        </div>
        <div className='grid-cols-1 w-full'>
          <label>Capacidade</label>
          <Select
            value={selectedCapacity}
            onChange={handleCapacityChange}
            options={(selectedModel?.value.capacities || []).map((capacity) => ({ value: capacity, label: capacity.title }))}
            isDisabled={!selectedModel}
          />
        </div>
      </div>

      <div className='flex grid-cols-4 gap-5'>
          <div className='grid-cols-1 w-full'>
            <label>Altura</label>
            <Select
              value={selectedHeight}
              onChange={(selectedOption) => handleHeightChange(selectedOption)}
              options={(selectedCapacity?.value.heights || []).map((height) => ({ value: height.title, label: height.title, power: height.power }))}
              isDisabled={!selectedCapacity}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Power</label>
            <Select
              value={selectedPower}
              onChange={(selectedOption) => handlePowerChange(selectedOption)}
              options={(selectedHeight?.value?.power ? [{ value: selectedHeight.value.power, label: selectedHeight.value.power }] : [])}
              isDisabled={!selectedHeight}
            />
          </div>
      </div>

      <div className='flex grid-cols-3 gap-5'>
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
          <button 
            class="bg-white hover:bg-gray-100 text-gray-800 font-normal py-1 px-4 h-10 border rounded shadow"
            type="button"
            onClick="{generatePDF}"
          >
            Concluir
          </button>
        </div>

    </form>
  );
}




