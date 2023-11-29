// components/pdfLayout.tsx
'use client'
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 794px; // 210mm
  height: 1122px; // 297mm
  padding: 20px;
  margin: auto;
  background: white;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
`;

const Date = styled.p`
  text-align: right;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 8px;
`;

const LeftAligned = styled.div`
  text-align: left;
  flex: 1;
`;

const CenterAligned = styled.div`
  text-align: center;
  flex: 1;
`;


export const PdfLayout: React.FC = () => {
  return (
    <Container>
      <Date>Sinop, 28 de Agosto de 2023.</Date>
      <Table>
        <TableRow>
          <TableCell>Cliente:</TableCell>
          <TableCell>Ari Valdemar Velke</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Endereço:</TableCell>
          <TableCell colSpan={3}>Rod. MT 235, KM 50, S/Nº, GLEBA: Sucuruina, Faz. São Pedro.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Município:</TableCell>
          <TableCell>Diamantino</TableCell>
          <TableCell>UF:</TableCell>
          <TableCell>MT</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>CPF/CNPJ:</TableCell>
          <TableCell>144.920.590-91</TableCell>
          <TableCell>I.E.:</TableCell>
          <TableCell>13.315.579-0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Contato:</TableCell>
          <TableCell>Giovana Velke / Tércio</TableCell>
          <TableCell>Telefone:</TableCell>
          <TableCell>(65)9.8402-0588</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>E-mail:</TableCell>
          <TableCell>ari.velke@hotmail.com / valedoriodosangue@gmail.com</TableCell>
        </TableRow>
      </Table>
      <Table>
        <TableRow>
          <TableCell style={{ width: '10%' }}>
            <LeftAligned>
              OF-11915
            </LeftAligned>
          </TableCell>
          <TableCell style={{ width: '65%' }}>
            <CenterAligned>
              PROPOSTA DE FORNECIMENTO DE EQUIPAMENTOS
            </CenterAligned>
          </TableCell>
        </TableRow>
      </Table>
      <Table>
        <TableRow>
          <TableCell>QUANT.</TableCell>
          <TableCell>DESCRIÇÃO</TableCell>
          <TableCell>VALOR</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>01</TableCell>
          <TableCell>MÁQUINA DE PRE-LIMPEZA PL-1</TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Modelo</TableCell>
          <TableCell>PLJ-220</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Capacidade</TableCell>
          <TableCell>220 t/h</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Produto</TableCell>
          <TableCell>Soja/Milho</TableCell>
        </TableRow>
      </Table>
      {/* Continue adicionando mais elementos conforme necessário */}
    </Container>
  );
};