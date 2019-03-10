import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import Loading from "./Loading";
import CharacterPage from "./CharacterPage";

export class Character extends Component {
  state = {
    characterById: []
  };

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${
          process.env.REACT_APP_MARVEL_PUBLIC_KEY
        }`
      )
      .then(res => {
        // console.log(res.data);
        this.setState({
          characterById: res.data.data.results[0]
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { characterById } = this.state;

    if (characterById) {
      return <CharacterPage character={characterById} />;
    } else {
    }
    return (
      <Consumer>
        {value => {
          const { character } = value;
          if (character === undefined || character.length === 0) {
            return <Loading />;
          } else {
            return <CharacterPage character={character} />;
          }
        }}
      </Consumer>
    );
    // }
  }
}

export default Character;
