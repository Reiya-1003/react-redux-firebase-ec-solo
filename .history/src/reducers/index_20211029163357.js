import {combineReducers} from 'redux';
import loginUser from './loginUser';
import serarchItems from './searchItems'
import getItem from './getItem'
import setItem from './setItem'
import setTopping from './setTopping';
import getCartItem from './getCartItem'
import getOrderItem from './getOrderItem'


export default combineReducers({loginUser,setItem,setTopping,getCartItem,serarchItems,getItem,getOrderItem})