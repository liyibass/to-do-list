import productListTypes from "./productList.type";
import Axios from "axios";

export const fetchProductRequest = () => {
  window.scrollTo(0, 0);
  return {
    type: productListTypes.FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductSuccess = (productList, searchKeyWord) => {
  return {
    type: productListTypes.FETCH_PRODUCT_SUCCESS,
    payload: productList,
    searchKeyWord: searchKeyWord,
  };
};

export const fetchProductFailure = (errorMessage) => {
  return {
    type: productListTypes.FETCH_PRODUCT_FAILURE,
    payload: errorMessage,
  };
};

export const fetchProductListFromApi = (catogoryId) => {
  return function (dispatch) {
    dispatch(fetchProductRequest());
    Axios.get(
      `https://liyi-web-server.herokuapp.com/api/product/catogory/${catogoryId}`
    )
      .then((response) => {
        const productList = response.data;
        dispatch(fetchProductSuccess(productList));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchProductFailure(errorMessage));
      });
  };
};

export const fetchResultListFromApi = (search) => {
  return function (dispatch) {
    const searchKeyWord = search;
    const encodeUrl = encodeURIComponent(search);
    dispatch(fetchProductRequest());
    Axios.get(
      `https://liyi-web-server.herokuapp.com/api/product/search/${encodeUrl}`
    )
      .then((response) => {
        const productList = response.data;
        dispatch(fetchProductSuccess(productList, searchKeyWord));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchProductFailure(errorMessage));
      });
  };
};
