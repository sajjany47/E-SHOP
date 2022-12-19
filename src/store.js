import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    productListReducer,
    productDetailsReducer,
    catogeryListReducer,
    mensProductReducer,
    sortProductReducer
  } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { userLoginReducer } from './reducers/userReducer';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    categoryList:catogeryListReducer,
    mensList:mensProductReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    sortProducts:sortProductReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const initialState = {
    cart: { cartItems: cartItemsFromStorage,shippingAddress: shippingAddressFromLocalStorage, },
    userLogin: { userInfo: userInfoFromStorage },
  };
  

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
