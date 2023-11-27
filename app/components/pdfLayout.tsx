import React from 'react';
import { Propose } from '../propose/page';

interface PdfLayoutProps {
  propose: Propose;
}

// pdfLayout.tsx
export const getPdfLayout = (propose: Propose) => {
  return (
    [
      { text: 'Sinop, 28 de Agosto de 2023.', alignment: 'right' },
      {
        table: {
          widths: ['*', '*', '*', '*'],
          body: [
            ['Cliente:', propose.clientName || '', '', ''],
            ['Endereço:', propose.address || '', '', ''],
            ['Município:', propose.city || '', 'UF:', propose.state || ''],
            ['CPF/CNPJ:', propose.cpfCnpj || '', 'I.E.:', propose.ie || ''],
            ['Contato:', propose.contact || '', 'Telefone:', propose.phone || ''],
            ['E-mail:', propose.email || '', '', ''],
          ]
        },
        layout: 'noBorders'
      },
      { text: ' ', fontSize: 14 }, // Adiciona um espaço
      { text: 'R0 PROPOSTA DE FORNECIMENTO DE EQUIPAMENTOS OF-11915', alignment: 'center' },
      { text: ' ', fontSize: 14 }, // Adiciona um espaço
      {
        table: {
          widths: ['auto', '*', 'auto'],
          body: [
            ['QUANT.', 'DESCRIÇÃO', 'VALOR', ''], // Adicione uma célula vazia
          ]
        }
      },
      { text: '01 ELEVADOR DE CAÇAMBAS', fontSize: 14 },
      { text: ' ', fontSize: 14 }, // Adiciona um espaço
      {
        table: {
          widths: ['auto', 'auto', '*'],
          body: [
            ['EL-1', 'CARGA PL-1', '', ''], // Adicione uma célula vazia
          ]
        },
        layout: 'noBorders'
      },
      { text: ' ', fontSize: 14 }, // Adiciona um espaço
      {
        table: {
          body: [
            ['Modelo', propose.product || ''],
            ['Altura', `${propose.height || ''} metros`],
            ['Capacidade', `${propose.capacity || ''} (T/H)`],
            ['Produto', propose.type || ''],
            ['Peso específico do produto', '750 kg/m³'],
            ['Velocidade', '3,40 m/s'],
            ['Acionamento', `Motoredutor ${propose.power || ''} com freio contra recuo`],
            ['Lado do Acionamento', 'Direito'],
            ['Correia', '12" x 4L com revestimento 1/16" x 1/16"'],
            ['Caçambas', 'Plástica 280mm convencional'],
            ['Distância entre caçambas', '153mm 167mm'],
            ['Tambor Superior', 'Emborrachado Ø 642mm'],
            ['Corpo', 'Construído em chapa galvanizada # 14 (1,95mm)'],
            ['Pé e Cabeça', 'Construído em chapa galvanizada # 12 (2,70mm)'],
          ]
        }
      },
      { text: ' ', fontSize: 14 }, // Adiciona um espaço
      { text: 'Acompanham este elevador:', fontSize: 14 },
      {
        ul: [
          '1 Saída 240mm',
          '1 Porta de inspeção localizada na cabeça do elevador',
          '1 Esticador no pé do elevador',
          '2 Porta de inspeção no corpo do elevador',
          'Cabo de aço, para uso de cinto trava queda.',
          'Plataforma padrão para inspeção e manutenção com piso anti-derrapante',
          'Guarda corpo a partir de 2 metros de altura acima do nível do poço',
          'Moegas baixa / alta de entrada no pé do elevador',
          'Plataformas de descanso conforme normas de segurança',
        ]
      },
    ]
  );
};