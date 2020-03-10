import { combineReducers } from 'redux';
import productsReducer from './productsReducer'
import loginReducer from './loginReducer'

export default combineReducers({
    products: productsReducer,
    auth: loginReducer
})