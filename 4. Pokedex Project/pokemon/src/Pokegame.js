import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 3, name: 'Charmander', type: 'Fire', base_experience: 62 },
      { id: 68, name: 'Squirtle', type: 'Water', base_experience: 63 },
      { id: 45, name: 'Metapod', type: 'Bug', base_experience: 72 },
      { id: 34, name: 'Butterfree', type: 'Flying', base_experience: 178 },
      { id: 87, name: 'Pikachu', type: 'Electric', base_experience: 112 },
      { id: 12, name: 'Jigglypuff', type: 'Normal', base_experience: 95 },
      { id: 78, name: 'Gengar', type: 'Poison', base_experience: 225 },
      { id: 76, name: 'Eevee', type: 'Nornal', base_experience: 65 }
    ]
  };

  render () {
    let hand1 = [];
    let hand2 = [ ...this.props.pokemon ];

    while (hand1.length < hand2.length) {
      let randInx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randInx, 1)[0];
      hand1.push(randPokemon);
    }

    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
      <div>
        <h1>Pokegame</h1>
        <Pokedex pokemon = {hand1} exp = {exp1} isWinner = {exp1 > exp2} />
        <Pokedex pokemon = {hand2} exp = {exp2} isWinner = {exp1 < exp2} />
      </div>
    )
  }
}

export default Pokegame;