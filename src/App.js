import React, { Component } from 'react';
import './App.css';
import Resources from './components/Resources'
import Power from './components/Power'
import Attributes from './components/Attributes'
import Assets from './components/Assets'

class App extends Component {
  state = {
    power: 0,
    multiplier: 1,
    shouldProgressAutomatically: true,
    hasGenerators: false,
    mana: 100,
    manaMultiplier: 1,
    manaMax: 100,
    assets: []
  }
  componentDidMount(){
    if(this.state.shouldProgressAutomatically){
      setInterval(() => {
        if(this.state.hasGenerators){
          this.setState((prevState) => ({
            power: prevState.power += this.state.multiplier,
          }))
        }
        this.setState((prevState) => ({
          mana: prevState.mana <= this.state.manaMax ?  prevState.mana += this.state.manaMultiplier : prevState.mana
        }))
      }, 100)
    }
  }
  handleResourceButtonClicked = (type, amount, cost) => {
    if(this.state.mana >= cost){
      switch(type){
        case "power":
          this.setState((prevState) => ({
            power: prevState.power += amount,
            mana: prevState.mana - cost
          }))
          break;
        case "generator":
          this.setState((prevState) => ({
            multiplier: prevState.multiplier += amount,
            mana: prevState.mana - cost
          }))
          break;
        default:
          break;
      }
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
          <div className="Container">
            <Assets />
            <Attributes mana={this.state.mana} className="Attributes"/>
              <Resources 
              handleResourceButtonClicked={this.handleResourceButtonClicked}
              mana={this.state.mana}
              />
          </div>
      </div>
    );
  }
}

export default App;
