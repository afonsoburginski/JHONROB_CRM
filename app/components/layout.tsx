// Layout.tsx
import React, { forwardRef, Ref } from 'react';
import { styled } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography, Grid, Box, Divider } from '@mui/material';

interface LayoutProps {
  propose: Propose;
}

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%', // Garanta que o container ocupe a largura total
  height: '100%',
  padding: '0 10mm',
  margin: '0 auto',
  background: 'white',
  boxShadow: '0 0 0.1cm rgba(0,0,0,0.)',
});

const ContentContainer = styled('div')({
  width: '100%', // Garanta que o container ocupe a largura total
  margin: '0 auto',
});

const ProductItem = styled(Grid)({
  breakInside: 'avoid',
  pageBreakInside: 'avoid',
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

const ObservationTypography = styled(Typography)({
  marginTop: '20px',
  marginBottom: '10px',
  gap: '2rem',
});

const DeliveryTypography = styled(Typography)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '20px',
  marginBottom: '10px',
});

const FooterTypography = styled(Typography)({
  marginTop: '20px',
  marginBottom: '10px',
});


const Layout = forwardRef<HTMLDivElement, LayoutProps>(({ propose }, ref) => {
  if (!propose) {
    return null;
  }
  
  return (
    <Container id={`layout_${propose.id}`} ref={ref}>
      <ContentContainer>

        <DateTypography mt={5} mb={5}>
          Sinop, {new Date(propose.createdAt).toLocaleDateString(
            'pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }
          )}.
        </DateTypography>

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={10}>
            <HeaderTypography>
              <TitleTypography>Cliente:</TitleTypography>
              <TextTypography>{propose.client.name}</TextTypography>
            </HeaderTypography>
            <HeaderTypography>
              <TitleTypography>Endereço:</TitleTypography>
              <TextTypography>{propose.client.address}</TextTypography>
            </HeaderTypography>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={5}>
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

          <Grid item xs={7}>
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
              <Grid item xs={2}>
                <TitleTypography style={{ color: 'red' }} >RO</TitleTypography>
              </Grid>
              <Grid item xs={9}>
                <TitleTypography>PROPOSTA DE FORNECIMENTO DE EQUIPAMENTOS</TitleTypography>
              </Grid>
              <Grid item xs={1}>
                <TitleTypography style={{ color: 'red' }}>{`OF - ${propose.id}`}</TitleTypography>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item xs={12}>
            <Grid container justifyContent="space-between">
              <Grid item xs={2}>
                <TitleTypography>QUANT.</TitleTypography>
              </Grid>
              <Grid item xs={9}>
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
                <Grid item xs={10}>
                  <TitleTypography>ELEVADOR DE CAÇAMBA</TitleTypography>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={2} mt={1}>
                  {/* <TitleTypography>{product.product ? product.product : 'Produto não definido'}</TitleTypography> */}
                </Grid>
                <Grid item xs={7} mt={1}>
                  <DescriptionTypography>
                    <TitleTypography>Modelo............................................:</TitleTypography>
                    <TextTypography>{product.model ? product.model : 'Modelo não definido'}</TextTypography>
                  </DescriptionTypography>
                  <DescriptionTypography>
                    <TitleTypography>Capacidade.....................................:</TitleTypography>
                    <TextTypography>{product.capacity ? product.capacity : 'Capacidade não definida'}</TextTypography>
                  </DescriptionTypography>
                  <DescriptionTypography>
                    <TitleTypography>Produto...........................................:</TitleTypography>
                    <TextTypography>{product.product ? product.product : 'Produto não definido'}</TextTypography>
                  </DescriptionTypography>

                  <DescriptionTypography>
                    <TitleTypography>Peso específico do produto..........:</TitleTypography>
                    <TextTypography>750 kg/m³</TextTypography>
                  </DescriptionTypography>
                  <DescriptionTypography>
                    <TitleTypography>Umidade.........................................:</TitleTypography>
                    <TextTypography>18%</TextTypography>
                  </DescriptionTypography>
                  <DescriptionTypography>
                    <TitleTypography>Impureza entrada...........................:</TitleTypography>
                    <TextTypography>4%</TextTypography>
                  </DescriptionTypography>
                  <DescriptionTypography>
                    <TitleTypography>Impureza saída...............................:</TitleTypography>
                    <TextTypography>1%</TextTypography>
                  </DescriptionTypography>


                  <Divider style={{borderTop: '0.5px dotted'}}/>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>

        <Grid container mt={4}>

          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <TitleTypography>OBSERVAÇÕES GERAIS:</TitleTypography>
              <ObservationTypography>
                Não estão inclusos neste orçamento: vedações de telhados, fechamento de poços externos, túneis, 		
                construções civis, instalações elétricas, termometria, sensores em transportadores, inversores de 		
                frequência, taxas e tarifas bancárias decorrentes de financiamento.
              </ObservationTypography>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>

          <Grid container>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
              <TitleTypography>OBSERVAÇÕES:</TitleTypography>
              <ObservationTypography>
                {propose.observation.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    <p>{line}</p>
                    {index % 4 === 3 && <br />}
                  </React.Fragment>
                ))}
              </ObservationTypography>
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>

          <Grid container mt={4}>
            <Grid item xs={2}>
            </Grid>

            <Grid item xs={8}>
              <Grid container direction="column" alignItems="flex-start">
                <Grid item>
                  <TitleTypography>VÁLIDO COMO PEDIDO FINAL</TitleTypography>
                </Grid>


                <Grid container direction="row" alignItems="flex-start" justifyContent="space-between">
                  <Grid item>
                    <TitleTypography>PRAZO ENTREGA FÁBRICA:</TitleTypography>
                  </Grid>
                  <Grid item mt={1}>
                    <Grid container direction="column" alignItems="flex-end">
                      <Grid item>
                        <TitleTypography>Secador:</TitleTypography>
                        <TextTypography>10/11/2023</TextTypography>
                      </Grid>
                      <Grid item>
                        <TitleTypography>Pré-Limpeza:</TitleTypography>
                        <TextTypography>10/11/2023</TextTypography>
                      </Grid>
                      <Grid item>
                        <TitleTypography>Silos:</TitleTypography>
                        <TextTypography>08/12/2023</TextTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container direction="row" alignItems="flex-start" justifyContent="space-between">
                  <Grid item>
                    <TitleTypography>PRAZO ENTREGA MONTADO:</TitleTypography>
                  </Grid>
                  <Grid item mt={1}>
                    <Grid container direction="column" alignItems="flex-end">
                      <Grid item>
                        <TitleTypography>Secador:</TitleTypography>
                        <TextTypography>Até 20/01/2024</TextTypography>
                      </Grid>
                      <Grid item>
                        <TitleTypography>Pré-Limpeza:</TitleTypography>
                        <TextTypography>Até 20/01/2024</TextTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container mt={2} mb={4}>
                  <DeliveryTypography>
                    <SubtitleTypography>*Não utilizar esta proposta para fins de financiamento bancário.</SubtitleTypography>
                    <SubtitleTypography>*Equipamentos produzidos sob encomenda.</SubtitleTypography>
                  </DeliveryTypography>
                </Grid>

                <Grid container direction="row" alignItems="flex-start" justifyContent="space-between">
                <Grid item>
                  <Typography variant="h6">DADOS BANCÁRIOS:</Typography>
                </Grid>
                <Grid item mt={1}>
                  <Grid container direction="column" alignItems="flex-end">
                    <Grid item>
                      <Typography variant="h6">{paymentInfo.banks}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">Agência:</Typography>
                      <Typography variant="body1">{paymentInfo.bankAgency}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">Conta:</Typography>
                      <Typography variant="body1">{paymentInfo.accountNumber}</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                  <Grid item mt={2}>
                    <Grid container direction="column">
                      <Grid item>
                        <TitleTypography>JHONROB SILOS E SECADORES LTDA</TitleTypography>
                      </Grid>
                      <Grid item>
                        <TitleTypography>CNPJ:</TitleTypography>
                        <TextTypography>{propose.client.cpfCnpj}</TextTypography>
                      </Grid>
                      <Grid item>
                        <TitleTypography>I.E.:</TitleTypography>
                        <TextTypography>{propose.client.ie}</TextTypography>
                      </Grid>
                      <Grid item>
                        <SubtitleTypography>{propose.client.address} <br /> {propose.client.city}, {propose.client.state}</SubtitleTypography>
                      </Grid>
                    </Grid>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2}>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid container direction="row" justifyContent="space-between" mt={4} mb={4}>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Grid container direction="row" justifyContent="space-between">
                  <Grid item xs={5}>
                    <FooterTypography>
                      <TitleTypography>_________________________</TitleTypography>
                      <Grid container direction="column" alignItems="flex-start">
                        <TitleTypography>Thiago Azevedo</TitleTypography>
                        <TitleTypography>Jhonrob Silos e Secadores</TitleTypography>
                        <TitleTypography>Fabricante</TitleTypography>
                      </Grid>
                    </FooterTypography>
                  </Grid>
                  <Grid item xs={5}>
                    <FooterTypography>
                      <TitleTypography>_________________________</TitleTypography>
                      <Grid container direction="column" alignItems="flex-start">
                        <TitleTypography>{propose.client.name}</TitleTypography>
                        <TitleTypography>Cliente</TitleTypography>
                      </Grid>
                    </FooterTypography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Grid>

        </Grid>

      </ContentContainer>
    </Container>
  );
});

Layout.displayName = 'Layout';

export default Layout;