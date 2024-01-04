import { createContext, useContext, useState } from 'react';

export type PaymentInfoType = {
  companies?: string;
  paymentMethods?: string;
  installments?: string;
  salesPeople?: string;
  banks?: string;
  bankAgency?: string;
  accountNumber?: string
  // suas definições de tipo aqui
};

type PaymentInfoContextType = {
  paymentInfo: PaymentInfoType | null;
  setPaymentInfo: (info: PaymentInfoType) => void;
  isSaved: boolean;
  savePaymentInfo: () => void;
};

const PaymentInfoContext = createContext<PaymentInfoContextType | undefined>(undefined);

export const usePaymentInfo = () => {
  const context = useContext(PaymentInfoContext);
  if (!context) {
    throw new Error('usePaymentInfo must be used within a PaymentInfoProvider');
  }
  return context;
};

export const PaymentInfoProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfoType | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  const savePaymentInfo = () => {
    setIsSaved(true);
  };

  return (
    <PaymentInfoContext.Provider value={{ paymentInfo, setPaymentInfo, isSaved, savePaymentInfo }}>
      {children}
    </PaymentInfoContext.Provider>
  );
};