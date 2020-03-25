import React, { Component } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Joke from './Joke';
import './JokeList.css';

class JokeList extends Component {
  static defaultProps = {
    numJokesGet: 10
  }

  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem('jokes') || "[]"),
      loading: false
    };
    this.seenJoke = new Set(this.state.jokes.map(j => j.text));
    this.handleNewJokes = this.handleNewJokes.bind(this);
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }

  async getJokes() {
    try {
      let jokes = [];

      while (jokes.length < this.props.numJokesGet) {
        let res = await axios.get("https://icanhazdadjoke.com/", {
          headers: { Accept: 'application/json' }
        });
        let newJoke = res.data.joke;
        if (!this.seenJoke.has(newJoke)) {
          jokes.push({ id: uuidv4(), text: newJoke, votes: 0 });
        } else {
          console.log('Found a duplicate');
          console.log('newJoke');
        }
      }

      this.setState(st => ({
        loading: false,
        jokes: [...st.jokes, ...jokes]
      }),
        () =>
          window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
      );
    } catch (err) {
      alert(err);
      this.setState({ loading: false });
    }
  }

  handleVote(id, delta) {
    this.setState(st => ({
      jokes: st.jokes.map(j =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      )
    }),
      () =>
        window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    );
  }

  handleNewJokes() {
    this.setState({ loading: true }, this.getJokes);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList__spinner">
          <i className="fas fa-8x fa-laugh fa-spin" />
          <h1 className="Joke__title">Loading...</h1>
        </div>
      )
    }
    let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
    return (
      <div className="JokeList">
        <div className="JokeList__sidebar">
          <h1 className="JokeList__title">
            <span className="JokeList__highlighted-title">Dad</span> Joke
          </h1>
          <img className="JokeList__img" src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt="laughing emoji" />
          <button className="JokeList__btn" onClick={this.handleNewJokes}>Fetch Jokes</button>
        </div>
        <div className="JokeList__list-container">
          {jokes.map(joke => (
            <Joke
              key={joke.id}
              text={joke.text}
              vote={joke.votes}
              upvote={() => this.handleVote(joke.id, 1)}
              downvote={() => this.handleVote(joke.id, -1)}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default JokeList;