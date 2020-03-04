import React, {Component} from 'react';
import './Pokecard.css';
// const POKE_API = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
  render () {
    const {id, name, type, exp} = this.props;
    let imgSrc = `${POKE_API}${padToThree(id)}.png?raw=true`;

    return (
      <div className='Pockecard'>
        <h1 className='Pokecard__title'>{name}</h1>
        <div className='Pokecard__image-container'>
          <img className='Pokecard__img' src={imgSrc} alt={name} />
        </div>
        <div className='Pockecard__data'>Type: {type} </div>
        <div className='Pockecard__data'>EXP: {exp} </div>
      </div>
    )
  }
}

export default Pokecard; 