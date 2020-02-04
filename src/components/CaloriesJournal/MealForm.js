import React from 'react';

import Select from '../Inputs/Select';

import { useCorrectSubmitWithReset } from '../../utils/form';

const MealForm = ({ products, onSubmit }) => {

  const useHandleSubmit = useCorrectSubmitWithReset(onSubmit);

  return (
      <form onSubmit={useHandleSubmit}>
          <div>
              <label>Date:</label>
              <input type="date" name="date" required />
          </div>
          <div>
                <label>Product:</label>
                <Select
                    name="product"
                    options={products}
                    caption="--Please choose the Product--"
                    required
                />
          </div>
          <div>
              <label>Weight:</label>
              <input name="weight" required />
          </div>
          <input type="submit" value="Submit" />
      </form>
  );
};


export default MealForm;
