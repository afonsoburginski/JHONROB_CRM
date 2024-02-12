// expeditionLayout.tsx
import * as React from 'react';
import Image from 'next/image';
import { Card, Flex, Title, Text, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Divider } from '@tremor/react';
import BodyOF from './bodyOF';

export default function ExpeditionLayout({ selectedOF, attachedItems, savedItems, setSavedItems }) {
  return (
    <Card className="bg-white shadow-md rounded px-8 pt-6 pb-8">
      <Divider className="border-b-0 border-gray-200 mb-2" />
      <Flex alignItems='center' className="h-10">
        <Flex className='flex flex-col items-start'>
          <Image src="/logo.png" alt="Logo" width={180} height={50}/>
        </Flex>
        <Flex className="flex flex-col items-center">
          <Title className="text-2xl font-bold">Nome da Empresa</Title>
          <Text>Relação Item Embarque</Text>
        </Flex>
        <Flex className="flex flex-col items-end">
          <Text>CNPJ: 00.000.000/0000-00</Text>
        </Flex>
      </Flex>
      <Divider className="border-b-0 border-gray-200 mt-2" />
      <BodyOF info={selectedOF[0]} />
    </Card>
  );
}