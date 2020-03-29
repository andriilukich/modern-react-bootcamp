import React, { Component } from 'react';
import About from './About';
import Dog from './Dog';
import Contacts from './Contacts';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'about' };
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  renderPage() {
    if (this.state.page === 'about')  return <About /> 
    else if (this.state.page === 'dog')  return <Dog /> 
    else if (this.state.page === 'contacts')  return <Contacts /> 
  }

  render() {
    return (
      <div className="App">
        <nav>
          <a onClick={() => this.changePage('about')}>About</a>
          <a onClick={() => this.changePage('dog')}>Dog</a>
          <a onClick={() => this.changePage('contacts')}>Contacts</a>
        </nav>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
