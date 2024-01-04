import { createContext, useContext, useState, ReactNode } from 'react';

export type PaymentInfoType = {
  [x: string]: any;
  companies: string | null;
  paymentMethods: string | null;
  installments: string | null;
  salesPeople: string | null;
  banks: string | null;
  bankAgency: string | null;
  accountNumber: string | null;
};

const PaymentInfoContext = createContext<{ paymentInfo: PaymentInfoType | null, setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentInfoType | null>> } | undefined>(undefined);

interface PaymentInfoProviderProps {
  children: ReactNode;
}

export const PaymentInfoProvider: React.FC<PaymentInfoProviderProps> = ({ children }) => {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfoType | null>(null);

  return (
    <PaymentInfoContext.Provider value={{ paymentInfo, setPaymentInfo }}>
      {children}
    </PaymentInfoContext.Provider>
  );
};

export const usePaymentInfo = () => useContext(PaymentInfoContext);