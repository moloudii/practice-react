export const StatusFilters = {
  All: "all",
  Active: "active",
  Completed: "completed",
};
const initState = {
  status: StatusFilters.Active,
  colors: [],
};

export default function filterReducer(state = initState, action) {
  switch (action.type) {
    case "filters/changedStatusFilter":
      return { ...state, status: action.payload };
    case "filters/changedColorFilter":
      const { colors } = state;
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          if (colors.includes(color)) {
            return state;
          }
          return { ...state, colors: [...colors, color] };
        case "removed":
          return { ...state, colors: colors.filter((c) => c !== color) };
        default:
          return state;
      }
    default:
      return state;
  }
}
export const selectStatusFilter = (state) => state.filterReducer.status;
export const selectColorsFilter = (state) => state.filterReducer.colors;

export const changedStatusFilter = (status) => ({
  type: "filters/changedStatusFilter",
  payload: status,
});
export const changedColorFilter = (color, changeType) => ({
  type: "filters/changedColorFilter",
  payload: {
    color,
    changeType,
  },
});
