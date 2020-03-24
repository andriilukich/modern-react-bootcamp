import React, { Component } from 'react';
import axios from 'axios';

class ZenQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: '' };
  }

  componentDidMount() {
    axios.get('https://api.github.com/zen').then(response => {
      // console.log(response);
      this.setState({ quote: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1>Always remember...</h1>
        <p>{this.state.quote}</p>
      </div>
    );
  }
}

export default ZenQuotes;