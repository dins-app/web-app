import React from "react";

const INITIAL_STATE = {};

export const Context = React.createContext(INITIAL_STATE);

export default class Provider extends React.Component {
  state = INITIAL_STATE;

  actions = {
    setState: this.setState
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          ...this.actions
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

// export const Consumer = Context.Consumer;
