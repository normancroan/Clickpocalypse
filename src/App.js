import React, { Component } from 'react';
import './App.css';
import Resource from './components/Resource'
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
      }, 1000)
    }
  }
  render() {
    return (
      <div className="App">
        <Power power={this.state.power} multiplier={this.state.multiplier} />
        <div className="Resources">
          <Resource resourceType="Basic Resource" resourceIncreaseBy={1}/>
          <Resource resourceType="Advanced Resource" resourceIncreaseBy={3}/>
          <Resource resourceType="MEGA Resource" resourceIncreaseBy={15}/>
        </div>
      </div>
    );
  }
}

export default App;
