// components/Layout.tsx
'use client'
import React from 'react';
import { styled } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography, Grid, Box } from '@mui/material';

interface Client {
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
}

interface ProductSelection {
  id: number;
  groups: string;
  product: string;
  type: string;
  model: string;
  capacity: string;
  height: string;
  power: string;
  input: string;
  output: string;
  proposeId: number;
}

interface Propose {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  observation: string;
  clientId: number;
  client: Client;
  productSelections: ProductSelection[];
}

interface LayoutProps {
  propose: Propose;
}

const Layout: React.FC<LayoutProps> = ({ propose, productSelections }) => {
  // Remova a lógica de roteamento, pois os dados da proposta agora vêm das propriedades

  console.log(typeof propose.client); // deve imprimir "string"
  console.log(Array.isArray(productSelections)); // deve imprimir "true"

  const Container = styled('div')({
    width: '210mm', // A4 width
    height: '297mm', // A4 height
    padding: '0 10mm', // Reduza o padding horizontal
    margin: '0 auto',
    background: 'white',
    boxShadow: '0 0 0.1cm rgba(0,0,0,0.)',
    justifyContent: 'center',
  });
  
  const ContentContainer = styled('div')({
    maxWidth: '100%', // Ajuste para preencher completamente
    margin: '0 auto',
  });

  const StyledTable = styled(Table)({
    width: '100%',
  });

  const StyledTableRow = styled(TableRow)({
    // adicione aqui os estilos que você deseja aplicar à linha da tabela
  });

  const DateTypography = styled(Typography)({
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: '10px', // Aumente este valor conforme necessário
  });

  const HeaderTypography = styled(Typography)({
    marginBottom: '10px',
  });

  const TitleTypography = styled(Typography)({
    fontWeight: 'bold',
    display: 'inline',
  });

  const TextTypography = styled(Typography)({
    display: 'inline',
    marginLeft: '10px',
  });

  const SubtitleTypography = styled(Typography)({
    display: 'inline',
  });

  const FirstHeaderTypography = styled(HeaderTypography)({
    marginTop: '30px', // ajuste este valor para o espaço desejado
  });


  return (
    <Container id="layout" class="css-1toqb1g">
      <ContentContainer>
        <DateTypography>Sinop, 28 de Agosto de 2023.</DateTypography>

        <Grid container spacing={2} mt={5}>
          <Grid item xs={8}>
            <HeaderTypography>
              <TitleTypography>Cliente:</TitleTypography>
              <TextTypography>{propose.client.name}</TextTypography>
            </HeaderTypography>
          </Grid>

          <Grid item xs={3}>
            <HeaderTypography>
              <TitleTypography>Endereço:</TitleTypography>
              <TextTypography>{propose.client.address}</TextTypography>
            </HeaderTypography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <HeaderTypography>
              <TitleTypography>Município:</TitleTypography>
              <TextTypography>{propose.client.city}</TextTypography>
            </HeaderTypography>
            <HeaderTypography>
              <TitleTypography>CPF/CNPJ:</TitleTypography>
              <TextTypography>{propose.client.cpfCnpj}</TextTypography>
            </HeaderTypography>
            <HeaderTypography>
              <TitleTypography>Contato:</TitleTypography>
              <TextTypography>{propose.client.phone}</TextTypography>
            </HeaderTypography>
          </Grid>

          <Grid item xs={3}>
            <HeaderTypography>
              <TitleTypography>UF:</TitleTypography>
              <TextTypography>{propose.client.state}</TextTypography>
            </HeaderTypography>
            <HeaderTypography>
              <TitleTypography>I.E.:</TitleTypography>
              <TextTypography>{propose.client.ie}</TextTypography>
            </HeaderTypography>
            <HeaderTypography>
              <TitleTypography>E-mail:</TitleTypography>
              <TextTypography>{propose.client.email}</TextTypography>
            </HeaderTypography>
          </Grid>
        </Grid>


        <Grid container mt={4}>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between">
              <Grid item xs={3}>
                <TitleTypography>RO</TitleTypography>
              </Grid>
              <Grid item xs={8}>
                <TitleTypography>PROPOSTA DE FORNECIMENTO DE EQUIPAMENTOS</TitleTypography>
              </Grid>
              <Grid item xs={1}>
                <TitleTypography>{`OF-${propose.id}`}</TitleTypography>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item xs={12}>
            <Grid container justifyContent="space-between">
              <Grid item xs={3}>
                <TitleTypography>QUANT.</TitleTypography>
              </Grid>
              <Grid item xs={8}>
                <TitleTypography>DESCRIÇÃO DA PROPOSTA</TitleTypography>
              </Grid>
              <Grid item xs={1}>
                <TitleTypography>VALOR</TitleTypography>
              </Grid>
            </Grid>
          </Grid>

          {propose.productSelections && propose.productSelections.map((product, index) => (
            <Grid key={index} item xs={12} mt={2}>
              
              <Grid container justifyContent="space-between">
                <Grid item xs={2}>
                  <TitleTypography>{product.product ? product.product : 'Produto não definido'}</TitleTypography>
                </Grid>
                <Grid item xs={9}>
                  <TitleTypography>ELEVADOR DE CAÇAMBA</TitleTypography>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={3} mt={1}>
                  {/* <TitleTypography>{product.product ? product.product : 'Produto não definido'}</TitleTypography> */}
                </Grid>
                <Grid item xs={7} mt={1}>
                  <HeaderTypography>
                    <TitleTypography>Modelo</TitleTypography>
                    <TextTypography>{product.model ? product.model : 'Modelo não definido'}</TextTypography>
                  </HeaderTypography>
                  <HeaderTypography>
                    <TitleTypography>Capacidade</TitleTypography>
                    <TextTypography>{product.capacity ? product.capacity : 'Capacidade não definida'}</TextTypography>
                  </HeaderTypography>
                  <HeaderTypography>
                    <TitleTypography>Produto:</TitleTypography>
                    <TextTypography>{product.product ? product.product : 'Produto não definido'}</TextTypography>
                  </HeaderTypography>
                </Grid>
              </Grid>

            </Grid>
          ))}
        </Grid> 
      </ContentContainer>
    </Container>
  );
};

export default Layout;