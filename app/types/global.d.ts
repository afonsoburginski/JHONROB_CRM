declare global {
  interface Group {
    id: string;
    title: string;
    products: Product[];
    inputOutput: string[];
  }
  
  interface Product {
    id: string;
    title: string;
    models: Model[];
    types: Type[];
  }
  
  interface Type {
    id: string;
    title: string;
  }
  
  interface Model {
    id: string;
    title: string;
    capacities: Capacity[];
  }
  
  interface Capacity {
    id: string;
    title: string;
    heights: Height[];
  }
  
  interface Height {
    id: string;
    title: string;
    powers: Power[];
    recommended: boolean;
  }
  
  interface Power {
    id: string;
    title: string;
    recommended: boolean;
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