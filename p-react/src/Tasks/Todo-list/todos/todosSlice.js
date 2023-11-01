import { createAction, nanoid, createReducer } from "@reduxjs/toolkit";
import { produce } from "immer";
import { createSelector } from "reselect";
import { StatusFilters } from "../filter/filterSlice";
import { client } from "../../../api/client";

const initState = {
  status: "idle",
  entities: {},
};
// const todoAdded1 = createAction("todos/todoAdded");
// const todoToggled1 = createAction("todos/todoToggled");
// const todoReducer1 = createReducer(initState, (builder) => {
//   builder
//     .addCase(todoAdded1, (state, action) => {
//       const todo = action.payload;
//       state.entities[todo.id] = todo;
//     })
//     .addCase(todoToggled1, (state, action) => {
//       const todoToggledId = action.payload;
//       state.entities[todoToggledId].completed =
//         !state.entities[todoToggledId].completed;
//     });
// });
export const todoReducer = produce((state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "todos/todoAdded":
      const todo = action.payload;
      state.entities[todo.id] = todo;
      break;
    case "todos/todoToggled":
      const todoToggledId = action.payload;
      state.entities[todoToggledId].completed =
        !state.entities[todoToggledId].completed;
      break;
    case "todos/todoDeleted":
      const deletedTodoId = action.payload;
      delete state.entities[deletedTodoId];
      break;
    case "todos/markAllCompleted":
      console.log(Object.values(state.entities));
      Object.values(state.entities).forEach(
        (todo) => (state.entities[todo.id].completed = true)
      );
      break;
    case "todos/clearCompleted":
      Object.values(state.entities).forEach((todo) => {
        if (todo.completed) {
          delete state.entities[todo.id];
        }
      });
      break;
    case "todos/colorChanged":
      const { id, color } = action.payload;
      state.entities[id].color = color;
      break;
    case "todos/todosLoading":
      state.status = "loading";
      break;
    case "todos/todosLoaded":
      const todos = action.payload;
      const newEntities = {};
      todos.forEach((todo) => {
        newEntities[todo.id] = todo;
      });
      state.entities = newEntities;
      state.status = "idle";
  }
}, initState);

// export const todoAdded = (todo) => ({
//   type: "todos/todoAdded",
//   payload: todo,
// });
export const todoAdded = createAction("todos/todoAdded", (text) => {
  return {
    payload: {
      id: nanoid(),
      text,
      date: new Date().toISOString(),
    },
  };
});
export const todoToggled = (todoId) => ({
  type: "todos/todoToggled",
  payload: todoId,
});
export const todoDeleted = (todoId) => ({
  type: "todos/todoDeleted",
  payload: todoId,
});
export const colorChanged = (todoId, color) => ({
  type: "todos/colorChanged",
  payload: {
    id: todoId,
    color,
  },
});
const todosLoaded = (todos) => ({ type: "todos/todosLoaded", payload: todos });
export const fetchTodos = (dispatch, getState) => {
  dispatch({ type: "todos/todosLoading" });
  client.get("todoReducer").then((todos) => dispatch(todosLoaded(todos)));
};

// thunk function
export const saveNewTodo = (text) => {
  return async function saveNewTodoThunk(dispatch) {
    const initTodo = {
      text,
      completed: false,
    };
    const todo = await client.post("todoReducer", initTodo);
    dispatch(todoAdded(todo));
  };
};
export const selectTodosIds = (state) =>
  Object.keys(state.todoReducer.entities);
export const selectTodoEntities = (state) => state.todoReducer.entities;

export const selectTodos = createSelector(selectTodoEntities, (todoEntities) =>
  Object.values(todoEntities)
);
const selectFilteredTodos = createSelector(
  selectTodos,
  (state) => state.filterReducer,
  (todos, filters) => {
    const { status, colors } = filters;
    const showAll = status === StatusFilters.All;
    if (showAll && colors.length === 0) {
      return todos;
    }
    const showCompleted = status === StatusFilters.Completed;
    return todos.filter((todo) => {
      const statusFilter = showAll || todo.completed === showCompleted;
      const colorsFilter = colors.length === 0 || colors.includes(todo.color);
      return statusFilter && colorsFilter;
    });
  }
);

export const selectFiltertodoIds = createSelector(
  selectFilteredTodos,
  (filteredTodos) => filteredTodos.map((todo) => todo.id)
);

export const markAllCompleted = () => ({
  type: "todos/markAllCompleted",
});
export const clearCompleted = () => ({
  type: "todos/clearCompleted",
});

//Todo project for pure redux
const initStateTodo = [
  {
    id: 1,
    text: "Task 1",
    completed: false,
  },
  {
    id: 2,
    text: "Task 2",
    completed: false,
  },
  {
    id: 3,
    text: "Task 3",
    completed: true,
  },
];
export const todos = (state = initStateTodo, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    default:
      return state;
  }
};
export const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};
