import React, { useEffect } from 'react';

import ProductsTable from '../ProductsPage/ProductsTable';
import MealForm from './MealForm';
import MealsTable from './MealsTable';

const CaloriesJournal = ({ products, meals, getMealsRequest, getProductsRequest, addMealRequest }) => {
  useEffect(() => {
    getMealsRequest();
    getProductsRequest();
  }, [getMealsRequest, getProductsRequest]);

  console.log(meals);

  const handleAddMeal = meal => addMealRequest(meal)

  return (
    <div>
      <MealForm products={products} onSubmit={handleAddMeal} />
      <ProductsTable products={products} />
      <MealsTable meals={meals} />
    </div>
  );
}

export default CaloriesJournal;
