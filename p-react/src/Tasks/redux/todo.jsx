import { useEffect, useState } from "react";
let todoId = 0;
// import { createStore } from "redux";
export default function ToDos({ store }) {
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    const unSubScribe = store.subscribe(() => forceUpdate((c) => c + 1));
    return () => unSubScribe();
  }, [store]);
  const todoList = store.getState().map((todo) => (
    <li
      key={todo.id}
      onClick={() => store.dispatch({ type: "TOGGLE_TODO", id: todo.id })}
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      {todo.text}
    </li>
  ));
  const handleKeyDown = (event) => {
    if ("Enter" === event.code) {
      const { target } = event;
      store.dispatch({
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
    </div>
  );
}
