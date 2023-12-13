// page.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Card, Title, Text } from '@tremor/react';
import ProductTable from './producTable';
import Dropzone from 'app/components/dropzone';

type Power = {
  // Adicione os campos para Power aqui
};

type Height = {
  // Adicione os campos para Height aqui
  powers: Power[];
};

type Capacity = {
  // Adicione os campos para Capacity aqui
  heights: Height[];
};

type Model = {
  // Adicione os campos para Model aqui
  capacities: Capacity[];
};

type Type = {
  // Adicione os campos para Type aqui
};

type Product = {
  models: Model[];
  types: Type[];
};

type Group = {
  id: number;
  group: string;
  title: string;
  products: Product[];
};

const ProductPage = () => {
  const [groups, setGroups] = useState<Group[] | undefined>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products`);
        if (response.ok) {
          const data = await response.json();
          setGroups(data.groups);
        } else {
          console.error('Erro: a resposta da API não contém dados');
        }
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-screen-2xl">
      <Title>Cadastro</Title>
      <Text>Preencha os campos abaixo para cadastrar um novo produto ou cliente.</Text>
      <Dropzone />
      <Card className="mt-6">
        <ProductTable groups={groups} />
      </Card>
    </main>
  );
};

export default ProductPage;