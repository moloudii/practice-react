import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "../../store-provider";
import { useDispatch, useSelector } from "react-redux";
let todoId = 0;
const getVisibilityTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "COMPLETED":
      return todos.filter((todo) => todo.completed);
    case "PENDING":
      return todos.filter((todo) => !todo.completed);
    default:
      break;
  }
};
// import { createStore } from "redux";
export default function ToDos({ store }) {
  // const [, forceUpdate] = useState(0);
  // useEffect(() => {
  //   const unSubScribe = store.subscribe(() => forceUpdate((c) => c + 1));
  //   return () => unSubScribe();
  // }, [store]);
  const todos = useSelector((store) => store.todos);
  const filter = useSelector((store) => store.visibilityFilter);
  const dispatch = useDispatch();
  const todoList = todos
    ? getVisibilityTodos(todos, filter).map((todo) => (
        <li
          key={todo.id}
          onClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </li>
      ))
    : null;
  const handleSetVisibility = (filter) => {
    dispatch({
      type: "SET_VISIBILITY_FILTER",
      filter,
    });
  };
  const handleKeyDown = (event) => {
    if ("Enter" === event.code) {
      const { target } = event;
      dispatch({
        type: "ADD_TODO",
        id: todoId++,
        text: target.value,
        completed: false,
      });
      target.value = "";
    }
  };
  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} />
      {todoList}
      <div>
        <button onClick={() => handleSetVisibility("SHOW_ALL")}>All</button>
        <button onClick={() => handleSetVisibility("COMPLETED")}>
          Completed
        </button>
        <button onClick={() => handleSetVisibility("PENDING")}>Pending</button>
      </div>
    </div>
  );
}
