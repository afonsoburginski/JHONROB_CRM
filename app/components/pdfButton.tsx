import React, { useRef } from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Propose } from '../propose/page';
import { getPdfLayout } from './pdfLayout'; // Importe a função getPdfLayout

pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface GeneratePdfButtonProps {
  propose: Propose;
}

const GeneratePdfButton: React.FC<GeneratePdfButtonProps> = ({ propose }) => {
  const svgRef = useRef(null);

  const generatePDF = () => {
    const docDefinition = {
      content: getPdfLayout(propose),
    };
  
    pdfMake.createPdf(docDefinition).download("proposta.pdf");
  };
  
  return (
   <div onMouseEnter={() => svgRef.current?.classList.add('animate-bounce')} onMouseLeave={() => svgRef.current?.classList.remove('animate-bounce')}>
      <svg ref={svgRef} onClick={generatePDF} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-500 cursor-pointer">
         <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 2v4a2 2 0 0 0 2 2h4m-2 2v8m-6-4H6"></path>
      </svg>
   </div>
  );
};

export default GeneratePdfButton;

// { text: `ID: ${propose.id}`, fontSize: 14 },
// { text: `Título: ${propose.title}`, fontSize: 14 },
// { text: `Conteúdo: ${propose.content}`, fontSize: 14 },
// { text: `Grupos: ${propose.groups}`, fontSize: 14 },
// { text: `Equipamento: ${propose.product}`, fontSize: 14 },
// { text: `Produto: ${propose.type}`, fontSize: 14 },
// { text: `Modelo: ${propose.model}`, fontSize: 14 },
// { text: `Capacidade: ${propose.capacity}`, fontSize: 14 },
// { text: `Altura: ${propose.height}`, fontSize: 14 },
// { text: `Potência: ${propose.power}`, fontSize: 14 },
// { text: `Entrada: ${propose.input}`, fontSize: 14 },
// { text: `Saída: ${propose.output}`, fontSize: 14 },
// { text: `Observação: ${propose.observation}`, fontSize: 14 },