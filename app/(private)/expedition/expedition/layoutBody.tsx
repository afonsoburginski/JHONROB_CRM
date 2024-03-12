// layoutBody.tsx
import * as React from 'react';
import { Card, Flex, Title, Text, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Divider } from '@tremor/react';

export default function layoutBody({ item }) {
  console.log(item);
  const totalWeight = item?.pieces?.reduce((total, pieceItem) => total + Number(pieceItem.piece.weight), 0) ?? 0;
  const totalQuantity = item?.pieces?.reduce((total, pieceItem) => total + Number(pieceItem.piece.quantity), 0) ?? 0;
  const totalBalance = item?.pieces?.reduce((total, pieceItem) => total + Number(pieceItem.piece.balance), 0) ?? 0;
  return (
    <>
      
      <Flex className="mt-2 border-2 border-gray-400 px-5 grid grid-cols-5 gap-5 items-start">
        <div className="col-span-4 space-y-2 pr-44">
          <Flex className="flex flex-row flex-wrap">
            <Text className="mr-2"><b>O.F:</b> {item?.of?.id ?? '-'}</Text>
            <Text className="mr-2"><b>Quantidade:</b> {item?.of?.amount ?? '-'}</Text>
            <Text className="mr-2"><b>Dt.Emissão:</b> {item?.of?.emission ?? '-'}</Text>
          </Flex>
          <Flex className="flex flex-row flex-wrap">
            <Text className="mr-2"><b>Cliente:</b> {item?.of?.client ?? '-'}</Text>
            <Text className="mr-2"><b>Dt.Entrega:</b> {item?.of?.delivery ?? '-'}</Text>
          </Flex>
          <Flex className="flex flex-row flex-wrap">
            <Text className="mr-2"><b>Produto:</b> {item?.product?.id ?? '-'}</Text>
          </Flex>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <Title className="mr-2">Tag: {item?.of?.tag ?? '-'}</Title>
        </div>
      </Flex>

      <Text className="mt-5 font-bold">
        {'Status = { P = Pendente, E = Embarcado, C = Cancelado, N = Não Retirado, R = Retirado }'}
      </Text>

      <Table className="table-auto w-full">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="w-[8%] text-end px-2 py-1.5'">Qdt</TableHeaderCell>
            <TableHeaderCell className="w-[8%] text-end px-2 py-1.5'">Saldo</TableHeaderCell>
            <TableHeaderCell className="w-[10%] text-end px-2 py-1.5'">Código</TableHeaderCell>
            <TableHeaderCell className="w-[4%] text-center px-2 py-1.5'">RD</TableHeaderCell>
            <TableHeaderCell className="w-[30%] text-start px-2 py-1.5'">Produto</TableHeaderCell>
            <TableHeaderCell className="w-[4%] text-center px-2 py-1.5'">UN</TableHeaderCell>
            <TableHeaderCell className="w-[8%] text-center px-2 py-1.5'">Cor</TableHeaderCell>
            <TableHeaderCell className="w-[8%] text-center px-2 py-1.5'">Material</TableHeaderCell>
            <TableHeaderCell className="w-[12%] text-center px-2 py-1.5'">(AxLxC)</TableHeaderCell>
            <TableHeaderCell className="w-[8%] text-end px-2 py-1.5'">Peso tot</TableHeaderCell>
          </TableRow>
        </TableHead>
      </Table>
      <Divider className="border-b-2 border-gray-400 mb-2 mt-0" />
      <Flex className="bg-gray-200 py-1 my-2 flex justify-center"justifyContent="center">
        <Title className="text-2xl font-bold">Local: Expedição</Title>
      </Flex>
      <Flex className="bg-gray-200 py-1 my-2 pl-2 flex justify-start"justifyContent="start">
        <Title className="text-2xl font-bold">{item?.product?.id}</Title>
      </Flex>
      <Table className="table-auto w-full">
        <TableBody>
          {item?.pieces?.map((pieceItem, index) => (
            <TableRow key={index}>
              <TableCell className="w-[8%] break-words border px-2 py-1.5 uppercase text-end">{pieceItem.piece.quantity}</TableCell>
              <TableCell className="w-[8%] break-words border px-2 py-1.5 uppercase text-end">{pieceItem.piece.balance}</TableCell>
              <TableCell className="w-[10%] break-words border px-2 py-1.5 uppercase text-end">{pieceItem.piece.code}</TableCell>
              <TableCell className="w-[4%] break-words border px-2 py-1.5 uppercase text-center">{pieceItem.piece.rdProduct}</TableCell>
              <TableCell className="w-[30%] break-words border px-2 py-1.5 uppercase text-start">{pieceItem.piece.id}</TableCell>
              <TableCell className="w-[4%] break-words border px-2 py-1.5 uppercase text-center">{pieceItem.piece.unit}</TableCell>
              <TableCell className="w-[8%] break-words border px-2 py-1.5 uppercase text-center">{pieceItem.piece.color}</TableCell>
              <TableCell className="w-[8%] break-words border px-2 py-1.5 uppercase text-center">{pieceItem.piece.material}</TableCell>
              <TableCell className="w-[12%] break-words border px-2 py-1.5 uppercase text-center">{pieceItem.piece.dimensions}</TableCell>
              <TableCell className="w-[8%] break-words border px-2 py-1.5 uppercase text-end">{pieceItem.piece.weight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between mb-5">
        <div className="w-52">
          <Flex className="justify-end py-2 px-2 gap-20">
            <Text>{totalQuantity}</Text>
            <Text>{totalBalance}</Text>
          </Flex>
        </div>
        <div className="w-72 ml-auto">
          <Divider className="border-b-2 border-gray-400 mt-2 mb-1" />
          <Flex className="justify-end px-2 gap-16">
            <Text className="font-bold pr-1">Total: </Text>
            <Text>{totalWeight}</Text>
          </Flex>
          <Divider className="border-b-2 border-gray-400 mt-5 mb-1" />
          <Flex className="justify-end px-2 gap-16">
            <Text className="font-bold pr-1">Total Geral: </Text>
            <Text>{totalWeight}</Text>
          </Flex>
        </div>
      </div>
    </>
  );
}