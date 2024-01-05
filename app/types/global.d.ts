// global.d.ts
declare global {
  export interface Power {
    id: string;
    title: string;
    recommended: boolean;
  };

  export interface Height {
    id: string;
    title: string;
    powers: Power[];
    recommended: boolean;
  };

  export interface Capacity {
    id: string;
    title: string;
    heights: Height[];
  };

  export interface Model {
    id: string;
    title: string;
    capacities: Capacity[];
  };

  export interface Type {
    id: string;
    title: string;
    models: Model[];
  };

  export interface Product {
    type: Type;
    model: Model;
    group: string;
    product: string;
    id: string;
    title: string;
    types: Type[];
    models: Model[];
    capacity: Capacity;
    height: Height;
    power: Power;
    input: string[];
    output: string[];
    inputOutput?: string;
    tempId?: number;
  };

  export interface Group{
    id: string;
    name: string;
    title: string;
    products: Product[];
    inputOutput: string[];
  };

  export interface ProductTableProps {
    groups: Group[] | undefined;
  }

  export interface InputOutput {
    [x: string]: any;
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
    createdAt: string;
    observation: string;
    clientId: string;
    client: Client;
    productSelections: ProductSelection[];
    groups: string;
    product: string;
    type: string;
    model: string;
    capacity: string;
    height: string;
    power: string;
    input: string;
    output: string;
    clientName: string;
    address: string;
    city: string;
    state: string;
    cpfCnpj: string;
    ie: string;
    contact: string;
    phone: string;
    email: string;
    inputOutputs: string;
  }

  export interface ProductSelection {
    id: number;
    groups: string;
    product: string;
    type: string;
    model: string;
    capacity: string;
    height: string;
    power: string;
    input: string;
    output: string;
    proposeId: number;
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

  export interface PaymentMethod {
    id: string;
    title: string;
  };

  export interface SalesPerson {
    id: string;
    name: string;
  };

  export interface Installment {
    id: string;
    number: number;
  };

  export interface Bank {
    id: string;
    name: string;
  };

  export interface Company {
    id: string;
    name: string;
  };

  export interface PaymentInfo {
    paymentMethod: PaymentMethod;
    salesPerson: SalesPerson;
    installment: Installment;
    bank: Bank;
    company: Company;
  };

  export interface PaymentInfoContextData {
    paymentInfo: PaymentInfo | null;
    setPaymentInfo: (info: PaymentInfo | null) => void;
    isSaved: boolean;
    savePaymentInfo: () => void;
  };

  export interface SelectedClientContextData {
    selectedClient: Client | null;
    setSelectedClient: (client: Client | null) => void;
    resetSelectedClient: () => void;
  }
}

export {};