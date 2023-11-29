// pdfButton.tsx:
'use client'
import React, { useRef } from 'react';
import { Propose } from '../propose/page';

interface GeneratePdfButtonProps {
  propose: Propose;
}

const GeneratePdfButton: React.FC<GeneratePdfButtonProps> = ({ propose }) => {
  const svgRef = useRef(null);

  const handleClick = () => {
    // Verifique se os dados da proposta estão definidos
    if (!propose) {
      console.error('Dados da proposta não definidos');
      return;
    }

    // Verifique se a propriedade products está definida
    if (!propose.products) {
      console.error('Propriedade products não definida');
      return;
    }

    const proposeData = encodeURIComponent(JSON.stringify(propose));
    window.open(`/pdf-layout?propose=${proposeData}`, '_blank');
  };
  return (
    <div onMouseEnter={() => svgRef.current?.classList.add('animate-bounce')} onMouseLeave={() => svgRef.current?.classList.remove('animate-bounce')}>
      <svg onClick={handleClick} ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-500 cursor-pointer">
         <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 2v4a2 2 0 0 0 2 2h4m-2 2v8m-6-4H6"></path>
      </svg>
    </div>
  );
};

export default GeneratePdfButton;