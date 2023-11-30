// propsoeButton.tsx:
'use client'
import React, { useRef } from 'react';
import { Propose } from '../propose/page';
import Layout from './layout';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

interface GenerateProposeButtonProps {
  propose: Propose;
}

const GenerateProposeButton: React.FC<GenerateProposeButtonProps> = ({ propose }) => {
  const svgRef = useRef(null);

  const generatePdf = () => {
    const input = document.getElementById('layout');

    html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("proposta.pdf");
    });
  };

  const handleClick = () => {
    console.log('Button clicked');
    generatePdf();

    // Verifique se os dados da proposta estão definidos
    if (!propose) {
      console.error('Dados da proposta não definidos');
      return;
    }

    // Imprima os dados da proposta no console
    console.log('Dados da proposta:', propose);

    // Verifique se os produtos estão definidos
    if (!propose.productSelections) {
      console.error('Produtos não definidos');
      return;
    }

    // Imprima cada produto no console
    propose.productSelections.forEach((product, index) => {
      console.log(`Produto ${index + 1}:`, product);
    });
  };

  return (
    <>
      <Layout propose={propose} />
      <div onClick={handleClick} onMouseEnter={() => svgRef.current?.classList.add('animate-bounce')} onMouseLeave={() => svgRef.current?.classList.remove('animate-bounce')}>
        <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-500 cursor-pointer">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 2v4a2 2 0 0 0 2 2h4m-2 2v8m-6-4H6"></path>
        </svg>
      </div>
    </>
  );
};

export default GenerateProposeButton;