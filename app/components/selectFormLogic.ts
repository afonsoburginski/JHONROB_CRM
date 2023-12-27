// selectFormLogic.ts
import { useState, useEffect } from 'react';
import { checkFieldsAndShowError } from './toastfy';
import { useSelectedProduct } from '../contexts/selectedProductContext';

export default function useSelectFormLogic() {
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
        const response = await fetch('api/products');
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
          const response = await fetch(`api/products`);
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
    if (selectedGroup) { // Adicione esta linha
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

  const handleInputChange = (selectedOption) => {
    setSelectedInput(selectedOption.map(option => ({ input: option.value, label: option.value })));
  };
  
  const handleOutputChange = (selectedOption) => {
    setSelectedOutput(selectedOption.map(option => ({ output: option.value, label: option.value })));
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

    // const savedProduct = {
    //   group: selectedGroup?.title,
    //   product: selectedProduct?.title,
    //   type: selectedType?.title,
    //   model: selectedModel?.title,
    //   capacity: selectedCapacity?.title,
    //   height: selectedHeight?.title,
    //   power: selectedPower?.title,
    //   input: selectedInput?.map((io) => io.value), // Modificado para mapear para io.value
    //   output: selectedOutput?.map((io) => io.value), // Modificado para mapear para io.value
    // };
    const savedProduct = {
      product: 'some-product', // você precisa definir um produto
      id: 'some-id', // você precisa gerar ou obter um id
      title: 'some-title', // você precisa definir um título
      group: selectedGroup ? selectedGroup.title : '', // alterado para ser uma string
      types: [], // você precisa definir os tipos
      models: [], // você precisa definir os modelos
      capacity: selectedCapacity?.title || '',
      height: selectedHeight?.title || '',
      power: selectedPower?.title || '',
      input: selectedInput?.map((io) => io.value) || [],
      output: selectedOutput?.map((io) => io.value) || [],
      inputOutput: 'some-input-output', // você precisa definir inputOutput
      tempId: Date.now(), // tempId é gerado automaticamente
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

  return {
    groups,
    selectedGroup,
    products,
    selectedProduct,
    types,
    selectedType,
    selectedModel,
    models,
    selectedCapacity,
    selectedHeight,
    heights,
    selectedPower,
    powers,
    selectedInput,
    selectedOutput,
    inputsAndOutputs,
    setGroups,
    setSelectedGroup,
    setProducts,
    setSelectedProduct,
    setTypes,
    setSelectedType,
    setSelectedModel,
    setModels,
    setSelectedCapacity,
    setSelectedHeight,
    setHeights,
    setSelectedPower,
    setPowers,
    setSelectedInput,
    setSelectedOutput,
    setInputsAndOutputs,
    handleGroupChange,
    handleProductChange,
    handleTypeChange,
    handleModelChange,
    handleCapacityChange,
    handleHeightChange,
    handlePowerChange,
    handleInputChange,
    handleOutputChange,
    handleSave,
  };
}