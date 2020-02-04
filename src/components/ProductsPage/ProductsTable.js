import React from 'react';

import { isEmpty } from 'ramda';

const ProductsTable = ({ products }) => {
  return isEmpty (products) 
    ? <div>The products list is Empty. Please, add the products.</div>
    : (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Fat</th>
            <th>Carbohydrates</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.calories}</td>
              <td>{product.protein}</td>
              <td>{product.fat}</td>
              <td>{product.carbohydrates}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default ProductsTable;
