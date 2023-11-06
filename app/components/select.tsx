/* eslint-disable react/jsx-no-undef */
'use client';

import React, { useState } from 'react';
import Select from 'react-select';
import { Data, productOptions, capacityOptions, potencyOptions, dimensionOptions, colourOptions } from '../data'

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

        {/* <div className='grid-cols-1 w-full'>
          <label>Capacidade</label>
          <Select
            isMulti
            name="colors"
            options={colourOptions}
            className="basic-multi-select grid-cols-2 w-full"
            classNamePrefix="select"
            />
        </div> */}

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
          <label>Dimensões</label>
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
      </div>

      {/* Segunda Linha */}
      
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
          <label>Produto</label>
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

        <div className='grid-cols-1 w-full'>
          <label>Produto</label>
          <Select
            className="basic-single grid-cols-4 w-full"
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