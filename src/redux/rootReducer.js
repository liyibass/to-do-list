import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import navigationListReducer from "./navigationList/navigationList.reducer";
import productListReducer from "./productList/productList.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "productList", "navigationList"],
};

const rootReducer = combineReducers({
  navigationList: navigationListReducer,
  productList: productListReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
