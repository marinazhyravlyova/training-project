export const getProducts = () => ({
  type: 'PRODUCTS_GET_PRODUCTS',
});

export const setProducts = products => ({
  type: 'PRODUCTS_SET_PRODUCTS',
  payload: products,
});

export const addProduct = product => ({
  type: 'PRODUCTS_ADD_PRODUCT',
  payload: product,
});
