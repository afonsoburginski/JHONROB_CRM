/* eslint-disable react/jsx-no-undef */
'use client';

import React, { useState } from 'react';
import Select from 'react-select';
import { Data, productOptions, modelOptions, capacityOptions, dimensionOptions, potencyOptions, colourOptions } from '../data'

export default function SelectForm() {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  return (
    <>
    <form className='flex flex-col w-full max-w-screen-xl gap-5'>
      {/* Primeira linha */}
      <div className='flex grid-cols-4 gap-5'>
        <div className='grid-cols-1 w-full'>
          <label>Produto</label>
          <Select
            className="basic-single grid-cols-1 w-full"
            classNamePrefix="select"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="color"
            options={productOptions}
          />
        </div>

        <div className='grid-cols-1 w-full'>
          <label>Modelo</label>
          <Select
            className="basic-single grid-cols-3 w-full"
            classNamePrefix="select"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="color"
            options={modelOptions}
          />
        </div>

        <div className='grid-cols-1 w-full'>
          <label>Capacidade</label>
          <Select
            className="basic-single grid-cols-3 w-full"
            classNamePrefix="select"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="color"
            options={capacityOptions}
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
            name="color"
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
            name="color"
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
            name="color"
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
            name="color"
            options={productOptions}
          />
        </div>
      </div>
    </form>
    </>
  );
};