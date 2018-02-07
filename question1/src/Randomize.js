import React, { Component } from 'react';

class Randomize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [22, 14, 3, 4, 37, 6, 7, 81, 9, 10]
    };
    this.randomize = this.randomize.bind(this);
  }

  randomize(e) {
    e.preventDefault();
    let arr = this.state.numbers
    let index = arr.length
    let random, temp;

    while (index > 0) {
      random = Math.floor(Math.random() * index)
      index--
      //swap
      temp = arr[index]
      arr[index] = arr[random]
      arr[random] = temp
    }
    this.setState({
      numbers: arr,
    });
  }


  render() {
    let numbers = this.state.numbers.join(", ")
      return (
        <div>
          <p>{numbers}</p>
          <button onClick={(e) => this.randomize(e)}>1: Randomize</button>
        </div>
    );
  }
}

export default Randomize;
