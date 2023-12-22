// page.tsx
'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';
import { Card, Title, Button } from '@tremor/react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import CombinedProvider from '../../contexts/combinedProvider';

import Timeline from 'app/components/timeline';
import SelectFormClient from '../../components/selectForm';
import SelectedProducts from '../../components/selectedProducts';
import SelectedClients from '../../components/selectedClients';
import PaymentForm from '../../components/paymentForm';
import Deadline from 'app/components/deadline';
import ObserveForm from '../../components/observeForm';
import SaveButton from '../../components/saveButton';

const GlobalStyle = createGlobalStyle`
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 150ms;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 150ms;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 5px;
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
    <CombinedProvider> {/* Use o CombinedProvider aqui */}
      <main className="p-4 md:p-10 mx-auto max-w-screen-2xl">
        <GlobalStyle />
        <Title>Gerenciador de Proposta</Title>
        <Timeline step={step} />
        <ToastContainer />
        <div className="w-full">
          <SwitchTransition>
            <CSSTransition key={step} timeout={150} classNames="fade">
              <>
                {step === 1 && (
                  <div>
                    <Card className="mt-6">
                      <SelectFormClient />
                    </Card>
                    <Card className="mt-6">
                      <SelectedProducts />
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
                  <div>
                    <Card className="mt-6">
                      <Deadline />
                    </Card>
                    <Card className="mt-6">
                      <ObserveForm />
                    </Card>
                  </div>
                )}
              </>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="flex mt-5">
          {step > 1 && <StyledButton variant='secondary' onClick={prevStep}>Voltar</StyledButton>}
          {step < 3 && <StyledButton variant='secondary' className="ml-auto" onClick={nextStep}>Próximo</StyledButton>}
          {step === 3 && <SaveButton />}
        </div>
      </main>
    </CombinedProvider>
  );
};

export default ManagerPage;