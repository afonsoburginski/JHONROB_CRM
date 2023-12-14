// page.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Card, Title, Text, TextInput, Grid, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@tremor/react';
import ProductTable from './producTable';

import Search from 'app/components/search';
import Dropzone from 'app/components/dropzone';
import Export from 'app/components/export';

const ProductPage = () => {
  const [groups, setGroups] = useState<Group[] | undefined>();
  const [searchFilter, setSearchFilter] = useState('');
  const [activeTab, setActiveTab] = useState('tab1'); // Adicionado

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
      {/* <Search onChange={handleSearchChange} placeholder="Buscar..." /> */}
      <Title>Cadastro</Title>
      <Text>Preencha os campos abaixo para cadastrar um novo produto ou cliente.</Text>
      <TabGroup className="mt-6">
        <TabList>
          <Tab>
            <Title>Equipamentos</Title>
          </Tab>
          <Tab>
            <Title>Clientes</Title>
          </Tab>
        </TabList>
        <TabPanels>

          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
              <Card>
                {/* Placeholder to set height */}
                <div className="h-28" />
              </Card>
              <Card>
                <Dropzone/>
                Faça o upload de dados via csv
                <Export/>
                Exporte os dados em csv
                <div className="h-28" />
              </Card>
            </Grid>
            <div className="mt-6">
              <Card>
                <ProductTable groups={filteredGroups} />
              </Card>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="mt-6">
              <Card>

              </Card>
            </div>
          </TabPanel>

        </TabPanels>
      </TabGroup>
    </main>
  );
};

export default ProductPage;