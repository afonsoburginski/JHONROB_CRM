// Layout.tsx
'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Card, Flex, Title, Text, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Divider } from '@tremor/react';
import LayoutBody from './layoutBody';

export default function Layout({ savedItems }) {

  useEffect(() => {
    if (savedItems.length > 0) {
      savedItems.forEach((item, index) => {
        console.log(`Dados recebidos ${index}`, item);
      });
    }
  }, [savedItems]);

  return (
    <Card className="bg-white shadow-md rounded px-8 pt-6 pb-8">
      <Divider className="border-b-2 border-gray-400 mb-1" />
      <Flex alignItems='center' className="h-10">
        <Flex className='flex flex-col items-start'>
          <Image src="/logo.png" alt="Logo" width={180} height={60} priority/>
        </Flex>
        <Flex className="flex flex-col items-center">
          <Title className="text-2xl font-bold tracking-widest">JHONROB</Title>
          <Title className="text-xl">Relação Item Embarque</Title>
        </Flex>
        <Flex className="flex flex-col items-end -mt-7">
          <Text>CNPJ: 02.053.879/0001-65</Text>
        </Flex>
      </Flex>
      <Divider className="border-b-2 border-gray-400 mt-1 mb-1" />
      <Flex className="flex-col items-start mb-5">
        <div className="flex flex-row flex-wrap">
          <Text className="mr-2"><b>Status:</b> {savedItems?.of ?? 'Pendentes'}</Text>
          <Text className="mr-2"><b>Local:</b> {savedItems?.location ?? 'Expedição'}</Text>
          <Text className="mr-2"><b>Tipo:</b> {savedItems?.type ?? 'Não Retirado'}</Text>
        </div>
        <div className="flex flex-row flex-wrap">
          <Text className="mr-2"><b>Ordem de Fabricação:</b> {savedItems?.manufacturingOrder ?? 'Multipla Seleção, 5 Itens Selecionados'}</Text>
          <Text className="mr-2"><b>Formato:</b> {savedItems?.format ?? 'Retrato'}</Text>
          <Text className="mr-2"><b>Ordenação:</b> {savedItems?.sorting ?? 'Código'}</Text>
        </div>
        <div className="flex flex-row flex-wrap">
          <Text className="mr-2"><b>Listar Apenas Sem Estoque:</b> {savedItems?.listOnlyWithoutStock ?? 'Não'}</Text>
          <Text className="mr-2"><b>Tipo Período:</b> {savedItems?.periodType ?? 'Dt.Cadastro'}</Text>
          <Text className="mr-2"><b>Período:</b> {savedItems?.period ?? 'Todos'}</Text>
        </div>
      </Flex>
      {Array.isArray(savedItems) && savedItems.length > 0 && savedItems.map((item, index) => (
        <LayoutBody key={index} item={item} counter={index + 1} />
      ))}
    </Card>
  );
}