import { produce } from "immer";

const initState = {
  entities: {
    1: { id: 1, text: "design ui", completed: true, color: "red " },
    2: { id: 2, text: "discover state", completed: false },
    3: { id: 3, text: "discover actions", completed: false },
    4: { id: 4, text: "implement reducer", completed: false, color: "blue" },
    5: { id: 5, text: "completed patterns", completed: false, color: "red" },
  },
};
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
  }
}, initState);

export const todoAdded = (text) => ({
  type: "todos/todoAdded",
  payload: {
    id: 6,
    text: text,
    completed: false,
  },
});
export const todoToggled = (todoId) => ({
  type: "todos/todoToggled",
  payload: todoId,
});
export const todoDeleted = (todoId) => ({
  type: "todos/todoDeleted",
  payload: todoId,
});
export const selectTodos = (state) => state.todoReducer.entities;
export const selectTodosIds = (state) =>
  Object.keys(state.todoReducer.entities);

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