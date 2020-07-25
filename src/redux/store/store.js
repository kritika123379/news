import { createStore,  applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];


// const store = createStore(rootReducer, applyMiddleware(thunk));

//setup store
const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
export default store;
