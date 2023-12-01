// components/Layout.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography, Grid, Box, Divider } from '@mui/material';
import { colors } from '@react-spring/shared';

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
  const [currentPropose, setCurrentPropose] = useState(propose);

  useEffect(() => {
    setCurrentPropose(propose);
  }, [propose]);

  const Container = styled('div')({
    width: '260mm',
    height: '297mm' ,
    padding: '0 10mm', // Reduza o padding horizontal
    margin: '0 auto',
    background: 'white',
    boxShadow: '0 0 0.1cm rgba(0,0,0,0.)',
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

  const DescriptionTypography = styled(Typography)({
    marginBottom: '10px',
    display: 'flex',
    gap: '2rem',
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
    <Container id={`layout_${currentPropose.id}`}>
      <ContentContainer>

        <DateTypography>
          Sinop, {new Date(propose.createdAt).toLocaleDateString(
            'pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }
          )}.
        </DateTypography>

        <Grid container spacing={2} mt={5}>
          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
                <TitleTypography style={{ color: 'red' }} >RO</TitleTypography>
              </Grid>
              <Grid item xs={8}>
                <TitleTypography>PROPOSTA DE FORNECIMENTO DE EQUIPAMENTOS</TitleTypography>
              </Grid>
              <Grid item xs={1}>
                <TitleTypography style={{ color: 'red' }}>{`OF - ${propose.id}`}</TitleTypography>
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
                  <DescriptionTypography>
                    <TitleTypography>Modelo....................:</TitleTypography>
                    <TextTypography>{product.model ? product.model : 'Modelo não definido'}</TextTypography>
                  </DescriptionTypography>
                  <DescriptionTypography>
                    <TitleTypography>Capacidade.............:</TitleTypography>
                    <TextTypography>{product.capacity ? product.capacity : 'Capacidade não definida'}</TextTypography>
                  </DescriptionTypography>
                  <DescriptionTypography>
                    <TitleTypography>Produto...................:</TitleTypography>
                    <TextTypography>{product.product ? product.product : 'Produto não definido'}</TextTypography>
                  </DescriptionTypography>
                </Grid>
              </Grid>
              <Divider style={{borderTop: '0.5px dotted'}}/>

            </Grid>
          ))}
        </Grid> 
      </ContentContainer>
    </Container>
  );
};

export default Layout;