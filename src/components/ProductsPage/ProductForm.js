import React from 'react';
import styled from 'styled-components';

import { useCorrectSubmitWithReset } from '../../utils/form';

const ProductForm = ({ onSubmit }) => {

  const useHandleSubmit = useCorrectSubmitWithReset(onSubmit);

  return (
      <form onSubmit={useHandleSubmit}>
          <div>
              <label>Name:</label>
              <input name="name" required/>
          </div>
          <div>
              <label>Calories:</label>
              <input name="calories" required/>
          </div>
          <div>
              <label>Protein:</label>
              <input name="protein" required/>
          </div>
          <div>
              <label>Fat:</label>
              <input name="fat" required/>
          </div>
          <div>
              <label>Carbohydrates:</label>
              <input name="carbohydrates" required/>
          </div>
          <input type="submit" value="Submit" />
      </form>
  );
};


export default ProductForm;
