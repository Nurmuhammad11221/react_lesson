import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state  = {
      user: []
    }

  }

  

  


  async componentDidMount() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json(); 
    this.setState({users});
  }


  render() {
    return (
      <div className="App">
          <User data={this.state.user} />
      </div>
    );
  }
}

export default App;
