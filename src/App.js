import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

const API_ENDPOINT = 'https://swapi.co/api/people/1/';

function urlForId(id){
  return `https://swapi.co/api/people/${id}/`;
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
        name: '',
        currentId: 1
    };
  }

  componentDidMount(){
    // This is the method that react calls after the component has been attached to the DOM, as a real element
    // This is the first React method where it is safe to call this.setState
    axios.get(urlForId(this.state.currentId))
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
        <button></button>
        <header className="App-header">    
        {this.state.name}
        </header>
      </div>
    );
  };
}


export default App;
