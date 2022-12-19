import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CATEGORY_REQUEST,
  PRODUCT_CATEGORY_SUCCESS,
  PRODUCT_CATEGORY_FAIL,
  PRODUCT_MENS_REQUEST,
  PRODUCT_MENS_SUCCESS,
  PRODUCT_MENS_FAIL,
  PRODUCT_SORT_REQUEST,
  PRODUCT_SORT_SUCCESS,
  PRODUCT_SORT_FAIL
} from "../constants/productConstant";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get('https://fakestoreapi.com/products');

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export const listProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
  export const categoryProduct = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_CATEGORY_REQUEST });
  
      const { data } = await axios.get('https://fakestoreapi.com/products/category/jewelery');
      console.log(data)
      dispatch({ type: PRODUCT_CATEGORY_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: PRODUCT_CATEGORY_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

  export const mensProduct = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_MENS_REQUEST });
  
      const { data } = await axios.get('https://fakestoreapi.com/products/category/electronics');
      console.log(data)
      dispatch({ type: PRODUCT_MENS_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: PRODUCT_MENS_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
  
  export const sortProductList = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_SORT_REQUEST });
  
      const { data } = await axios.get('https://fakestoreapi.com/products?sort=desc');
      console.log(data)
      dispatch({ type: PRODUCT_SORT_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: PRODUCT_SORT_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
  
  
  
