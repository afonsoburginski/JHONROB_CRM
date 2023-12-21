export type Power = {
  id: string;
  title: string;
  recommended: boolean;
};

export type Height = {
  id: string;
  title: string;
  powers: Power[];
  recommended: boolean;
};

export type Capacity = {
  id: string;
  title: string;
  heights: Height[];
};

export type Model = {
  id: string;
  title: string;
  capacities: Capacity[];
};

export type Type = {
  id: string;
  title: string;
};

export type Product = {
  [x: string]: number;
  id: string;
  title: string;
  models: Model[];
  types: Type[];
};

export type Group = {
  id: string;
  title: string;
  products: Product[];
  inputOutput: string[];
};

export interface ProductTableProps {
  groups: Group[] | undefined;
}

export interface InputOutput {
  id: string;
  title: string;
  type: string;
  input: string;
  output: string;
}

export interface Propose {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  observation: string | null;
  groups: string;
  product: string;
  type: string;
  model: string;
  capacity: string;
  height: string;
  power: string;
  input: string;
  output: string;
  clientId: number | null;
}

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cpfCnpj: string;
  ie: string;
  proposes: Propose[];
}

export interface SelectedClientContextData {
  selectedClient: Client | null;
  setSelectedClient: (client: Client | null) => void;
  resetSelectedClient: () => void;
}

export interface Bank {
  title: string;
  agency: string;
  account: string;
}

export interface Data {
  salesPeople: any[];
  companies: any[];
  paymentMethods: any[];
  banks: Bank[];
  installments: any[];
}

export interface PaymentInfoContextData {
  paymentMethod: string;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
  salesPerson: string;
  setSalesPerson: React.Dispatch<React.SetStateAction<string>>;
  installment: string;
  setInstallment: React.Dispatch<React.SetStateAction<string>>;
  bank: string;
  setBank: React.Dispatch<React.SetStateAction<string>>;
  bankAgency: string;
  setBankAgency: React.Dispatch<React.SetStateAction<string>>;
  accountNumber: string;
  setAccountNumber: React.Dispatch<React.SetStateAction<string>>;
  company: string;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  data: Data;
}