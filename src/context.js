import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_CHARACTER":
      return {
        ...state,
        character: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    character: [],
    heading: "Marvel Character",
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
