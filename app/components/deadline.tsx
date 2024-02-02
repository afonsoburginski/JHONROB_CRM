// deadline.tsx
import { Title, List, ListItem, Text, DatePicker } from "@tremor/react";
import { useContext } from "react";
import { SelectedProductContext } from '../contexts/selectedProductContext';

const Deadline = () => {
  const { selectedProducts, updateProductManufacturingTime, updateProductAssemblyTime } = useContext(SelectedProductContext);

  const addThirtyDays = (date) => {
    const result = new Date(date);
    result.setDate(result.getDate() + 30);
    return result;
  }

  return (
    <>    
      <Title>Prazos e Montagem</Title>
      <div className="h-80">
        <List>
          {selectedProducts.map(product => (
            <ListItem key={product.tempId}>
              <Text>{product.product.title}</Text>
              <div>
                <Text>Prazo de Fabricação</Text>
                <DatePicker
                  value={product.manufacturingTime ? new Date(product.manufacturingTime) : null}
                  onValueChange={(date) => updateProductManufacturingTime(product.tempId, date)}
                  className="max-w-md mx-auto"
                />
              </div>
              <div>
                <Text>Prazo de Montagem</Text>
                <DatePicker
                  value={product.assemblyTime ? new Date(product.assemblyTime) : null}
                  onValueChange={(date) => updateProductAssemblyTime(product.tempId, date)}
                  minDate={product.manufacturingTime ? addThirtyDays(product.manufacturingTime) : null}
                  className="max-w-md mx-auto"
                />
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}

export default Deadline;