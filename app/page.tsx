//page.tsx
import { Card, Title, Text } from '@tremor/react';
import SelectedProducts from './components/selectedProducts';
import { SelectedProductProvider } from './contexts/selectedProductContext';
import SelectFormClient from './components/selectForm.client'; // Importe o componente SelectFormClient

const IndexPage: React.FC = () => {
  console.log('SelectedProductProvider', SelectedProductProvider);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Gerenciador de Proposta</Title>
      <Text>Gerenciador de Proposta.</Text>
      <Card className="mt-6">
        <SelectFormClient />
      </Card>
      <Card className="mt-6">
        <SelectedProducts selectedProducts={[]} inputsAndOutputs={[]} />
      </Card>
    </main>
  );
};

export default IndexPage;
