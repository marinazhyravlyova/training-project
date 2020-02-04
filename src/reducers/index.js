import { combineReducers } from 'redux'
import user from './user';
import products from './products';
import meals from './meals';

export default combineReducers({
    user,
    products,
    meals,
})
