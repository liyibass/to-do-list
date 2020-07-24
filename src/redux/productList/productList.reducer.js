import productListTypes from "./productList.type";

// import { sortShopDataByCatogory } from "./productList.utils";

const initialState = {
  productList: [],
  searchKeyWord: "",
  loading: false,
  error: "",
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case productListTypes.FETCH_PRODUCT_REQUEST: {
      return {
        ...state,
        productList: [],
        searchKeyWord: "",
        loading: true,
        error: "",
      };
    }

    case productListTypes.FETCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        productList: action.payload,
        searchKeyWord: action.searchKeyWord,
        loading: false,
        error: "",
      };
    }

    case productListTypes.FETCH_PRODUCT_FAILURE: {
      return {
        ...state,
        productList: [],
        searchKeyWord: action.searchKeyWord,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default productListReducer;
