// page.tsx
import CreateProduct from './createProduct';
import { Card, Title, Text } from '@tremor/react';

const ProductPage = () => {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Cadastro de Produtos</Title>
      <Text>Cadastro de Produtos.</Text>
      <Card className="mt-6">
        <CreateProduct />
      </Card>
    </main>
  );
};

export default ProductPage;