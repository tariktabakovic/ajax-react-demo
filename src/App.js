import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

const API_ENDPOINT = 'https://swapi.co/api/people/1/';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
        name: 'not their real name'
    };
  }

  componentDidMount(){
    // This is the method that react calls after the component has been attached to the DOM, as a real element
    // This is the first React method where it is safe to call this.setState
    axios.get(API_ENDPOINT)
      .then(response =>{
        console.log(response.data.name);
        this.setState({
          name: response.data.name
        })
      })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">    
        {this.state.name} 
        </header>
      </div>
    );
  };
}


export default App;
