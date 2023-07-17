import { createContext, useContext, useReducer } from "react";

const ReduxContext = createContext();

const Provider = ({ children, reducer, initialState }) => {
  const store = useReducer(reducer, initialState);

  return (
    <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
  );
};

const useRedux = () => {
  const context = useContext(ReduxContext);
  if (!context) {
    throw new Error("useRedux must be used within a Provider");
  }
  return context;
};

export { Provider, useRedux };
