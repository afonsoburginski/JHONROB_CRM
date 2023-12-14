declare global {
  interface Power {
    id: string;
    title: string;
    recommended: boolean;
  }

  interface Height {
    id: string;
    title: string;
    powers: Power[];
    recommended: boolean;
  }

  interface Capacity {
    id: string;
    title: string;
    heights: Height[];
  }

  interface Model {
    id: string;
    title: string;
    capacities: Capacity[];
  }

  interface Type {
    id: string;
    title: string;
  }

  interface Product {
    id: string;
    title: string;
    models: Model[];
    types: Type[];
  }

  interface Group {
    id: string;
    title: string;
    products: Product[];
    inputOutput: string[];
  }

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