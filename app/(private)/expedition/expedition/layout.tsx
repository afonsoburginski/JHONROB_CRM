// Layout.tsx
import * as React from 'react';
import Image from 'next/image';
import { Card, Flex, Title, Text, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Divider } from '@tremor/react';
import BodyOF from './layoutBody';

export default function Layout({ selectedOF, attachedItems, savedItems, setSavedItems, info }) {
  return (
    <Card className="bg-white shadow-md rounded px-8 pt-6 pb-8">
      <Divider className="border-b-2 border-gray-400 mb-1" />
      <Flex alignItems='center' className="h-10">
        <Flex className='flex flex-col items-start'>
          <Image src="/logo.png" alt="Logo" width={180} height={50}/>
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
          <Text className="mr-2"><b>Status:</b> {info?.status ?? 'Pendentes'}</Text>
          <Text className="mr-2"><b>Local:</b> {info?.location ?? 'Expedição'}</Text>
          <Text className="mr-2"><b>Tipo:</b> {info?.type ?? 'Não Retirado'}</Text>
        </div>
        <div className="flex flex-row flex-wrap">
          <Text className="mr-2"><b>Ordem de Fabricação:</b> {info?.manufacturingOrder ?? 'Multipla Seleção, 5 Itens Selecionados'}</Text>
          <Text className="mr-2"><b>Formato:</b> {info?.format ?? 'Retrato'}</Text>
          <Text className="mr-2"><b>Ordenação:</b> {info?.sorting ?? 'Código'}</Text>
        </div>
        <div className="flex flex-row flex-wrap">
          <Text className="mr-2"><b>Listar Apenas Sem Estoque:</b> {info?.listOnlyWithoutStock ?? 'Não'}</Text>
          <Text className="mr-2"><b>Tipo Período:</b> {info?.periodType ?? 'Dt.Cadastro'}</Text>
          <Text className="mr-2"><b>Período:</b> {info?.period ?? 'Todos'}</Text>
        </div>
      </Flex>
      {Array.isArray(selectedOF) && selectedOF.map((info, index) => <BodyOF key={index} info={info} />)}
    </Card>
  );
}