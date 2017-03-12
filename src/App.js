import React, { Component } from 'react';
import portrait from './portfolio_pictures/portrait.jpg';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import ProjectDetails from './containers/ProjectDetails';
import ProjectListItem from './components/ProjectListItem';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div id="social-icons">
            <SocialIcon className="social-icon-pointer" url="https://www.github.com/tonyn4444" />
            <SocialIcon className="social-icon-pointer" url="https://www.linkedin.com/in/tony-t-nguyen" />
            <SocialIcon className="social-icon-pointer" url="https://www.twitter.com/tonytweetertwit" />
          </div>

          <div id="intro">
            <img src={portrait} className="App-logo" alt="logo" />
            <h2>Hi, I'm Tony</h2>
            <h3>Here are some projects I've been working on</h3>
          </div>

         

        </div>
        <p className="App-intro">
        </p>
        <div className="project-list">
          <ProjectListItem />
          <ProjectDetails />
        </div>
      </div>

    );
  }
}

export default App;
