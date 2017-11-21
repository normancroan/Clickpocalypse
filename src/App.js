import React, { Component } from 'react';
import './App.css';
import Resources from './components/Resources'
import Power from './components/Power'

class App extends Component {
  state = {
    power: 0,
    multiplier: 1,
    shouldProgressAutomatically: true
  }
  componentDidMount(){
    if(this.state.shouldProgressAutomatically){
      setInterval(() => {
        this.setState((prevState) => ({power: prevState.power += this.state.multiplier}))
      }, 100)
    }
  }
  handleResourceButtonClicked = (incrementMultiplierBy) => {
    this.setState((prevState) => ({
      multiplier: prevState.multiplier += incrementMultiplierBy
    }))
  }
  render() {
    return (
      <div className="App">
        <Power 
          power={this.state.power} 
          multiplier={this.state.multiplier} 
          />
        <Resources 
        handleResourceButtonClicked={this.handleResourceButtonClicked}
        />
      </div>
    );
  }
}

export default App;
