// CombinedProvider.tsx
import React, { ReactNode } from 'react';
import { SelectedProductProvider } from './selectedProductContext';
import { SelectedClientProvider } from './selectedClientContext';
import { ObservationProvider } from './observationContext';
import { PaymentInfoProvider } from './paymentInfoContext';

type CombinedProviderProps = {
  children: ReactNode;
};

const CombinedProvider: React.FC<CombinedProviderProps> = ({ children }) => {
  return (
    <ObservationProvider>
      <SelectedProductProvider>
        <SelectedClientProvider>
          <PaymentInfoProvider>
            {children}
          </PaymentInfoProvider>
        </SelectedClientProvider>
      </SelectedProductProvider>
    </ObservationProvider>
  );
};

export default CombinedProvider;