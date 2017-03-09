import React, { Component } from 'react';
import portrait from './portfolio_pictures/portrait.jpg';
import './App.css';
import ProjectList from './containers/ProjectList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={portrait} className="App-logo" alt="logo" />
          <h2>Hi, I'm Tony</h2>
        </div>
        <p className="App-intro">
        </p>
        <div className="project-list">
          <ProjectList />
        </div>
      </div>

    );
  }
}

export default App;
