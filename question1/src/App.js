import React, { Component } from 'react';
import './App.css';
import Question1 from "./Question1.js"
import LandingPage from "./LandingPage.js"
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom"

class App extends Component {



  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/landingpage" render={props => {
            return (
              <LandingPage
              />
            );
          }} />
          <Route exact path="/" render={props => {
            return (
              <Question1
              />
            );
          }} />
          <Route
            path="/*"
            render={props => {
              return <Redirect to="/" />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
