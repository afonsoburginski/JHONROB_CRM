// selectForm.client.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useSelectedProduct } from '../contexts/selectedProductContext';
import { checkFieldsAndShowError } from './toastify';

interface Equipment {
  id: string;
  title: string;
  models: Model[];
  products: Product[];
}

interface Product {
  id: string;
  title: string;
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
  powers: Power[];
  recommended: boolean;
}

interface Power {
  id: string;
  title: string;
  recommended: boolean;
}

interface InputOutput {
  id: string;
  title: string;
  type: string;
  input: string;
  output: string;
}

export default function SelectFormClient() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const {selectedProduct, setSelectedProduct } = useSelectedProduct();
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [models, setModels] = useState<Model[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<Capacity | null>(null);
  const [selectedHeight, setSelectedHeight] = useState<Height | null>(null);
  const [selectedPower, setSelectedPower] = useState<Power | null>(null);
  const [powers, setPowers] = useState<Power[]>([]);
  const [selectedInput, setSelectedInput] = useState<InputOutput[] | null>(null);
  const [selectedOutput, setSelectedOutput] = useState<InputOutput[] | null>(null);
  const [inputsAndOutputs, setInputsAndOutputs] = useState<InputOutput[]>([]);
  const {addProductToTable} = useSelectedProduct();

// Primeiro useEffect para buscar os grupos da API
useEffect(() => {
  const getGroups = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/products');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Grupos recebidos:', data);
      // Verifica se data é um array antes de atualizar o estado
      if (Array.isArray(data.groups)) {
        setGroups(data.groups);
      } else {
        console.error('A resposta da API não é um array:', data);
      }
    } catch (error) {
      console.error('Ocorreu um problema ao buscar os grupos:', error);
    }
  };

  getGroups();
}, []);


useEffect(() => {
  if (groups) {
    const allEquipments = groups.flatMap(group => group.equipments);
    setEquipments(allEquipments);
  }
}, [groups]);


useEffect(() => {
  if (selectedEquipment) {
    setProducts(selectedEquipment.products);
    setModels(selectedEquipment.models);
  } else {
    setProducts([]);
    setModels([]);
  }
}, [selectedEquipment]);

useEffect(() => {
  if (selectedHeight) {
    setPowers(selectedHeight.powers);
  } else {
    setPowers([]);
  }
}, [selectedHeight]);

useEffect(() => {
  const fetchInputsAndOutputs = async () => {
    if (selectedPower) {
      try {
        const response = await fetch(`http://localhost:3000/api/products`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Inputs and Outputs received:', data);
        // Verifica se data.inputOutputs é um array antes de atualizar o estado
        if (Array.isArray(data.inputOutputs)) {
          setInputsAndOutputs(data.inputOutputs);
        } else {
          console.error('A resposta da API não é um array:', data);
        }
      } catch (error) {
        console.error('Ocorreu um problema ao buscar os Inputs and Outputs:', error);
      }
    }
  };

  fetchInputsAndOutputs();
}, [selectedPower]);


  const handleGroupChange = (selectedOption: any) => {
    const selectedGroup = groups.find((group) => group.id === selectedOption?.value);
    setSelectedGroup(selectedGroup);
    setSelectedEquipment(null); // Adicione esta linha para limpar a seleção de equipamento
  };

  const handleEquipmentChange = (selectedOption: any) => {
    const selectedEquipment =
      selectedGroup?.equipments.find((equipment) => equipment.id === selectedOption.value) || null;
    setSelectedEquipment(selectedEquipment);
    if (selectedEquipment) {
      setModels(selectedEquipment.models);
      setSelectedModel(null); // Limpe a seleção de modelo aqui
    } else {
      setModels([]);
      setSelectedModel(null);
    }
  };

  const handleProductChange = (selectedOption: any) => {
    const selectedProduct = products.find((product) => product.id === selectedOption.value);
    setSelectedProduct(selectedProduct || null);
    setSelectedModel(null);
    setSelectedCapacity(null);
    setSelectedHeight(null);
    setSelectedPower(null);
  };

  const handleModelChange = (selectedOption: any) => {
    const selectedModel = selectedEquipment?.models.find((model) => model.id === selectedOption.value);
    setSelectedModel(selectedModel);
    setSelectedCapacity(null);
    setSelectedHeight(null);
    setSelectedPower(null);
  };

  const handleCapacityChange = (selectedOption: any) => {
    const selectedCapacity =
      selectedModel?.capacities.find((capacity) => capacity.id === selectedOption.value) || null;
    setSelectedCapacity(selectedCapacity);
    setSelectedHeight(null);
    setSelectedPower(null);
  };

  const handleHeightChange = (selectedOption: any) => {
    const selectedHeight = selectedCapacity?.heights.find((height) => height.id === selectedOption.value);
    setSelectedHeight(selectedHeight);
    if (selectedHeight && selectedHeight.powers) {
      const recommendedPower = selectedHeight.powers.find((power) => power.recommended);
      if (recommendedPower) {
        setSelectedPower(recommendedPower);
      } else {
        setSelectedPower(null);
      }
    } else {
      setSelectedPower(null);
    }
  };

  const handlePowerChange = (selectedOption: any) => {
    const selectedPower = selectedHeight?.powers.find((power) => power.id === selectedOption.value);
    setSelectedPower(selectedPower || null);
  };
  

  const handleInputChange = (selectedOption: InputOutput[] | null) => {
    setSelectedInput(selectedOption);
  };

  const handleOutputChange = (selectedOption: InputOutput[] | null) => {
    setSelectedOutput(selectedOption);
  };

  const handleSave = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (
      checkFieldsAndShowError(
        selectedProduct,
        selectedModel,
        selectedCapacity,
        selectedHeight,
        selectedPower,
        selectedInput,
        selectedOutput
      )
    ) {
      return;
    }
  
    const savedProduct = {
      group: selectedGroup?.title,
      equipment: selectedEquipment?.title,
      title: selectedProduct.title,
      model: selectedModel.title,
      capacity: selectedCapacity.title,
      height: selectedHeight.title,
      power: selectedPower.title,
      input: selectedInput.map((io) => io.label).join(', '),
      output: selectedOutput.map((io) => io.label).join(', '),
    };
  
    addProductToTable(savedProduct); // Adicione o produto salvo à tabela
  
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
            <label>Grupo</label>
            <Select
              value={selectedGroup ? { value: selectedGroup.id, label: selectedGroup.title } : null}
              onChange={handleGroupChange}
              options={groups ? groups.map((group) => ({ value: group.id, label: group.title })) : []}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Equipamento</label>
            <Select
              value={selectedEquipment ? { value: selectedEquipment.id, label: selectedEquipment.title } : null}
              onChange={handleEquipmentChange}
              options={(selectedGroup?.equipments || []).map((equipment) => ({ value: equipment.id, label: equipment.title }))}
              isDisabled={!selectedGroup}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Produto</label>
            <Select
              value={selectedProduct ? { value: selectedProduct.id, label: selectedProduct.title } : null}
              onChange={handleProductChange}
              options={products?.map((item) => ({ value: item.id, label: item.title }))}
              isDisabled={!selectedEquipment}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Modelo</label>
            <Select
              value={selectedModel ? { value: selectedModel.id, label: selectedModel.title } : null}
              onChange={handleModelChange}
              options={models.map((model) => ({ value: model.id, label: model.title }))}
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
              value={selectedPower ? { value: selectedPower.id, label: `${selectedPower.title} ${selectedPower.recommended ? "(recomendado)" : ""}` } : null}
              onChange={handlePowerChange}
              options={powers ? powers.map((power) => ({ value: power.id, label: `${power.title} ${power.recommended ? "(recomendado)" : ""}` })) : []}
              isDisabled={!selectedHeight}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Entrada</label>
            <Select
              isMulti
              value={selectedInput}
              onChange={handleInputChange}
              options={inputsAndOutputs.map((item) => ({ value: item.input, label: item.input }))}
              isDisabled={!selectedPower}
            />
          </div>
          <div className='grid-cols-1 w-full'>
            <label>Saída</label>
            <Select
              isMulti
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

