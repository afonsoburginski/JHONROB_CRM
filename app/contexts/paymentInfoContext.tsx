// paymentInfoContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

export type PaymentInfoType = {
  companies?: string;
  paymentMethods?: string;
  installments?: string;
  salesPeople?: string;
  banks?: string;
  bankAgency?: string;
  accountNumber?: string;
};

type PaymentInfoContextType = {
  paymentInfo: PaymentInfoType;
  setPaymentInfo: (info: PaymentInfoType) => void;
  isSaved: boolean;
  savePaymentInfo: () => void;
};

const defaultPaymentInfo: PaymentInfoType = {
  companies: '',
  paymentMethods: '',
  installments: '',
  salesPeople: '',
  banks: '',
  bankAgency: '',
  accountNumber: '',
};

const PaymentInfoContext = createContext<PaymentInfoContextType>({ paymentInfo: defaultPaymentInfo, setPaymentInfo: () => {}, isSaved: false, savePaymentInfo: () => {} });

export const usePaymentInfo = () => {
  const context = useContext(PaymentInfoContext);
  if (!context) {
    throw new Error('usePaymentInfo must be used within a PaymentInfoProvider');
  }
  return context;
};

export const PaymentInfoProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfoType>(defaultPaymentInfo);
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