// page.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Card, Title, Text, TextInput } from '@tremor/react';
import ProductTable from './producTable';

import Search from 'app/components/search';

const ProductPage = () => {
  const [groups, setGroups] = useState<Group[] | undefined>();
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products`);
        if (response.ok) {
          const data = await response.json();
          setGroups(data.groups);
        } else {
        }
      } catch (error) {
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchFilter(value);
  };

  const isNumeric = (str) => {
    return !isNaN(str) && !isNaN(parseFloat(str));
  }

  const filteredGroups = groups?.filter(group => 
    isNumeric(searchFilter) ? group.id.toString().includes(searchFilter) : 
    group.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    group.products.some(product => product.title.toLowerCase().includes(searchFilter.toLowerCase()))
  );

  return (
    <main className="p-4 md:p-10 mx-auto max-w-screen-2xl">
      <Title>Cadastro</Title>
      <Text>Preencha os campos abaixo para cadastrar um novo produto ou cliente.</Text>
      <Search onChange={handleSearchChange} placeholder="Buscar..." />
      <Card className="mt-6">
        <ProductTable groups={filteredGroups} />
      </Card>
    </main>
  );
};

export default ProductPage;