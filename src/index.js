import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers';
import authSaga from './sagas/authorisation';
import App from './App'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(authSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
