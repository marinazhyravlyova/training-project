import { fork, all } from 'redux-saga/effects';

import authSaga from './authorisation';
import productsSaga from './products';
import mealsSaga from './meals';

export default function* rootSaga() {
  yield all([
      fork(authSaga),
      fork(productsSaga),
      fork(mealsSaga),
  ]);
}
