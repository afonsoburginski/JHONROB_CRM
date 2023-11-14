// data.ts
import { prisma } from './prisma'; // substitua pelo caminho correto para o arquivo prisma.ts

export async function fetchProducts() {
  const products = await prisma.product.findMany({
    include: {
      models: {
        include: {
          capacities: {
            include: {
              heights: true
            }
          }
        }
      }
    }
  });
  return products;
}

export async function fetchInputOutputOptions() {
  const options = await prisma.inputOutput.findMany();
  return options;
}

// Não é mais necessário chamar prisma.$disconnect() aqui, pois você está reutilizando a instância do PrismaClient