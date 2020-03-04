import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    let title;

    if(this.props.isWinner) {
      title = <h2 className='Pokedex__winner'>Winning hand!</h2>;
    } else {
      title = <h2 className='Pokedex__loser'>Losing hand!</h2>;  
    }
    return (
      <div className='Pokedex'>
        {title}
        {/* <p className="Pokedex__result"> {this.props.isWinner ? 'WINNER!' : 'LOSER!'} </p> */}
        <h4 className="Pokedex__total-ex">Total Experience: {this.props.exp}</h4>
        <div className='Pokedex__cards'>
          {this.props.pokemon.map((p) => (
            <Pokecard key = {p.id} id = {p.id} name = {p.name} type = {p.type} exp = {p.base_experience} />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex;