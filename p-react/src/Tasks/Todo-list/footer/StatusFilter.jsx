import { useDispatch, useSelector } from "react-redux";
import {
  StatusFilters,
  changedStatusFilter,
  selectStatusFilter,
} from "../filter/filterSlice";

const StatusFilter = () => {
  const status = useSelector(selectStatusFilter);
  const dispatch = useDispatch();
  function handleChangeStatus(status) {
    dispatch(changedStatusFilter(status));
  }
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const className = value === status ? "selected" : "";

    return (
      <li key={value}>
        <button className={className} onClick={() => handleChangeStatus(value)}>
          {key}
        </button>
      </li>
    );
  });

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  );
};

export default StatusFilter;
