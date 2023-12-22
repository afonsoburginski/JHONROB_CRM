// proposeButton.tsx
'use client'
import React, { useState, useEffect, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ReactToPrint from 'react-to-print';
import Layout from './layout';

interface ProposeButtonProps {
  propose: Propose;
}

const ProposeButton: React.FC<ProposeButtonProps> = ({ propose }) => {
  const componentRef = useRef(null);

  useEffect(() => {
    document.title = `Proposta ${propose.id}`;
  }, [propose]);

  return (
    <div>
      <ReactToPrint
        trigger={() => <IconButton color="primary"><SaveAltIcon /></IconButton>}
        content={() => componentRef.current}
        documentTitle={`Proposta ${propose.id}`}
      />
      <div style={{ position: 'absolute', display: 'none' }}>
        <Layout ref={componentRef} propose={propose} />
      </div>
    </div>
  );
};

export default ProposeButton;