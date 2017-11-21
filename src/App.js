import React, { Component } from 'react';
import './App.css';
import Resources from './components/Resources'
import Power from './components/Power'
import Attributes from './components/Attributes'

class App extends Component {
  state = {
    power: 0,
    multiplier: 1,
    shouldProgressAutomatically: true,
    mana: 32
  }
  componentDidMount(){
    if(this.state.shouldProgressAutomatically){
      setInterval(() => {
        this.setState((prevState) => ({
          power: prevState.power += this.state.multiplier,
          mana: prevState.mana <= 100 ?  prevState.mana += 1 : prevState.mana
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
        <Power 
          power={this.state.power} 
          multiplier={this.state.multiplier} 
          />
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
