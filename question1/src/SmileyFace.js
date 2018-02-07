import React, { Component } from 'react';
import './App.css';

class SmileyFace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smileyDone: false,
      sentence: "Use the shortest possible regular expression or replacement method using php, ruby or javascript to put a smiley face after every word that ends in a vowel in this sentence."
    };
    this.addSmiley = this.addSmiley.bind(this);
  }

  addSmiley(e) {
    e.preventDefault();
    let sentence = this.state.sentence
    var endVowel = (x) => (/[aeiouyAEIOUY]/.test(x.charAt(x.length-1)) || ( /[.,!?]/.test(x.charAt(x.length-1)) && /[aeiouyAEIOUY]/.test(x.charAt(x.length-2))  ))
    let newSentence = sentence.split(" ").map(word => (endVowel(word) ? word.concat(":)") : word)).join(" ")
    this.setState({
      sentence: newSentence,
      smileyDone: true
    })
  }

  render() {
    let bonus = this.state.smileyDone ?
    (<div>
      <p>{this.state.sentence}</p>
    </div>):(
      <div>
        <p>{this.state.sentence}</p>
        <button onClick={(e) => this.addSmiley(e)}>Bonus: Add smileys</button>
      </div>)
    return (
      <div>
        {bonus}
      </div>
    );
  }
}

export default SmileyFace;
