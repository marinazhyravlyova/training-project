import React from 'react';

import { isEmpty } from 'ramda';

const MealsTable = ({ meals }) => {
  return isEmpty (meals)
    ? <div>The meals list is Empty. Please, add the meal.</div>
    : (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {meals.map(meal => (
            <tr key={meal.product + meal.weight}>
              <td>{meal.date}</td>
              <td>{meal.product}</td>
              <td>{meal.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default MealsTable;
