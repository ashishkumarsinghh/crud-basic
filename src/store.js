import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/";
const store = createStore(
  rootReducer,
  {
    teams: ["avengers", "blue marvel", "scorpions"]
  },
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
