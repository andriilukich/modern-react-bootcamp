import React from 'react';
import Timer from './Timer';
import ZenQuotes from './ZenQuotes';
import GitHubUserInfo from './GitHubUserInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      <GitHubUserInfo username="facebook"/>
      <GitHubUserInfo username="colt"/>
      <GitHubUserInfo username="andriilukich"/>
    </div>
  );
}

export default App;
