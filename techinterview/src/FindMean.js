import React, { Component } from 'react';
import './App.css';

class FindMean extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meanFound: false,
      numbers: [22, 14, 3, 4, 37, 6, 7, 81, 9, 10],
      mean: 0
    };
    this.findMean = this.findMean.bind(this);
    this.hideMean = this.hideMean.bind(this);
  }

  findMean(e) {
    e.preventDefault();
    let arr = this.state.numbers
    let mean = arr.reduce((acc,item) => acc+item,0)/arr.length
    this.setState({
      mean: mean,
      meanFound: true
    });
  }

  hideMean(e) {
    e.preventDefault();
    this.setState({
      meanFound: false
    });
  }


  render() {
    let numbers = this.state.numbers.join(", ")
    let question2 = this.state.meanFound ?
    (<div>
      <p>Mean: {this.state.mean}</p>
      <button onClick={(e) => this.hideMean(e)}>2: Hide mean</button>
    </div>):(
      <div>
        <p>{numbers}</p>
        <button onClick={(e) => this.findMean(e)}>2: Find mean</button>
      </div>)
    return (
      <div>
        {question2}
      </div>
    );
  }
}

export default FindMean;
