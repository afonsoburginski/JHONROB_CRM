/* eslint-disable react/jsx-no-undef */
'use client';
import React, { useState } from 'react';
import Select from 'react-select';
import { model } from '../data'

export default function SelectForm() {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);


  const [model, setModel] = useState(null);
  const [modelList, setModelList] = useState([]);

  const handleModelChange = (obj: React.SetStateAction<null> | React.SetStateAction<never[]>) => {
    ModelList(obj)
    setModelList(obj.model);
    setModel(null);
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
            value={model} // set selected value
            onChange={handleModelChange} // assign onChange function
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
            onChange={handleModelChange} // assign onChange function
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
            value={model} // set selected value
            onChange={handleModelChange} // assign onChange function
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
            options={model}
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
            options={model}
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
            options={model}
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
            options={model}
          />
        </div>
      </div>
    </form>
    </>
  );
};
