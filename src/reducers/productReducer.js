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
  PRODUCT_SORT_FAIL,

  } from '../constants/productConstant';
  
  export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, products: [] };
      case PRODUCT_LIST_SUCCESS:
        return { loading: false, products: action.payload };
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const productDetailsReducer = (
    state = { product: {} },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { ...state, loading: true };
      case PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload };
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const catogeryListReducer = (state = { category: [] }, action) => {
    switch (action.type) {
      case PRODUCT_CATEGORY_REQUEST:
        return { loading: true, category: [] };
      case PRODUCT_CATEGORY_SUCCESS:
        return { loading: false, category: action.payload };
      case PRODUCT_CATEGORY_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const mensProductReducer = (state = { mens: [] }, action) => {
    switch (action.type) {
      case PRODUCT_MENS_REQUEST:
        return { loading: true, mens: [] };
      case PRODUCT_MENS_SUCCESS:
        return { loading: false, mens: action.payload };
      case PRODUCT_MENS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const sortProductReducer = (state = { sort: [] }, action) => {
    switch (action.type) {
      case PRODUCT_SORT_REQUEST:
        return { loading: true, sort: [] };
      case PRODUCT_SORT_SUCCESS:
        return { loading: false, sort: action.payload };
      case PRODUCT_SORT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };