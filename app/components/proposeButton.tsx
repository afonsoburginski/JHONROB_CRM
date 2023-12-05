// proposeButton.tsx
import React from 'react';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Propose } from '../propose/page';
import { renderToString } from 'react-dom/server';
import Layout from './layout';

interface GenerateProposeButtonProps {
  propose: Propose;
}

const GenerateProposeButton: React.FC<GenerateProposeButtonProps> = ({ propose }) => {
  const generatePdf = async () => {
    const response = await axios.post('/api/pdf', propose);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `proposta_${propose.id}.pdf`);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <IconButton color="primary" onClick={generatePdf}>
      <SaveAltIcon />
    </IconButton>
  );
};

export default GenerateProposeButton;