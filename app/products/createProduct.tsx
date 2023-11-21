// createProduct.tsx
'use client'
import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

interface Option {
  label: string;
  value: string;
}

const CreateProduct = () => {
  const [group, setGroup] = useState<Option | null>(null); // Adicionado estado para group
  const [equipment, setEquipment] = useState<Option | null>(null); // Adicionado estado para equipment
  const [product, setProduct] = useState<Option | null>(null);
  const [model, setModel] = useState<Option[] | null>(null);
  const [capacity, setCapacity] = useState<Option[] | null>(null);
  const [height, setHeight] = useState<Option[] | null>(null);
  const [power, setPower] = useState<Option[] | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (!product || !equipment || !group || !model || !capacity || !height || !power) {
      console.error('Todos os campos são necessários');
      return;
    }

    const productData = {
      title: product.value,
      equipment: {
        create: {
          title: equipment.label,
          group: {
            create: {
              title: group.label,
            },
          },
          models: {
            create: model.map((m: Option, i: number) => ({
              title: m.value,
              capacities: {
                create: capacity.map((c: Option, j: number) => ({
                  title: c.value,
                  heights: {
                    create: height.map((h: Option, k: number) => ({
                      title: h.value,
                      powers: {
                        create: {
                          title: power[k]?.value,
                        },
                      },
                    })),
                  },
                })),
              },
            })),
          },
        },
      },
    };
  
    console.log('productData:', productData); // Log do productData antes de enviar a requisição
  
    try {
      const response = await fetch('http://localhost:3000/api/createProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
  
      if (response.ok) {
        console.log('Produto criado com sucesso');
      } else {
        console.error('Erro ao criar o produto');
        const errorData = await response.json();
        console.error('Detalhes do erro:', errorData);
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-screen-xl gap-5">

      <div className='flex grid-cols-4 gap-5'>
        <div className='grid-cols-1 w-full'>
          <label className="block text-sm font-medium text-gray-700">Grupo:</label>
          <CreatableSelect
            isClearable
            onChange={setGroup}
            placeholder="Grupo"
            className="mt-1 block w-full basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        <div className='grid-cols-1 w-full'>
          <label className="block text-sm font-medium text-gray-700">Equipamento:</label>
          <CreatableSelect
            isClearable
            onChange={setEquipment}
            placeholder="Equipamento"
            className="mt-1 block w-full basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>

      <div className='flex grid-cols-4 gap-5'>
        <div className='grid-cols-1 w-full'>
          <label className="block text-sm font-medium text-gray-700">Produto:</label>
          <CreatableSelect 
            options={product ? [product] : []}
            value={product}
            onChange={(selectedOption: Option | null) => setProduct(selectedOption)}
            className="mt-1 block w-full basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        <div className='grid-cols-1 w-full'>
          <label className="block text-sm font-medium text-gray-700">Modelo:</label>
          <CreatableSelect 
            isMulti
            options={model ? [model] : []}
            value={model}
            onChange={(selectedOption: Option | null) => setModel(selectedOption)}
            className="mt-1 block w-full"
          />
        </div>
        <div className='grid-cols-1 w-full'>
          <label className="block text-sm font-medium text-gray-700">Capacidade:</label>
          <CreatableSelect
            isMulti
            options={capacity ? [capacity] : []}
            value={capacity}
            onChange={(selectedOption: Option | null) => setCapacity(selectedOption)}
            className="mt-1 block w-full"
          />
        </div>
      </div>

      <div className='flex grid-cols-4 gap-5'>
        <div className='grid-cols-1 w-full'>
          <label className="block text-sm font-medium text-gray-700">Altura:</label>
          <CreatableSelect
            isMulti
            options={height ? [height] : []}
            value={height}
            onChange={(selectedOption: Option | null) => setHeight(selectedOption)}
            className="mt-1 block w-full"
          />
        </div>
        <div className='grid-cols-1 w-full'>
          <label className="block text-sm font-medium text-gray-700">Potência:</label>
          <CreatableSelect
            isMulti
            options={power ? [power] : []}
            value={power}
            onChange={(selectedOption: Option[] | null) => setPower(selectedOption)}
            className="mt-1 block w-full"
          />
        </div>
      </div>
      <div className='flex justify-end items-end grid-cols-3 w-full'>
        <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-1 px-4 border border-gray-400 rounded">Criar Produto</button>
      </div>
    </form>
  );
};

export default CreateProduct;