// page.tsx
'use client'
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';
import { Card, Title, Text, Button } from '@tremor/react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { SelectedProductProvider } from '../../contexts/selectedProductContext';
import { SelectedClientProvider } from '../../contexts/selectedClientContext';
import { ObservationProvider } from '../../contexts/observationContext';

import SelectFormClient from '../../components/selectForm';
import SelectedProducts from '../../components/selectedProducts';
import SelectedClients from '../../components/selectedClients';
import PaymentForm from '../../components/paymentForm';
import ObserveForm from '../../components/observeForm';
import SaveButton from '../../components/saveButton';

const GlobalStyle = createGlobalStyle`
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  opacity: 1;
  transition: opacity 500ms;
}

.fade-exit {
  opacity: 1;
}

.fade-exit-active {
  opacity: 0;
  transition: opacity 500ms;
}
`;

const ManagerPage: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <ObservationProvider>
      <SelectedProductProvider>
        <SelectedClientProvider>
          <main className="p-4 md:p-10 mx-auto max-w-screen-2xl">
            <GlobalStyle />
            <Title>Gerenciador de Proposta</Title>
            <Text>Use esta ferramenta para criar propostas comerciais, selecionar produtos, gerenciar clientes selecionados e enviar propostas.</Text>
            <div className="w-full">
              <SwitchTransition>
                <CSSTransition key={step} timeout={150} classNames="fade">
                  <>
                    {step === 1 && (
                      <div>
                        <Card className="mt-6">
                          <ToastContainer />
                          <SelectFormClient />
                        </Card>
                        <Card className="mt-6">
                          <SelectedProducts selectedProducts={[]} inputsAndOutputs={[]} />
                        </Card>
                      </div>
                    )}
                    {step === 2 && (
                      <div>
                        <Card className="mt-6">
                          <SelectedClients />
                        </Card>
                        <Card className="mt-6">
                          <PaymentForm />
                        </Card>
                      </div>
                    )}
                    {step === 3 && (
                      <Card className="mt-6">
                        <ObserveForm />
                        <div className="mt-4 flex justify-end">
                          <SaveButton />
                        </div>
                      </Card>
                    )}
                  </>
                </CSSTransition>
              </SwitchTransition>
            </div>
            <div className="flex mt-5">
              {step > 1 && <Button variant='secondary' onClick={prevStep}>Passo Anterior</Button>}
              {step < 3 && <Button variant='secondary' className="ml-auto" onClick={nextStep}>Próximo Passo</Button>}
            </div>
          </main>
        </SelectedClientProvider>
      </SelectedProductProvider>
    </ObservationProvider>
  );
};

export default ManagerPage;