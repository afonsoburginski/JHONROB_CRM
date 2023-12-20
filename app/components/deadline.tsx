import { DatePicker, DatePickerValue, Title, MultiSelect, MultiSelectItem, List, ListItem, Button } from "@tremor/react";
import { useState } from "react";

type ProductDeadline = {
  factoryDeliveryTime: DatePickerValue;
  assembledDeliveryTime: DatePickerValue;
};

const Deadline = () => {
  const initialDate: DatePickerValue = new Date();

  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [productDeadlines, setProductDeadlines] = useState<Record<string, ProductDeadline>>({});

  const handleAddProduct = (products: string[]) => {
    let updatedDeadlines = { ...productDeadlines };
    products.forEach(product => {
      if (product && !updatedDeadlines[product]) {
        updatedDeadlines[product] = {
          factoryDeliveryTime: initialDate,
          assembledDeliveryTime: initialDate,
        };
      }
    });
    setProductDeadlines(updatedDeadlines);
  };

  const handleRemoveProduct = (product: string) => {
    let updatedDeadlines = { ...productDeadlines };
    delete updatedDeadlines[product];
    setProductDeadlines(updatedDeadlines);
  };

  const handleDateChange = (date: DatePickerValue, type: 'factory' | 'assembled') => {
    let updatedDeadlines = { ...productDeadlines };
    selectedProducts.forEach(product => {
      if (updatedDeadlines[product]) {
        updatedDeadlines[product] = {
          ...updatedDeadlines[product],
          [type === 'factory' ? 'factoryDeliveryTime' : 'assembledDeliveryTime']: date
        };
      }
    });
    setProductDeadlines(updatedDeadlines);
  };

  return (
    <>    
      <Title>Prazos e Montagem</Title>
      <div className="h-80">
        <div className="flex justify-between items-center mb-4">
          <div className="flex justify-start">
            <MultiSelect className="mr-2 w-96" onValueChange={setSelectedProducts}>
              <MultiSelectItem value="Produto1">Produto 1</MultiSelectItem>
              <MultiSelectItem value="Produto2">Produto 2</MultiSelectItem>
              <MultiSelectItem value="Produto3">Produto 3</MultiSelectItem>
            </MultiSelect>
            <Button size="xs" variant="secondary" onClick={() => handleAddProduct(selectedProducts)}>Add</Button>
          </div>

          <div className="flex justify-end">
            <DatePicker
              className="mr-2"
              value={selectedProducts[0] ? productDeadlines[selectedProducts[0]]?.factoryDeliveryTime : initialDate}
              onValueChange={(date) => handleDateChange(date, 'factory')}
            />
            <DatePicker
              value={selectedProducts[0] ? productDeadlines[selectedProducts[0]]?.assembledDeliveryTime : initialDate}
              onValueChange={(date) => handleDateChange(date, 'assembled')}
            />
          </div>
        </div>

        <List>
          {Object.keys(productDeadlines).length > 0 ? (
            Object.entries(productDeadlines).map(([product, deadlines]) => (
              <ListItem key={product} onClick={() => setSelectedProducts([product])}>
                <span>{product}</span>
                <span>Prazo montado: {deadlines.assembledDeliveryTime?.toLocaleDateString() ?? 'N/A'}</span>
                <span>Prazo fábrica: {deadlines.factoryDeliveryTime?.toLocaleDateString() ?? 'N/A'}</span>
                <Button size="xs" variant="secondary" onClick={() => handleRemoveProduct(product)}>X</Button>
              </ListItem>
            ))
          ) : (
            <ListItem>Nenhum produto adicionado ainda.</ListItem>
          )}
        </List>

      </div>
    </>
  );
}

export default Deadline;