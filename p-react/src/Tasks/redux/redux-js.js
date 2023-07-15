const createStore = (reducer) => {
  let state;
  let listeners = [];
  dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  dispatch({});
  const getState = () => state;
  return { dispatch, getState, subscribe };
};

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

const unSubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
unSubscribe();
store.dispatch({ type: "DECREMENT" });
