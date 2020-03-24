import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
    this.handelNewCard = this.handelNewCard.bind(this);
  }

  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    console.log(deck);
    this.setState({ deck: deck.data });
  }

  async handelNewCard() {
    let deck_id = this.state.deck.deck_id;

    try {
      let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
      let cardRes = await axios.get(cardUrl);
      // console.log(cardRes);
      if(!cardRes.data.success) throw new Error('No cards remaining');

      let card = cardRes.data.cards[0];

      this.setState(st => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            img: card.image,
            name: `${card.code} of ${card.suit} `,
          }
        ]
      }));
    } catch(err) {
      console.log(err);
    }
    

  }

  render() {
    const cards = this.state.drawn.map(c => (
      <Card url={c.img} name={c.name} key={c.name} />
    )) 
    return (
      <div className="Deck">
        <h1 className="Deck__title" >Card Dealer</h1>
        <h2 className="Deck__sub-title">A little demo made with React</h2>
        <button className="Deck__btn" onClick={this.handelNewCard}>
          GET A CARD
        </button>
        <div className="Deck__cards-area">{cards}</div>
      </div>
    )
  }
}

export default Deck;