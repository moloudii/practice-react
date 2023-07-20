import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as TimesSolid } from "./times-solid.svg";
import { colorChanged, todoDeleted, todoToggled } from "./todosSlice";

export const availableColors = ["green", "blue", "orange", "purple", "red"];
export const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

const TodoListItem = ({ id }) => {
  const todo = useSelector((state) => state.todoReducer.entities[id]);
  const { text, completed, color } = todo;
  const dispatch = useDispatch();
  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  function handleCompletedChanged() {
    dispatch(todoToggled(todo.id));
  }
  function handleDelete() {
    dispatch(todoDeleted(todo.id));
  }
  const handleChangeColor = (event) => {
    dispatch(colorChanged(todo.id, event.target.value));
  };
  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            onChange={handleCompletedChanged}
            checked={completed}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            defaultValue={color}
            style={{ color }}
            onChange={handleChangeColor}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={handleDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
