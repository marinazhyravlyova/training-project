import { call, put, takeEvery } from 'redux-saga/effects';

import { setProducts, getProducts } from '../actions/products';

import { postData } from '../utils/requests';

function* getProductsSaga(action) {
  try {
    const response = yield call(fetch, 'http://localhost:3000/product/all');
    const products = yield response.json();

    yield put(setProducts(products));
  } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* addProductSaga(action) {
  try {
    yield call(postData, 'http://localhost:3000/product', { product: action.payload });
    
    yield put(getProducts());
  } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}


function* productsSaga() {
    yield takeEvery("PRODUCTS_GET_PRODUCTS", getProductsSaga);
    yield takeEvery("PRODUCTS_ADD_PRODUCT", addProductSaga);
}

export default productsSaga;
