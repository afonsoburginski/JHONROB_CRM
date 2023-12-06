// proposeButton.tsx
'use client'
import React, { useState, useEffect, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Propose } from '../propose/page';
import ReactToPrint from 'react-to-print';
import Layout from './layout';

interface GenerateProposeButtonProps {
  propose: Propose;
}

const GenerateProposeButton: React.FC<GenerateProposeButtonProps> = ({ propose }) => {
  const componentRef = useRef(null);

  useEffect(() => {
    document.title = `Proposta ${propose.id}`;
  }, [propose]);

  return (
    <div>
      <ReactToPrint
        trigger={() => <IconButton color="primary"><SaveAltIcon /></IconButton>}
        content={() => componentRef.current}
        documentTitle={`Proposta ${propose.id}`} // Define o título do documento
      />
      <div style={{ position: 'absolute', visibility: 'hidden', height: 0 }}>
        <Layout ref={componentRef} propose={propose} />
      </div>
    </div>
  );
};

export default GenerateProposeButton;