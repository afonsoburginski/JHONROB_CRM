// components/ProductList.tsx
import React, { useEffect, useState } from 'react'

interface Product {
  id: number;
  name: string;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  )
}