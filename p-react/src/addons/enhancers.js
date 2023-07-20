export const logActions = (createStore) => {
  return (rootReducers, preloadedState, enhancer) => {
    const store = createStore(rootReducers, preloadedState, enhancer);
    function logActions(action) {
      const result = store.dispatch(action);
      console.log(action);
      return result;
    }
    return { ...store, dispatch: logActions };
  };
};
export const logState = (createStore) => {
  return (rootReducers, preloadedState, enhancer) => {
    const store = createStore(rootReducers, preloadedState, enhancer);
    function logState() {
      const state = store.getState();
      console.log(state);
      return state;
    }
    return { ...store, getState: logState };
  };
};
