import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import taskLiskReducer from "./taskList/taskList.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["taskList"],
};

const rootReducer = combineReducers({
  taskList: taskLiskReducer,
});

export default persistReducer(persistConfig, rootReducer);
