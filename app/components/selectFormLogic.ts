import { useState, useEffect } from 'react';
import { showToastSuccess, showToastError } from './toastfy';
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

const useSelectFormLogic = (initialData = {}) => {
  const [data, setData] = useState(initialData);
  const [initialDataState, setInitialDataState] = useState(initialData);
  const [apiData, setApiData] = useState<any | null>(null);
  const [selections, setSelections] = useState<Selections>(fields.reduce((obj, field) => ({ ...obj, [field]: null }), {}));

  const { addProductToTable } = useSelectedProduct(); 

  useEffect(() => {
    fetch('api/products')
      .then(response => response.json())
      .then(apiData => {
        processData(apiData);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const processData = (apiData) => {
    console.log(apiData);
    setApiData(apiData);
  
    if (apiData) {
      const formData = {
        group: apiData.groups.map(group => ({ id: group.id, title: group.title })),
        product: apiData.groups.flatMap(group => group.products.map(product => ({ ...product }))),
        type: [],
        model: [],
        capacity: [],
        height: [],
        power: [],
        input: apiData.inputOutputs.map(io => ({ id: io.id, title: io.input })),
        output: apiData.inputOutputs.map(io => ({ id: io.id, title: io.output })),
      };
  
      setData(formData);
      setInitialDataState(formData);
    }
  };

  const handleChange = (field, value) => {
    if (value === null || value === undefined) {
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
  
        const fieldIndex = fields.indexOf(field);
        const subsequentFields = fields.slice(fieldIndex + 1);
        setSelections(prevSelections => {
          const newSelections = { ...prevSelections };
          subsequentFields.forEach(field => {
            newSelections[field] = null;
          });
          return newSelections;
        });

        if (apiData) {
          if (field === 'group') {
            const selectedGroup = apiData.groups.find(group => group.id === value);
            if (selectedGroup) {
              setData(prevData => ({
                ...prevData,
                product: selectedGroup.products.map(product => ({ 
                  id: product.id, 
                  title: product.title,
                  tag: product.tag, // Adicione a tag
                  description: product.description // Adicione a descrição
                })),
              }));
            }
          } if (field === 'product') {
            const selectedProduct = apiData.groups.flatMap(group => group.products.map(product => ({ ...product }))).find(product => product.id === value);
            if (selectedProduct) {
              setData(prevData => ({
                ...prevData,
                type: selectedProduct.types.map(type => ({ id: type.id, title: type.title })),
                model: selectedProduct.models.map(model => ({ id: model.id, title: model.title })),
              }));
              setSelections(prevSelections => ({
                ...prevSelections,
                product: { ...selectedProduct },
              }));
            }
          } else if (field === 'model') {
            const selectedModel = apiData.groups.flatMap(group => group.products.flatMap(product => product.models)).find(model => model.id === value);
            if (selectedModel) {
              setData(prevData => ({
                ...prevData,
                capacity: selectedModel.capacities.map(capacity => ({ id: capacity.id, title: capacity.title })),
              }));
            }
          } else if (field === 'capacity') {
            const selectedCapacity = apiData.groups.flatMap(group => group.products.flatMap(product => product.models.flatMap(model => model.capacities))).find(capacity => capacity.id === value);
            if (selectedCapacity) {
              setData(prevData => ({
                ...prevData,
                height: selectedCapacity.heights.map(height => ({ id: height.id, title: height.title })),
              }));
            }
          } if (field === 'height') {
            const selectedHeight = apiData.groups.flatMap(group => group.products.flatMap(product => product.models.flatMap(model => model.capacities.flatMap(capacity => capacity.heights)))).find(height => height.id === value);
            if (selectedHeight) {
              const recommendedPowers = selectedHeight.powers.filter(p => p.recommended);
              setData(prevData => ({
                ...prevData,
                power: recommendedPowers.map(power => ({ id: power.id, title: power.title })),
              }));
            }
          }
        }
      }
    }
  };

  const resetSelections = () => {
    setSelections(fields.reduce((obj, field) => ({ ...obj, [field]: null }), {}));
    setData({...initialDataState});
  };

  const handleSave = (event) => {
    event.preventDefault();
  
    const hasError = checkFieldsAndShowError(
      selections['product'],
      selections['model'],
      selections['capacity'],
      selections['height'],
      selections['power'],
      selections['input'],
      selections['output']
    );
  
    if (hasError) {
      return;
    }
  
    const savedProduct: Product = fields.reduce((obj, field) => ({
      ...obj,
      [field]: selections[field] ? { ...selections[field], title: selections[field]?.title.replace(' (recomendado)', '') } : null,
    }), {} as Product);

  // Log the saved product
  console.log('Saved product: ', savedProduct); 

  // Log the saved product details
  // console.log(`Saved product tag: ${savedProduct.product?.tag}`); 
  // console.log(`Saved product description: ${savedProduct.product?.description}`);

  addProductToTable(savedProduct);
  resetSelections();
};

  const checkFieldsAndShowError = (
    selectedProduct,
    selectedModel,
    selectedCapacity,
    selectedHeight,
    selectedPower,
    selectedInput,
    selectedOutput
  ) => {
    if (
      !selectedProduct ||
      !selectedModel ||
      !selectedCapacity ||
      !selectedHeight ||
      !selectedPower ||
      !selectedInput ||
      !selectedOutput
    ) {
      showToastError('Todos os campos devem ser preenchidos antes de salvar o produto');
      return true;
    }
    return false;
  };

  return {
    ...selections,
    handleChange,
    handleSave, 
    data,
  };
};

export default useSelectFormLogic;