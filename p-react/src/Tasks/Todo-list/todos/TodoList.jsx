import { shallowEqual, useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import { selectFiltertodoIds } from "./todosSlice";

const TodoList = () => {
  const todosIds = useSelector(selectFiltertodoIds, shallowEqual);

  const renderedListItems = todosIds.map((id) => {
    return <TodoListItem key={id} id={id} />;
  });
  return <ul className="todo-list">{renderedListItems}</ul>;
};
export default TodoList;
