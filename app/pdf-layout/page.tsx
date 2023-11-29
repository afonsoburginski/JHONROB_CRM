// pdf-layout/page.tsx
import React from 'react';
import { PdfLayout } from '../components/pdfLayout';

const layoutPage: React.FC = () => {
  // Aqui você pode obter os dados da proposta de alguma forma (por exemplo, do estado global da aplicação)
  const propose = {};

  return (
    <div>
      <PdfLayout propose={propose} />
    </div>
  );
};

export default layoutPage;