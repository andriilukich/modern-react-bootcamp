import React, { Component } from 'react';
import About from './About';
import Dog from './Dog';
import Contacts from './Contacts';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
 
class App extends Component {
  render() {
    return(
      <div className="App">
        <nav>
          <NavLink exact activeClassName="active-link" to='/' >
            About
          </NavLink> 
          <NavLink exact activeClassName="active-link" to='/dog' >
            Dog
          </NavLink>
          <NavLink exact activeClassName="active-link" to='/dog/r' >
            Dog(R)
          </NavLink>
          <NavLink exact activeClassName="active-link" to='/dog/c' >
            Dog(C)
          </NavLink>
          <NavLink exact activeClassName="active-link" to='/contacts'>
            Contacts
          </NavLink>
        </nav>
        <Switch> 
          <Route exact path="/" component={About} />
          <Route exact path="/dog" component={() =>  <Dog name='Maffin' />} />
          <Route exact path="/dog/c" component={() =>  <Dog name='Candy' />} />
          <Route exact path="/dog/r" render={() =>  <Dog name='Cake' />} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </div>
    )
  }
}

export default App;


/* class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'about' };
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  renderPage() {
    if (this.state.page === 'about') return <About />
    else if (this.state.page === 'dog') return <Dog />
    else if (this.state.page === 'contacts') return <Contacts />
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

export default App; */
