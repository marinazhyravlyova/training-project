import React, { useEffect } from 'react';

import ProductsTable from './ProductsTable';
import ProductForm from './ProductForm';

const ProductsPage = ({ products, getProductsRequest, addProductRequest }) => {
  useEffect(() => {
    getProductsRequest();
  }, [getProductsRequest]);

  const handleAddProduct = product => addProductRequest(product)

  return (
    <div>
      <ProductForm onSubmit={handleAddProduct} />
      <ProductsTable products={products} />
    </div>
  );
}

export default ProductsPage;
