import React, { Component } from 'react';
import './App.css';
import axios from "axios";


class FetchTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleLoaded: false,
      people: [],
    };
    this.fetchPeople = this.fetchPeople.bind(this);
  }


  fetchPeople(e) {
    e.preventDefault();
    axios({
     method: "GET",
     url: "http://bptest.net/devtest/data.php",
    })
    .then(response => {
      if (response.status === 200) {
        this.setState({
          people: response.data,
          peopleLoaded: true
        });
        console.log(this.state)
      }
    })
    .catch(err => {
      console.log("fail")
    })
  }

  render() {
    let people = this.state.people.map((person, i) => {
      return (
        <tr key={i}>
          <td>{person.firstname}</td>
          <td>{person.lastname}</td>
          <td>{person.email}</td>
          <td>{person.gender}</td>
        </tr>
      )
    })
    let question3 = this.state.peopleLoaded ?
    (<table>
      <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
        {people}
      </tbody>
    </table>):(<button onClick={(e) => this.fetchPeople(e)}>3. Fetch Table</button>)
    return (
      <div>
        {question3}
      </div>
    );
  }
}

export default FetchTable;
