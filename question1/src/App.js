import React, { Component } from 'react';
import './App.css';
import Randomize from "./Randomize.js"
import FindMean from "./FindMean.js"
import FetchTable from "./FetchTable.js"
import SmileyFace from "./SmileyFace.js"


class App extends Component {



  render() {
    return (
      <div className="App">
        <Randomize/>
        <FindMean/>
        <br/>
        <FetchTable/>
        <SmileyFace/>
      </div>
    );
  }
}

export default App;
