//page.tsx
import { Card, Title, Text } from '@tremor/react';
import { SelectedProductProvider } from './contexts/selectedProductContext';
import SelectFormClient from './components/selectForm.client'; // Importe o componente SelectFormClient
import SelectedProducts from './components/selectedProducts';
import SelectClient from './components/selectClient';
import SelectedClients from './components/selectedClients';
import SendProducts from './components/sendProducts'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SelectedClientProvider } from './contexts/selectedClientContext';

const IndexPage: React.FC = () => {
  console.log('SelectedProductProvider', SelectedProductProvider);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-screen-2xl">
      <Title>Gerenciador de Proposta</Title>
      <Text>Use esta ferramenta para criar propostas comerciais, selecionar produtos, gerenciar clientes selecionados e enviar propostas. Tudo em um único lugar.</Text>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="md:w-2/3">
          <Card className="mt-6">
            <ToastContainer />
            <SelectFormClient />
          </Card>
          <Card className="mt-6">
            <SelectedProducts selectedProducts={[]} inputsAndOutputs={[]} />
          </Card>
        </div>
        <div className="md:w-1/3 mt-6">
          <SelectedClientProvider>
            <SelectClient />
            <Card className="mt-6">
              <SelectedClients />
            </Card>
          </SelectedClientProvider>
          <Card className="mt-6">
            <SendProducts />
          </Card>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;