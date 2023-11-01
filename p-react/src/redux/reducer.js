// import { combineReducers } from "redux";
import {
  todoReducer,
  todos,
  visibilityFilter,
} from "../Tasks/Todo-list/todos/todosSlice";
import filterReducer from "../Tasks/Todo-list/filter/filterSlice";

const rootReducers = {
  todoReducer,
  filterReducer,
  todos,
  visibilityFilter,
};
export default rootReducers;
