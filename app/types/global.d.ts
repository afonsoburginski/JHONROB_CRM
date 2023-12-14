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
}

export {};