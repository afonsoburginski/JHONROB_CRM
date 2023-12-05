// page.tsx
import React from 'react';
import { Card, Title, Text } from '@tremor/react';
import SelectFormClient from './components/selectForm.client';
import SelectedProducts from './components/selectedProducts';
import SelectedClients from './components/selectedClients';
import ObserveForm from './components/observeForm';
import SaveButton from './components/saveButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SelectedProductProvider } from './contexts/selectedProductContext';
import { SelectedClientProvider } from './contexts/selectedClientContext';
import { ObservationProvider } from './contexts/observationContext';

const IndexPage: React.FC = () => {
  return (
    <ObservationProvider>
      <SelectedProductProvider>
        <SelectedClientProvider>
          <main className="p-4 md:p-10 mx-auto max-w-screen-2xl">
            <Title>Gerenciador de Proposta</Title>
            <Text>Use esta ferramenta para criar propostas comerciais, selecionar produtos, gerenciar clientes selecionados e enviar propostas.</Text>
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
              <div className="md:w-1/3">
                <Card className="mt-6">
                  <SelectedClients />
                </Card>
                <Card className="mt-6">
                  <ObserveForm />
                  <div className="mt-4 flex justify-end">
                    <SaveButton />
                  </div>
                </Card>
              </div>
            </div>
          </main>
        </SelectedClientProvider>
      </SelectedProductProvider>
    </ObservationProvider>
  );
};

export default IndexPage;