// expeditionTable.tsx
import React, { useState } from 'react';
import { HiXMark } from 'react-icons/hi2';
import {
  Card,
  Flex,
  Title,
  Text,
  Button,
  SearchSelect,
  SearchSelectItem,
  MultiSelect,
  MultiSelectItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import { useExpeditionContext } from '../../contexts/expeditionContext';
import { Tab, TabGroup, TabList } from '@tremor/react';
import { of, product, piece } from './data';

export default function ExpeditionTable({ searchParams, onNext }: { searchParams: { q: string }; onNext: () => void; }) {
  const {
    ofs,
    setOfs,
    attachedItems,
    setAttachedItems,
    selectedOF,
    setSelectedOF,
    savedOFs,
    setSavedOFs,
    ofInfos,
    setOfInfos,
  } = useExpeditionContext();
  const [selectedOfProducts, setSelectedOfProducts] = useState<any[]>([]);
  const [selectedItemIndices, setSelectedItemIndices] = useState<number[]>([]);
  const [navSelectedProduct, setNavSelectedProduct] = useState<string | null>(null);

  const handleSelectOF = (of: string) => {
    setSelectedOF(of);
    const selectedOf = ofs.find((o) => o.of === of);
    setAttachedItems(selectedOf ? selectedOf.items : []);
    // Atualiza o produto selecionado para o primeiro da lista
    if (selectedOf && selectedOfProducts.length > 0) {
      setNavSelectedProduct(selectedOfProducts[0].product);
    } else {
      setNavSelectedProduct(null);
    }
  };

  const [attachedItemsByProduct, setAttachedItemsByProduct] = useState<Record<string, Item[]>>({});

  const handleAddItem = () => {
    if (selectedItemIndices.length > 0 && selectedOF && navSelectedProduct) {
      const newItems = selectedItemIndices.map((index) => piece[index]);
      console.log('Adicionando itens:', newItems); 
      const existingProduct = selectedOfProducts.find(
        (product) =>
          product.of === selectedOF && product.product === navSelectedProduct
      );
  
      let updatedProducts;
      if (existingProduct) {
        updatedProducts = selectedOfProducts.map((product) =>
          product.of === selectedOF && product.product === navSelectedProduct
            ? { ...product, items: [...(attachedItemsByProduct[selectedOF + navSelectedProduct] || []), ...newItems] }
            : product
        );
      } else {
        updatedProducts = [
          ...selectedOfProducts,
          {
            of: selectedOF,
            product: navSelectedProduct,
            items: newItems,
          },
        ];
      }
  
      setSelectedOfProducts(updatedProducts);
      setNavSelectedProduct(navSelectedProduct); // Seleciona o tab do produto adicionado
      setAttachedItemsByProduct({
        ...attachedItemsByProduct,
        [selectedOF + navSelectedProduct]: [...(attachedItemsByProduct[selectedOF + navSelectedProduct] || []), ...newItems],
      });
      setSelectedItemIndices([]);
    }
  };
  
  const handleSave = () => {
    const updatedProducts = selectedOfProducts.map((product) => {
      const attachedItems = attachedItemsByProduct[product.of + product.product] || [];
      return {
        ...product,
        items: attachedItems,
      };
    });
  
    setSelectedOfProducts(updatedProducts);
  
    const ofToSave = updatedProducts.map((product) => product.of);
    setSavedOFs([...savedOFs, ...ofToSave]);
  
    const productsToSave = updatedProducts.filter((product) => !savedOFs.includes(product.of));
    setOfInfos([...ofInfos, ...productsToSave]);
  
    console.log('Salvando itens:', updatedProducts);
  };

  return (
    <div>
      <Title>Entrada de expedição</Title>
      <Text>Selecione a OF, o produto e anexe peças a ele</Text>
      <div className="flex flex-col md:flex-row gap-4">
        <SearchSelect onValueChange={handleSelectOF}>
          {of.map((of, index) => (
            <SearchSelectItem key={index} value={of.name}>
              {of.name}
            </SearchSelectItem>
          ))}
        </SearchSelect>
        <SearchSelect onValueChange={setNavSelectedProduct}>
          {product.map((product, index) => (
            <SearchSelectItem key={index} value={product.name}>
              {product.name}
            </SearchSelectItem>
          ))}
        </SearchSelect>
        <div className="w-full flex gap-4">
          <MultiSelect onValueChange={setSelectedItemIndices}>
            {piece.map((item, index) => (
              <MultiSelectItem key={index} value={index}>
                {item.name}
              </MultiSelectItem>
            ))}
          </MultiSelect>
          <Button onClick={handleAddItem}>Add item</Button>
        </div>
      </div>
      <TabGroup>
        <>
        <TabList variant="line">
          {selectedOfProducts.slice().reverse().map((product, index) => (
            <Tab key={index} value={product.product} onClick={() => setNavSelectedProduct(product.product)}>
              {product.product}
            </Tab>
          ))}
        </TabList>

          {selectedOfProducts.map((product, index) => (
            <Card key={index} hidden={product.product !== navSelectedProduct}>
              <Title>{product.product}</Title>
              <Table className="table-auto w-full">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell className="w-[8%] text-start border py-2">Quantity</TableHeaderCell>
                    <TableHeaderCell className="w-[8%] text-start border py-2">Balance</TableHeaderCell>
                    <TableHeaderCell className="w-[10%] text-start border py-2">Code</TableHeaderCell>
                    <TableHeaderCell className="w-[4%] text-start border py-2">RD</TableHeaderCell>
                    <TableHeaderCell className="w-[30%] text-start border py-2">Produto</TableHeaderCell>
                    <TableHeaderCell className="w-[4%] text-start border py-2">UN</TableHeaderCell>
                    <TableHeaderCell className="w-[8%] text-start border py-2">Cor</TableHeaderCell>
                    <TableHeaderCell className="w-[8%] text-start border py-2">Material</TableHeaderCell>
                    <TableHeaderCell className="w-[12%] text-start border py-2">(AxLxC)</TableHeaderCell>
                    <TableHeaderCell className="w-[8%] text-start border py-2">Weight</TableHeaderCell>
                    <TableHeaderCell className="w-[5%] text-start border py-2">Actions</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {product.items.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="w-[8%] break-words border px-4 py-2">{item.quantity}</TableCell>
                      <TableCell className="w-[8%] break-words border px-4 py-2">{item.balance}</TableCell>
                      <TableCell className="w-[10%] break-words border px-4 py-2">{item.code}</TableCell>
                      <TableCell className="w-[4%] break-words border px-4 py-2">{item.rdProduct}</TableCell>
                      <TableCell className="w-[30%] break-words border px-4 py-2">{item.name}</TableCell>
                      <TableCell className="w-[4%] break-words border px-4 py-2">{item.unit}</TableCell>
                      <TableCell className="w-[8%] break-words border px-4 py-2">{item.color}</TableCell>
                      <TableCell className="w-[8%] break-words border px-4 py-2">{item.material}</TableCell>
                      <TableCell className="w-[12%] break-words border px-4 py-2">{item.dimensions}</TableCell>
                      <TableCell className="w-[8%] break-words border px-4 py-2">{item.weight}</TableCell>
                      <TableCell className="w-[5%] break-words border px-4 py-2">
                        <Button
                          variant="secondary"
                          onClick={() => {
                            setAttachedItems(attachedItems.filter((attachedItem) => attachedItem.code !== item.code));
                            const updatedItems = product.items.filter((attachedItem) => attachedItem.code !== item.code);
                            const updatedProductsCopy = selectedOfProducts.map((p) =>
                              p === product ? { ...p, items: updatedItems } : p
                            );
                            setSelectedOfProducts(updatedProductsCopy);
                          }}
                        >
                          <HiXMark />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          ))}
        </>
      </TabGroup>
      <Flex className="mt-5">
        <Button variant="secondary" onClick={handleSave}>
          Salvar
        </Button>
        <Button variant="secondary" onClick={onNext}>
          Next
        </Button>
      </Flex>
    </div>
  );
}
