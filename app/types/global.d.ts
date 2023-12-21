declare global {

  type Power = {
    id: string;
    title: string;
    recommended: boolean;
  };

  type Height = {
    id: string;
    title: string;
    powers: Power[];
    recommended: boolean;
  };

  type Capacity = {
    id: string;
    title: string;
    heights: Height[];
  };

  type Model = {
    id: string;
    title: string;
    capacities: Capacity[];
  };

  type Type = {
    id: string;
    title: string;
  };

  type Product = {
    [x: string]: number;
    id: string;
    title: string;
    models: Model[];
    types: Type[];
  };

  type Group = {
    id: string;
    title: string;
    products: Product[];
    inputOutput: string[];
  };

  interface ProductTableProps {
    groups: Group[] | undefined;
  }

  interface InputOutput {
    id: string;
    title: string;
    type: string;
    input: string;
    output: string;
  }

  // selectedClientContex.tsx
  interface Propose {
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

  interface Client {
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

  interface SelectedClientContextData {
    selectedClient: Client | null;
    setSelectedClient: (client: Client | null) => void;
    resetSelectedClient: () => void;
  }

}

export {};