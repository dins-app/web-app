import React, { useState } from 'react';
import * as actions from '../actions';

interface Context {
  state?: Record<string, any>;
  setState?: any;
  sayHello?: any;
}

export const Context = React.createContext<Context | null>(null);

export const ContextProvider = ({ initialState, children }: { initialState: any; children: any }): any => {
  const [state, setState] = useState(initialState);

  const providerActions = {
    setState: (values: Record<string, any>) =>
      setState(prevState => {
        return { ...prevState, ...values };
      }),
    ...actions,
  };
  return (
    <Context.Provider
      value={{
        state: { ...state },
        ...providerActions,
      }}
    >
      {children}
    </Context.Provider>
  );
};
