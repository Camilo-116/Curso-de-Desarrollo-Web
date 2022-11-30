import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      horas: 0,
      minutos: 0,
      segundos: 0,
      millis: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        segundos: (prevState.millis + 10 >= 1000) ? prevState.segundos + 1 : prevState.segundos,
        minutos: (prevState.segundos + 1 >= 60) ? prevState.minutos + 1 : prevState.minutos,
        horas: (prevState.minutos + 1 >= 60) ? prevState.horas + 1 : prevState.horas,
        millis: (prevState.millis + 10 >= 1000) ? 0 : prevState.millis + 10,
      }))
    },10)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div class="container text-center border mt-5 px-5 pb-3">
        <div class="row justify-content-center my-2">
          <span class="h1 fw-bold">Cronómetro</span>
        </div>
        <div class="row d-flex flex-row flex-nowrap align-items-center justify-content-around border">
          <span class="h3">{this.state.horas.toString().padStart(2,'0')}</span>
          <span class="h2">:</span>
          <span class="h3">{this.state.minutos.toString().padStart(2,'0')}</span>
          <span class="h2">:</span>
          <span class="h3">{this.state.segundos.toString().padStart(2,'0')}</span>
          <span class="h2">:</span>
          <span class="h3">{this.state.millis.toString().padStart(4,'0')}</span>
        </div>
      </div>
    );
  }
}

export default App;
