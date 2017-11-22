import React, { Component } from 'react';
import './App.css';
import Resources from './components/Resources'
import Power from './components/Power'
import Attributes from './components/Attributes'

class App extends Component {
  state = {
    power: 0,
    multiplier: 1,
    shouldProgressAutomatically: false,
    mana: 100,
    manaMultiplier: 1,
    manaMax: 100
  }
  componentDidMount(){
    if(this.state.shouldProgressAutomatically){
      setInterval(() => {
        this.setState((prevState) => ({
          power: prevState.power += this.state.multiplier,
          mana: prevState.mana <= this.state.manaMax ?  prevState.mana += this.state.manaMultiplier : prevState.mana
        }))
      }, 100)
    }
  }
  handleResourceButtonClicked = (incrementMultiplierBy, cost) => {
    if(this.state.mana >= cost){
      this.setState((prevState) => ({
        multiplier: prevState.multiplier += incrementMultiplierBy,
        mana: prevState.mana - cost
      }))
    }
  }
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Power 
            power={this.state.power} 
            multiplier={this.state.multiplier} 
            />
          </div>
          <Resources 
          handleResourceButtonClicked={this.handleResourceButtonClicked}
          mana={this.state.mana}
          />
          <Attributes mana={this.state.mana} className="Attributes"/>
      </div>
    );
  }
}

export default App;
