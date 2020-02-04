import { useCallback } from 'react';
import { reduce } from 'ramda';

const takeFormValues = e => reduce((acc, item) =>
  item.name ? { ...acc, [item.name]: item.value } : acc  // select all the form values by element name
  , {}, e.target.elements);

export const useCorrectSubmit = onSubmit => useCallback(e => {
  e.preventDefault();

  const values = takeFormValues(e);
  onSubmit(values);
}, [onSubmit]);

export const useCorrectSubmitWithReset = onSubmit => useCallback(e => {
  e.preventDefault();

  const values = takeFormValues(e);
  onSubmit(values);

  e.target.reset();
}, [onSubmit]);
