'use client'
// createProduct.tsx
import React, { useState } from 'react';
import Select from 'react-select';

const CreateProduct = () => {
  const [model, setModel] = useState<string | null>(null);
  const [capacity, setCapacity] = useState<string | null>(null);
  const [height, setHeight] = useState<string | null>(null);
  const [power, setPower] = useState<string | null>(null);
  const [input, setInput] = useState<string | null>(null);
  const [output, setOutput] = useState<string | null>(null);

  interface Option {
    label: string;
    value: string;
  }  

  const options: Option[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const product = {
      model,
      capacity,
      height,
      power,
      input,
      output
    };
  
    const response = await fetch('/api/createProduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
  
    if (response.ok) {
      console.log('Produto criado com sucesso');
    } else {
      console.error('Erro ao criar o produto');
    }
  };
  
  return (
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700">Modelo:</label>
      <Select 
        options={options}
        value={options.find(option => option.value === model)}
        onChange={(selectedOption: Option | null) => setModel(selectedOption ? selectedOption.value : null)}
        className="mt-1 block w-full"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Capacidade:</label>
      <Select 
        options={options}
        value={options.find(option => option.value === capacity)}
        onChange={(selectedOption: Option | null) => setCapacity(selectedOption ? selectedOption.value : null)}
        className="mt-1 block w-full"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Altura:</label>
      <Select 
        options={options}
        value={options.find(option => option.value === height)}
        onChange={(selectedOption: Option | null) => setHeight(selectedOption ? selectedOption.value : null)}
        className="mt-1 block w-full"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Potência:</label>
      <Select 
        options={options}
        value={options.find(option => option.value === power)}
        onChange={(selectedOption: Option | null) => setPower(selectedOption ? selectedOption.value : null)}
        className="mt-1 block w-full"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Entrada:</label>
      <Select 
        options={options}
        value={options.find(option => option.value === input)}
        onChange={(selectedOption: Option | null) => setInput(selectedOption ? selectedOption.value : null)}
        className="mt-1 block w-full"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Saída:</label>
      <Select 
        options={options}
        value={options.find(option => option.value === output)}
        onChange={(selectedOption: Option | null) => setOutput(selectedOption ? selectedOption.value : null)}
        className="mt-1 block w-full"
      />
    </div>
    <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-1 px-4 border border-gray-400 rounded">Cadastrar</button>
  </form>
  );
};

export default CreateProduct;