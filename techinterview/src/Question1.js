import React, { Component } from 'react';
import './stylesheets/Question1.css';
import Randomize from "./Randomize.js"
import FindMean from "./FindMean.js"
import FetchTable from "./FetchTable.js"
import SmileyFace from "./SmileyFace.js"
import { Link } from "react-router-dom"

class Question1 extends Component {


  render() {
    return (
      <div className="question1">
        <Randomize/>
        <FindMean/>
        <br/>
        <FetchTable/>
        <SmileyFace/>
        <button><Link to="/landingpage">Go to Question 2</Link></button>
      </div>
    );
  }
}

export default Question1;
