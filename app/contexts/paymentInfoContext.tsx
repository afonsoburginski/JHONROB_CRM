// paymentInfoContext.tsx
import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export type PaymentInfoType = {
  company?: string;
  paymentMethod?: string;
  installment?: string;
  salesPeople?: string;
  bank?: string;
  bankAgency?: string;
  accountNumber?: string
};

type PaymentInfoContextType = {
  paymentInfo: PaymentInfoType;
  setPaymentInfo: (info: Partial<PaymentInfoType>) => void;
  isSaved: boolean;
  savePaymentInfo: () => void;
};

const defaultPaymentInfo: PaymentInfoType = {
  company: '',
  paymentMethod: '',
  installment: '',
  salesPeople: '',
  bank: '',
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
  const [paymentInfo, setPaymentInfoState] = useState<PaymentInfoType>(defaultPaymentInfo);
  const [isSaved, setIsSaved] = useState(false);

  const setPaymentInfo = useCallback((info: Partial<PaymentInfoType>) => {
    setPaymentInfoState(prevState => ({ ...prevState, ...info }));
  }, []);

  const savePaymentInfo = () => {
    setIsSaved(true);
  };

  return (
    <PaymentInfoContext.Provider value={{ paymentInfo, setPaymentInfo, isSaved, savePaymentInfo }}>
      {children}
    </PaymentInfoContext.Provider>
  );
};