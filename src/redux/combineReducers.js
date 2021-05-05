import { combineReducers } from "redux";
import { UserReducer } from "./reducers/user";
import { CounterReducer } from "./reducers/counterReducer";
import { MoviesReducer } from "./reducers/moviesReducer";

const rootReducer = combineReducers({
  UserReducer,
  CounterReducer,
  MoviesReducer,
});

export default rootReducer;
