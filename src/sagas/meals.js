import { call, put, takeEvery } from 'redux-saga/effects';

import { setMeals, getMeals } from '../actions/meals';

import { postData } from '../utils/requests';

function* getMealsSaga(action) {
  try {
    const response = yield call(fetch, 'http://localhost:3000/meal/all');
    const meals = yield response.json();

    yield put(setMeals(meals));
  } catch (e) {
  }
}

function* addMealSaga(action) {
  try {
    yield call(postData, 'http://localhost:3000/meal', { meal: action.payload });

    yield put(getMeals());
  } catch (e) {
  }
}


function* mealsSaga() {
    yield takeEvery('MEALS_GET_MEALS', getMealsSaga);
    yield takeEvery('MEALS_ADD_MEAL', addMealSaga);
}

export default mealsSaga;
