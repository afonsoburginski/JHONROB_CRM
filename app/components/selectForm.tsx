// selectForm.client.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Grid, Text, Button } from '@tremor/react';
import { useSelectedProduct } from '../contexts/selectedProductContext';
import { checkFieldsAndShowError } from './toastfy';

export default function SelectFormClient() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [types, setTypes] = useState<Type[]>([]);
  const [selectedType, setSelectedType] = useState<Type | null>(null);
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [models, setModels] = useState<Model[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<Capacity | null>(null);
  const [selectedHeight, setSelectedHeight] = useState<Height | null>(null);
  const [heights, setHeights] = useState<Height[]>([]);
  const [selectedPower, setSelectedPower] = useState<Power | null>(null);
  const [powers, setPowers] = useState<Power[]>([]);
  const [selectedInput, setSelectedInput] = useState<InputOutput[] | null>(null);
  const [selectedOutput, setSelectedOutput] = useState<InputOutput[] | null>(null);
  const [inputsAndOutputs, setInputsAndOutputs] = useState<InputOutput[]>([]);
  const {addProductToTable} = useSelectedProduct();

  useEffect(() => {
    if (selectedCapacity) {
      setHeights(selectedCapacity.heights);
    } else {
      setHeights([]);
    }
  }, [selectedCapacity]);

  useEffect(() => {
    const getGroups = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
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
    if (selectedGroup) {
      setProducts(selectedGroup.products);
      if (selectedProduct) {
        const newSelectedProduct = selectedGroup.products.find((product) => product && product.id === selectedProduct.id);
        if (newSelectedProduct) {
          setSelectedProduct(newSelectedProduct);
          setTypes(newSelectedProduct.types);
        } else {
          setSelectedProduct(null);
          setTypes([]);
        }
      }
    } else {
      setProducts([]);
      setSelectedProduct(null);
      setTypes([]);
    }
  }, [selectedGroup, selectedProduct]);

  useEffect(() => {
    if (selectedProduct) {
      setModels(selectedProduct.models);
    } else {
      setModels([]);
    }
  }, [selectedProduct]);
  
  useEffect(() => {
    if (types) {
      const allProducts = types.flatMap(type => type.products);
      setProducts(allProducts);
    }
  }, [types]);

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
    setSelectedGroup(selectedGroup || null);
    if (selectedGroup) {
      setProducts(selectedGroup.products);
    } else {
      setProducts([]);
    }
    setSelectedProduct(null);
    setTypes([]);
    setSelectedType(null);
    setSelectedModel(null);
    setSelectedCapacity(null);
    setSelectedHeight(null);
    setSelectedPower(null);
  };
  
  const handleProductChange = (selectedOption: any) => {
    const selectedProduct = selectedGroup.products.find((product) => product && product.id === selectedOption?.value);
    if (selectedProduct) {
      setSelectedProduct(selectedProduct);
      setTypes(selectedProduct.types);
      setSelectedType(null);
      setSelectedModel(null);
      setSelectedCapacity(null);
      setSelectedHeight(null);
      setSelectedPower(null);
    } else {
      setSelectedProduct(null);
      setTypes([]);
      setSelectedType(null);
      setSelectedModel(null);
      setSelectedCapacity(null);
      setSelectedHeight(null);
      setSelectedPower(null);
    }
  };

  const handleTypeChange = (selectedOption: any) => {
    const selectedType = types.find((type) => type.id === selectedOption.value);
    setSelectedType(selectedType || null);
    setSelectedModel(null);
    setSelectedCapacity(null);
    setSelectedHeight(null);
    setSelectedPower(null);
  };

  const handleModelChange = (selectedOption: any) => {
    const selectedModel = selectedProduct?.models.find((model) => model.id === selectedOption.value);
    setSelectedModel(selectedModel || null);
    setSelectedCapacity(null);
    setSelectedHeight(null);
    setSelectedPower(null);
  };

  const handleCapacityChange = (selectedOption: any) => {
    const selectedCapacity = selectedModel?.capacities.find((capacity) => capacity.id === selectedOption.value);
    setSelectedCapacity(selectedCapacity || null);
    setSelectedHeight(null);
    setSelectedPower(null);
  };

  const handleHeightChange = (selectedOption: any) => {
    const selectedHeight = selectedCapacity?.heights.find((height) => height.id === selectedOption.value);
    setSelectedHeight(selectedHeight || null);
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
      product: selectedProduct?.title,
      type: selectedType?.title,
      model: selectedModel?.title,
      capacity: selectedCapacity?.title,
      height: selectedHeight?.title,
      power: selectedPower?.title,
      input: selectedInput?.map((io) => io.value), // Modificado para mapear para io.value
      output: selectedOutput?.map((io) => io.value), // Modificado para mapear para io.value
    };
    addProductToTable(savedProduct);
    setSelectedGroup(null);
    setSelectedProduct(null);
    setSelectedType(null);
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
        <Grid className='grid-cols-5 gap-5'>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-3.5">Grupo</Text>
            <Select
              value={selectedGroup ? { value: selectedGroup.id, label: selectedGroup.title } : null}
              options={groups.map(group => ({ value: group.id, label: group.title }))}
              onChange={handleGroupChange}
            />
          </Grid>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-3.5">Equipamento</Text>
            <Select
              value={selectedProduct ? { value: selectedProduct.id, label: selectedProduct.title } : null}
              onChange={handleProductChange}
              options={(selectedGroup?.products || []).map((product) => ({ value: product.id, label: product.title }))}
              isDisabled={!selectedGroup}
            />
          </Grid>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-3.5">Produto</Text>
            <Select
              value={selectedType ? { value: selectedType.id, label: selectedType.title } : null}
              onChange={handleTypeChange}
              options={types.map((type) => ({ value: type.id, label: type.title }))}
              isDisabled={!selectedProduct}
            />
          </Grid>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-3.5">Modelo</Text>
            <Select
              value={selectedModel ? { value: selectedModel.id, label: selectedModel.title } : null}
              onChange={handleModelChange}
              options={models.map((model) => ({ value: model.id, label: model.title }))}
              isDisabled={!selectedProduct}
            />
          </Grid>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-3.5">Capacidade</Text>
            <Select
              value={selectedCapacity ? { value: selectedCapacity.id, label: selectedCapacity.title } : null}
              onChange={handleCapacityChange}
              options={(selectedModel?.capacities || []).map((capacity) => ({ value: capacity.id, label: capacity.title }))}
              isDisabled={!selectedModel}
            />
          </Grid>
        </Grid>

        <Grid className='grid-cols-4 gap-5'>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-3.5">Altura</Text>
            <Select
              value={selectedHeight ? { value: selectedHeight.id, label: selectedHeight.title } : null}
              onChange={handleHeightChange}
              options={(selectedCapacity?.heights || []).map((height) => ({ value: height.id, label: height.title }))}
              isDisabled={!selectedCapacity}
            />
          </Grid>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-3.5">Potência</Text>
            <Select
              value={selectedPower ? { value: selectedPower.id, label: `${selectedPower.title} ${selectedPower.recommended ? "(recomendado)" : ""}` } : null}
              onChange={handlePowerChange}
              options={powers ? powers.map((power) => ({ value: power.id, label: `${power.title} ${power.recommended ? "(recomendado)" : ""}` })) : []}
              isDisabled={!selectedHeight}
            />
          </Grid>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-3.5">Entrada</Text>
            <Select
              isMulti
              value={selectedInput}
              onChange={handleInputChange}
              options={inputsAndOutputs.map((item) => ({ value: item.input, label: item.input }))}
              isDisabled={!selectedPower}
            />
          </Grid>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-3.5">Saída</Text>
            <Select
              isMulti
              value={selectedOutput}
              onChange={handleOutputChange}
              options={inputsAndOutputs.map((item) => ({ value: item.output, label: item.output }))}
              isDisabled={!selectedPower}
            />
          </Grid>
        </Grid>

        <Grid className='flex justify-end items-end grid-cols-3 w-full'>
          <Button style={{ borderRadius: '5px' }} variant='secondary' onClick={handleSave}>
            Adicionar
          </Button>
        </Grid>

      </form>
    </>
  );
}
