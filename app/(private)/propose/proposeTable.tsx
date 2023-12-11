// proposeTable.tsx
'use client'
import React from 'react';
import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Button} from '@tremor/react';
import GenerateProposeButton from '../../components/proposeButton';
import ObservationModal from '../../components/observationModal';

interface ProposeTableProps {
  proposes: Propose[];
}

interface Propose {
  id: number;
  title: string;
  content: string;
  observation: string;
  groups: string;
  product: string;
  type: string;
  model: string;
  capacity: string;
  height: string;
  power: string;
  input: string;
  output: string;
  createdAt: Date; // Adicione esta linha
  clientId: number; // Adicione esta linha
  client: { 
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    cpfCnpj: string;
    ie: string;
  };
  productSelections: any[]; // Adicione esta linha, substitua 'any' pelo tipo correto
}

const ProposeTable: React.FC<ProposeTableProps> = ({ proposes }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell>ID</TableHeaderCell>
        <TableHeaderCell>Título</TableHeaderCell>
        <TableHeaderCell>Observação</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
        <TableHeaderCell>Gerar Proposta</TableHeaderCell>
        {/* <TableHeaderCell>Conteúdo</TableHeaderCell> */}
        {/* <TableHeaderCell>Cliente</TableHeaderCell> */}
        {/* <TableHeaderCell>Grupos</TableHeaderCell> */}
        {/* <TableHeaderCell>Equipamento</TableHeaderCell> */}
        {/* <TableHeaderCell>Produto</TableHeaderCell> */}
        {/* <TableHeaderCell>Modelo</TableHeaderCell> */}
        {/* <TableHeaderCell>Capacidade</TableHeaderCell> */}
        {/* <TableHeaderCell>Altura</TableHeaderCell> */}
        {/* <TableHeaderCell>Potência</TableHeaderCell> */}
        {/* <TableHeaderCell>Entrada</TableHeaderCell> */}
        {/* <TableHeaderCell>Saída</TableHeaderCell> */}
      </TableRow>
    </TableHead>
    <TableBody>
      {proposes && proposes.map((propose, index) => (
        <TableRow key={index}>
          <TableCell>{propose.id}</TableCell>
          <TableCell>{`Proposta ${propose.client.name}`}</TableCell> 
          <TableCell>
            <ObservationModal observation={propose.observation} />
          </TableCell>
          <TableCell>
            <Button style={{ borderRadius: '5px'}} variant='secondary'>
              Aprovado
            </Button>
          </TableCell>
          <TableCell>
            <GenerateProposeButton propose={propose} />
          </TableCell>
          {/* <TableCell>{propose.content}</TableCell> */}
          {/* <TableCell>{propose.client.name}</TableCell> */}
          {/* <TableCell>{propose.groups}</TableCell> */}
          {/* <TableCell>{propose.product}</TableCell> */}
          {/* <TableCell>{propose.type}</TableCell> */}
          {/* <TableCell>{propose.model}</TableCell> */}
          {/* <TableCell>{propose.capacity}</TableCell> */}
          {/* <TableCell>{propose.height}</TableCell> */}
          {/* <TableCell>{propose.power}</TableCell> */}
          {/* <TableCell>{propose.input}</TableCell> */}
          {/* <TableCell>{propose.output}</TableCell> */}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default ProposeTable;