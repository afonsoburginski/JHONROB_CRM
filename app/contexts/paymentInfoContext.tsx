import { createContext, useContext, useState, ReactNode } from 'react';

export type PaymentInfoType = {
  paymentMethod: string;
  salesPerson: string;
  installment: string;
  bank: string;
  bankAgency: string;
  accountNumber: string;
  company: string;
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