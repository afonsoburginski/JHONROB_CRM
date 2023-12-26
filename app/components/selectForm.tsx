// selectForm.client.tsx
'use client'
import React from 'react';
import Select from 'react-select';
import { Grid, Text, Button } from '@tremor/react';
import useSelectFormLogic from './selectFormLogic';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '7px',
    borderColor: state.isFocused ? 'bg-tremor-brand' : provided.borderColor,
    boxShadow: state.isFocused ? '0 0 0 1px bg-tremor-brand' : provided.boxShadow,
    '&:hover': {
      borderColor: state.isFocused ? 'bg-tremor-brand' : provided.borderColor,
    }
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isHover ? 'bg-tremor-brand-subtle' : provided.backgroundColor,
    color: state.isHover ? 'bg-tremor-brand-subtle' : provided.color,
  }),
};

export default function SelectFormClient() {
  const {
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
  } = useSelectFormLogic();

  return (
    <>
      <form className='flex flex-col w-full max-w-full gap-5 h-48'>
        <Grid className='grid-cols-5 gap-5'>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-1">Grupo</Text>
            <Select
              styles={customStyles}
              value={selectedGroup ? { value: selectedGroup.id, label: selectedGroup.title } : null}
              options={groups.map(group => ({ value: group.id, label: group.title }))}
              onChange={handleGroupChange}
              placeholder='Selecione o grupo...'
            />
          </Grid>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-1">Equipamento</Text>
            <Select
              styles={customStyles}
              value={selectedProduct ? { value: selectedProduct.id, label: selectedProduct.title } : null}
              onChange={handleProductChange}
              options={(selectedGroup?.products || []).map((product) => ({ value: product.id, label: product.title }))}
              isDisabled={!selectedGroup}
              placeholder='Selecione o equipamento...'
            />
          </Grid>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-1">Produto</Text>
            <Select
              styles={customStyles}
              value={selectedType ? { value: selectedType.id, label: selectedType.title } : null}
              onChange={handleTypeChange}
              options={types.map((type) => ({ value: type.id, label: type.title }))}
              isDisabled={!selectedProduct}
              placeholder='Selecione o produto...'
            />
          </Grid>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-1">Modelo</Text>
            <Select
              styles={customStyles}
              value={selectedModel ? { value: selectedModel.id, label: selectedModel.title } : null}
              onChange={handleModelChange}
              options={models.map((model) => ({ value: model.id, label: model.title }))}
              isDisabled={!selectedProduct}
              placeholder='Selecione o modelo...'
            />
          </Grid>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-1">Capacidade</Text>
            <Select
              styles={customStyles}
              value={selectedCapacity ? { value: selectedCapacity.id, label: selectedCapacity.title } : null}
              onChange={handleCapacityChange}
              options={(selectedModel?.capacities || []).map((capacity) => ({ value: capacity.id, label: capacity.title }))}
              isDisabled={!selectedModel}
              placeholder='Selecione a capacidade...'
            />
          </Grid>
        </Grid>

        <Grid className='grid-cols-4 gap-5'>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-1">Altura</Text>
            <Select
              styles={customStyles}
              value={selectedHeight ? { value: selectedHeight.id, label: selectedHeight.title } : null}
              onChange={handleHeightChange}
              options={(selectedCapacity?.heights || []).map((height) => ({ value: height.id, label: height.title }))}
              isDisabled={!selectedCapacity}
              placeholder='Selecione a altura...'
            />
          </Grid>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-1">Potência</Text>
            <Select
              styles={customStyles}
              value={selectedPower ? { value: selectedPower.id, label: `${selectedPower.title} ${selectedPower.recommended ? "(recomendado)" : ""}` } : null}
              onChange={handlePowerChange}
              options={powers ? powers.map((power) => ({ value: power.id, label: `${power.title} ${power.recommended ? "(recomendado)" : ""}` })) : []}
              isDisabled={!selectedHeight}
              placeholder='Selecione a potência...'
            />
          </Grid>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-1">Entrada</Text>
            <Select
              styles={customStyles}
              isMulti
              value={selectedInput ? selectedInput.map(input => ({ value: input.input, label: input.input })) : []}
              onChange={handleInputChange}
              options={inputsAndOutputs.map(item => ({ value: item.input, label: item.input }))}
              isDisabled={!selectedPower}
              placeholder='Selecione a entrada...'
            />
          </Grid>
          <Grid className='grid-cols-1 w-full'>
            <Text className="sticky whitespace-nowrap text-left font-semibold text-tremor-content dark:text-dark-tremor-content top-0 py-1">Saída</Text>
            <Select
              styles={customStyles}
              isMulti
              value={selectedOutput ? selectedOutput.map(output => ({ value: output.output, label: output.output })) : []}
              onChange={handleOutputChange}
              options={inputsAndOutputs.map(item => ({ value: item.output, label: item.output }))}
              isDisabled={!selectedPower}
              placeholder='Selecione a saída...'
            />
          </Grid>
        </Grid>

        <Grid className='flex justify-end items-end grid-cols-3 w-full'>
          <Button size='xs' style={{ borderRadius: '5px' }} variant='secondary' onClick={handleSave}>
            Adicionar
          </Button>
        </Grid>
      </form>
    </>
  );
}
