// deadline.tsx
import { Title, List, ListItem } from "@tremor/react";
import { useContext } from "react";
import { SelectedProductContext } from '../contexts/selectedProductContext';

const Deadline = () => {
  const { selectedProducts, updateProductManufacturingTime, updateProductAssemblyTime } = useContext(SelectedProductContext);

  return (
    <>    
      <Title>Prazos e Montagem</Title>
      <div className="h-80">
        <List>
          {selectedProducts.map(product => (
            <ListItem key={product.tempId}>
              <span>{product.product.title}</span>
              <input
                type="date"
                value={product.manufacturingTime?.toISOString().substr(0, 10)}
                onChange={(event) => updateProductManufacturingTime(product.tempId, new Date(event.target.value))}
              />
              <input
                type="date"
                value={product.assemblyTime?.toISOString().substr(0, 10)}
                onChange={(event) => updateProductAssemblyTime(product.tempId, new Date(event.target.value))}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}

export default Deadline;