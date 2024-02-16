// bodyOF.tsx
import * as React from 'react';
import { Card, Flex, Title, Text, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Divider } from '@tremor/react';

export default function bodyOF({ info }) {
  return (
    <>
      <Flex className="mt-2 flex-col items-start">
        <div className="flex flex-row flex-wrap">
          <Text className="mr-2"><b>Status:</b> {info?.status ?? '-'}</Text>
          <Text className="mr-2"><b>Local:</b> {info?.location ?? '-'}</Text>
          <Text className="mr-2"><b>Tipo:</b> {info?.type ?? '-'}</Text>
        </div>
        <div className="flex flex-row flex-wrap">
          <Text className="mr-2"><b>Ordem de Fabricação:</b> {info?.manufacturingOrder ?? '-'}</Text>
          <Text className="mr-2"><b>Formato:</b> {info?.format ?? '-'}</Text>
          <Text className="mr-2"><b>Ordenação:</b> {info?.sorting ?? '-'}</Text>
        </div>
        <div className="flex flex-row flex-wrap">
          <Text className="mr-2"><b>Listar Apenas Sem Estoque:</b> {info?.listOnlyWithoutStock ?? '-'}</Text>
          <Text className="mr-2"><b>Tipo Período:</b> {info?.periodType ?? '-'}</Text>
          <Text className="mr-2"><b>Período:</b> {info?.period ?? '-'}</Text>
        </div>
      </Flex>
      
      <Flex className="mt-2 border-2 border-gray-400 px-10 grid grid-cols-5 gap-4 items-start">
        <div className="col-span-4 space-y-1 pr-10">
          <Flex className="flex flex-row flex-wrap">
            <Text className="mr-2"><b>O.F:</b> {info?.of ?? '-'}</Text>
            <Text className="mr-2"><b>Quantidade:</b> {info?.amount ?? '-'}</Text>
            <Text className="mr-2"><b>Dt.Emissão:</b> {info?.emission ?? '-'}</Text>
          </Flex>
          <Flex className="flex flex-row flex-wrap">
            <Text className="mr-2"><b>Cliente:</b> {info?.client ?? '-'}</Text>
            <Text className="mr-2"><b>Dt.Entrega:</b> {info?.delivery ?? '-'}</Text>
          </Flex>
          <Flex className="flex flex-row flex-wrap">
            <Text className="mr-2"><b>Produto:</b> {info?.sorting ?? '-'}</Text>
          </Flex>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <Title className="text-2xl font-bold mr-2">Tag: {info?.tag ?? '-'}</Title>
        </div>
      </Flex>

      <Text className="mt-5 font-bold">
        {'Status = { P = Pendente, E = Embarcado, C = Cancelado, N = Não Retirado, R = Retirado }'}
      </Text>

      <Table className="table-auto w-full">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="w-[7.5%] text-right px-0 py-2'">Qdt</TableHeaderCell>
            <TableHeaderCell className="w-[7.5%] text-right px-0 py-2'">Saldo</TableHeaderCell>
            <TableHeaderCell className="w-[9%] text-right px-0 py-2'">Código</TableHeaderCell>
            <TableHeaderCell className="w-[6%] text-center px-0 py-2'">RD</TableHeaderCell>
            <TableHeaderCell className="w-[27%] text-start px-0 py-2'">Produto</TableHeaderCell>
            <TableHeaderCell className="w-[5%] text-start px-0 py-2'">UN</TableHeaderCell>
            <TableHeaderCell className="w-[8%] text-start px-0 py-2'">Cor</TableHeaderCell>
            <TableHeaderCell className="w-[10%] text-start px-0 py-2'">Material</TableHeaderCell>
            <TableHeaderCell className="w-[11%] text-start px-0 py-2'">(AxLxC)</TableHeaderCell>
            <TableHeaderCell className="w-[8%] text-start px-0 py-2'">Peso tot</TableHeaderCell>
          </TableRow>
        </TableHead>
      </Table>
      <Divider className="border-b-2 border-gray-400 mb-2 mt-0" />
      <Flex className="bg-gray-200 py-1 my-2 flex justify-center"justifyContent="center">
        <Title className="text-2xl font-bold">Local: Expedição</Title>
      </Flex>
      <Flex className="bg-gray-200 py-1 my-2 pl-2 flex justify-start"justifyContent="start">
        <Title className="text-2xl font-bold">{info?.product}</Title>
      </Flex>
      <Table className="table-auto w-full">
        <TableBody>
          {info && info.items && info.items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="w-[8%] break-words border px-4 py-2">{item.quantity}</TableCell>
              <TableCell className="w-[8%] break-words border px-4 py-2">{item.balance}</TableCell>
              <TableCell className="w-[10%] break-words border px-4 py-2">{item.code}</TableCell>
              <TableCell className="w-[4%] break-words border px-4 py-2">{item.rdProduct}</TableCell>
              <TableCell className="w-[30%] break-words border px-4 py-2">{item.name}</TableCell>
              <TableCell className="w-[4%] break-words border px-4 py-2">{item.unit}</TableCell>
              <TableCell className="w-[8%] break-words border px-4 py-2">{item.color}</TableCell>
              <TableCell className="w-[8%] break-words border px-4 py-2">{item.material}</TableCell>
              <TableCell className="w-[12%] break-words border px-4 py-2">{item.dimensions}</TableCell>
              <TableCell className="w-[8%] break-words border px-4 py-2">{item.weight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}