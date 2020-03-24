import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuotes.css';

class ZenQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: '', isLoaded: true};
  }

  componentDidMount() {
    axios.get('https://api.github.com/zen').then(response => {
      setTimeout(() => {
      this.setState({ quote: response.data, isLoaded: false });
      }, 3000);
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          <div className="loader">
            <div className="loader-inner">
              <div className="loader-line-wrap">
                <div className="loader-line"></div>
              </div>
              <div className="loader-line-wrap">
                <div className="loader-line"></div>
              </div>
              <div className="loader-line-wrap">
                <div className="loader-line"></div>
              </div>
              <div className="loader-line-wrap">
                <div className="loader-line"></div>
              </div>
              <div className="loader-line-wrap">
                <div className="loader-line"></div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ZenQuotes;