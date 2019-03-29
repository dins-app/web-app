import React, { useState } from "react";
import * as actions from "../actions";

interface IContext {
  state?: any;
  setState?: any;
  sayHello?: any;
}

export const Context = React.createContext<IContext | null>(null);

export const ContextProvider = ({ initialState, children }) => {
  const [state, setState] = useState(initialState);

  const providerActions = {
    setState: (values: Object) =>
      setState(prevState => {
        return { ...prevState, ...values };
      }),
      ...actions
  };
  return (
    <Context.Provider
      value={{
        state: { ...state },
        ...providerActions
      }}
    >
      {children}
    </Context.Provider>
  );
};
