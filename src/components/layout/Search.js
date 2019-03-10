import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Consumer } from "../../context";

import Autosuggest from "react-autosuggest";
import characters from "../../data/names";

import Heroes from "../../img/heroes.png";

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : characters.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

class Search extends Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  // ---------------------------------------------------------------------------------------

  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    const char = this.state.value.toLowerCase();

    if (char) {
      axios
        .get(
          `https://gateway.marvel.com:443/v1/public/characters?name=${char}&apikey=${
            process.env.REACT_APP_MARVEL_PUBLIC_KEY
          }`
        )
        .then(res => {
          dispatch({
            type: "SEARCH_CHARACTER",
            payload: res.data.data.results[0]
          });
          this.props.history.push(`/character/${res.data.data.results[0].id}`);
        })
        .catch(error =>
          error.type === undefined
            ? this.setState({ error: "Enter a Valid Charater Name" })
            : console.log(error)
        );
    }
  };

  render() {
    return (
      <Consumer>
        {data => {
          const { dispatch } = data;
          const { value, suggestions } = this.state;

          const inputProps = {
            placeholder: "Enter a character name",
            value,
            onChange: this.onChange
          };

          return (
            <section className="search">
              <div className="container">
                <div className="search__menu">
                  <h1 className="search__menu-title">
                    Search for a Marvel Character
                  </h1>
                  <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                    <div className="d-flex flex-center">
                      <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={
                          this.onSuggestionsFetchRequested
                        }
                        onSuggestionsClearRequested={
                          this.onSuggestionsClearRequested
                        }
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                        className="search__menu-input"
                      />
                      <button type="submit" className="btn btn-red">
                        Search
                      </button>
                      <p>{data.id}</p>
                    </div>
                  </form>
                </div>
                <div>
                  <img
                    src={Heroes}
                    alt="Marvel Heroes"
                    draggable="false"
                    className="search__img"
                  />
                </div>
              </div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
