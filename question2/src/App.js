import React, { Component } from 'react';
import './stylesheets/App.css';
import './stylesheets/Footer.css';
import './stylesheets/Main.css';
import './stylesheets/Nav.css';
import logo from "./imgs/SamanthaHall_Logo.png"
import logo_reversed from "./imgs/SamanthaHall_Logo_reversed.png"
import twitter from './imgs/white-twitter-256.png'
import facebook from './imgs/white-facebook-256.png'
import headshot from "./imgs/headshot_noBG_cropped.png"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {email: '', zip: ''},
      error: ""
    };
    this.updateResponseState = this.updateResponseState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateResponseState(e) {
    const field = e.target.name;
    const response = this.state.response;
    response[field] = e.target.value;
    this.setState({
      response: response
    })
    console.log(this.state.response)
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.response.zip === "" || this.state.response.email === "") {
      this.setState({
        error: "Please fill in your email and zip"
      })
    }
    else if (!(/^\d{5}(-\d{4})?$/.test(this.state.response.zip))) {
      this.setState({
        error: "Please enter a valid zip code"
      })
    }
    else if (!(/\S+@\S+\.\S+/.test(this.state.response.email))) {
      this.setState({
        error: "Please enter a valid email address"
      })
    }
    else {
      this.setState({
        error: "Thank you!  We collected your info"
      })
    }
  }

  render() {
    let errorClass = this.state.error === "Thank you!  We collected your info" ? "black" : "red"

    return (
      <div className="App">
        <nav>
          <div className="nav__logo">
            <img src={logo} alt="logo: samantha hall for senate"/>
          </div>
          <div className="nav__links">
            <img src={twitter} alt="twitter icon"/>
            <img className="facebook" src={facebook} alt="facebook icon"/>
            <button><i className="far fa-money-bill-alt"></i>Donate</button>
          </div>
        </nav>
        <main>
          <div className="headshot" >
            <img src={headshot} alt="Samantha Hall"/>
          </div>
          <div className="right-side column">
            <h2>The <span className="lighter">Right Choice</span><br/> for Texas</h2>
            <div className="hover column">
              <div className="hover background"></div>
              <div className="hover__content column">
                <h3>Join Samantha!</h3>
                <p>Sign up to receive the latest campaign updates.</p>
                <form onSubmit={this.handleSubmit}>
                  <input onChange={this.updateResponseState} className="input__email" type="text" name="email" placeholder=" Email"/>
                  <input onChange={this.updateResponseState} className="input__zip" type="text" name="zip" placeholder=" ZIP"/>
                  <button type="submit">Join <i className="fas fa-angle-right"></i></button>
                </form>
                <p className={errorClass}>{this.state.error}</p>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div>
          </div>
          <div>
            <img src={logo_reversed} alt="logo: samantha hall for senate"/>
            <p>555 Main Street, Austin, TX 98765</p>
            <p><span className="underline">Privacy Policy</span> | &copy; 2016 Samantha Hall for Congress.  All Rights Reserved</p>
            <br/>
          </div>
          <div className="border">Paid for by Samantha Hall for Congress.</div>
        </footer>
      </div>
    );
  }
}

export default App;
