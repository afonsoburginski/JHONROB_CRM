// page.tsx
import CreateProduct from './createProduct';
import CreateClient from './createClient';
import { Card, Title, Text } from '@tremor/react';

const ProductPage = () => {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-screen-2xl">
      <Title>Cadastro</Title>
      <Text>Preencha os campos abaixo para cadastrar um novo produto ou cliente.</Text>
      
      <Card className="mt-6">
        <Title>Cadastro de Produtos</Title>
        <CreateProduct />
      </Card>

      <Card className="mt-6">
        <Title>Cadastro de Clientes</Title>
        <CreateClient />
      </Card>
    </main>
  );
};

export default ProductPage;