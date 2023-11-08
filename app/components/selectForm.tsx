/* eslint-disable react/jsx-no-undef */
'use client';
import React, { useState } from 'react';
import Select from 'react-select';
import { productOptions, capacityOptions, dimensionOptions, potencyOptions } from '../data'

export default function SelectForm() {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const [product, setProduct] = useState(null);
  const [model, setModel] = useState(null);
  const [capacity, setCapacity] = useState(null);
  const [modelList, setModelList] = useState([]);
  const [capacityList, setCapacitylList] = useState([]);

  // handle change event of the product dropdown
  const handleProductChange = (obj: React.SetStateAction<null>) => {
    setProduct(obj);
    setModelList(obj?.model ?? []);
    setCapacitylList(obj?.capacity ?? []);
    setModel(null);
    setCapacity(null);
  };

  // handle change event of the Model dropdown
  const handleModelChange = (obj: React.SetStateAction<null>) => {
    setModel(obj);
  };

  const handleCapacityChange = (obj: React.SetStateAction<null>) => {
    setCapacity(obj);
  };
  
  return (
    <>
    <form className='flex flex-col w-full max-w-screen-xl gap-5'>
      <div className='flex grid-cols-4 gap-5'>
        <div className='grid-cols-1 w-full'>
          <label>Produto</label>
          <Select
            className="basic-single grid-cols-1 w-full"
            classNamePrefix="select"
            placeholder="Selecionar produto"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            value={product} // set selected value
            options={productOptions} // set list of the data
            onChange={handleProductChange} // assign onChange function
            getOptionLabel={(x) => x.label}
            getOptionValue={(x) => x.value}
          />
        </div>
        <div className='grid-cols-1 w-full'>
          <label>Modelo</label>  
          <Select
            className="basic-single grid-cols-1 w-full"
            classNamePrefix="select"
            placeholder="Selecionar modelo"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            value={model} // set selected value
            options={modelList} // set list of the data
            onChange={handleModelChange} // assign onChange function
            getOptionLabel={(x) => x.label}
            getOptionValue={(x) => x.value}
          />
        </div>

        <div className='grid-cols-1 w-full'>
          <label>Capacidade</label>  
          <Select
            className="basic-single grid-cols-1 w-full"
            classNamePrefix="select"
            placeholder="Capacidade"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            value={capacity} // set selected value
            options={capacityList} // set list of the data
            onChange={handleCapacityChange} // assign onChange function
            getOptionLabel={(x) => x.label}
            getOptionValue={(x) => x.value}
          />
        </div>

      </div>

      {/* Segunda Linha */}
      
      <div className='flex grid-cols-4 gap-5'>
        <div className='grid-cols-1 w-full'>
          <label>Altura</label>
          <Select
            className="basic-single grid-cols-4 w-full"
            classNamePrefix="select"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            options={dimensionOptions}
          />
        </div>

        <div className='grid-cols-1 w-full'>
          <label>Potência</label>
          <Select
            className="basic-single grid-cols-4 w-full"
            classNamePrefix="select"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            options={potencyOptions}
          />
        </div>
        <div className='grid-cols-1 w-full'>
          <label>Saída de Produto</label>
          <Select
            className="basic-single grid-cols-1 w-full"
            classNamePrefix="select"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            options={productOptions}
          />
        </div>

        <div className='grid-cols-1 w-full'>
          <label>Entrada de produto</label>
          <Select
            className="basic-single grid-cols-3 w-full"
            classNamePrefix="select"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            options={productOptions}
          />
        </div>
      </div>
    </form>
    </>
  );
};