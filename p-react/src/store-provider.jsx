import { useState, useContext, createContext, useEffect } from "react";

const StoreContext = createContext();
export const Provider = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(StoreContext);
  if (!dispatch) {
    throw new Error("Use Provider before invoke useDispatch");
  }
  return dispatch;
};

export const useSelector = (selector) => {
  const [, forceUpdate] = useState(0);
  const { getState, subscribe } = useContext(StoreContext);

  useEffect(() => {
    const unSubscribe = subscribe(() => forceUpdate((c) => c + 1));
    return () => unSubscribe();
  }, []);
  if (!getState) {
    throw new Error("Use Provider before invoke useSelector");
  }
  return selector(getState());
};
