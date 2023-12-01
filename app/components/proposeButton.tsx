// proposeButton.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Propose } from '../propose/page';
import Layout from './layout';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import IconButton from '@mui/material/IconButton';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ReactDOM from 'react-dom';
import { showToastSuccess, showToastError } from './toastfy';

interface GenerateProposeButtonProps {
  propose: Propose;
}

const layoutSizeInMm = {
  width: 210,
  height: 297
};

const GenerateProposeButton: React.FC<GenerateProposeButtonProps> = ({ propose }) => {
  const [layoutReady, setLayoutReady] = useState(false);

  const generatePdf = () => {
    const layoutElement = document.createElement('div');
    layoutElement.style.position = 'absolute';
    layoutElement.style.left = '-9999px';
    document.body.appendChild(layoutElement);
  
    ReactDOM.render(<Layout propose={propose} />, layoutElement, () => {
      html2canvas(layoutElement, { scale: 1 })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: [layoutSizeInMm.width, layoutSizeInMm.height]
        });
        const imgWidth = layoutSizeInMm.width;
        const imgHeight = canvas.height * imgWidth / canvas.width;
    
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`proposta_${propose.id}.pdf`);
    
        document.body.removeChild(layoutElement);

        showToastSuccess('PDF gerado com sucesso');
      })
      .catch((error) => {
        showToastError('Erro ao gerar o PDF');
      });
    });
  };

  const handleClick = () => {
    if (!layoutReady) {
      console.log('Layout ainda não está pronto');
      return;
    }

    console.log('Button clicked');
    generatePdf();
  };

  useEffect(() => {
    setLayoutReady(true);
  }, []);

  return (
    <IconButton color="primary" onClick={handleClick}>
      <SaveAltIcon />
    </IconButton>
  );
};

export default GenerateProposeButton;