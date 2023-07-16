import { combineReducers } from "redux";
import {
  todoReducer,
  todos,
  visibilityFilter,
} from "../Tasks/Todo-list/todos/todosSlice";

const rootReducers = combineReducers({ todoReducer, todos, visibilityFilter });
export default rootReducers;
