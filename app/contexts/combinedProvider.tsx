// CombinedProvider.tsx
import React, { ReactNode } from 'react';
import { SelectedProductProvider } from './selectedProductContext';
import { SelectedClientProvider } from './selectedClientContext';
import { ObservationProvider } from './observationContext';
import { PaymentInfoProvider } from './paymentInfoContext';
import { ExpeditionProvider } from './expeditionContext';

type CombinedProviderProps = {
  children: ReactNode;
};

const CombinedProvider: React.FC<CombinedProviderProps> = ({ children }) => {
  return (
    <ObservationProvider>
      <SelectedProductProvider>
        <SelectedClientProvider>
          <PaymentInfoProvider>
            <ExpeditionProvider>
              {children}
            </ExpeditionProvider>
          </PaymentInfoProvider>
        </SelectedClientProvider>
      </SelectedProductProvider>
    </ObservationProvider>
  );
};

export default CombinedProvider;