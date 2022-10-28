import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      registrado: false,
      correo: '',
      contraseña: ''
    }
  }

  registrar = () => {
    this.setState({
      registrado: true,
      correo: this.correo.value,
      contraseña: this.pass.value
    })
  }

  nuevoRegistro = () => {
    this.setState({
      registrado: false,
      correo: '',
      contraseña: ''
    })
  }

  render() {
    if (this.state.registrado)
      return (
        <div class="container w-25 px-5 pt-5">
          <div class="col">
            <h1 class="text-info">Registrado exitosamente</h1>
            <p>Su correo electrónico es: <b>{this.state.correo}</b></p>
            <div class="text-center">
              <button type="button" class="btn btn-info align-center" onClick={this.nuevoRegistro}>Registrar nuevo usuario</button>
            </div>
          </div>
        </div>
      )
    return (
      <div class="container w-25 px-5 pt-5">
        <h1 class="text-info text-center">Registro</h1>
        <div class="col">
          <form>
            <div class="form-group mb-3">
              <label for="correo" class="fw-bold">Correo electrónico</label>
              <div class="input-group mt-2" id="correo">
                <div class="input-group-prepend"><span class="fa fa-envelope p-3 bg-info"></span></div>
                <input type="email" class="form-control" placeholder="Introduce tu correo..." ref={input => this.correo = input}></input>
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="pass" class="fw-bold">Contraseña</label>
              <div class="input-group mt-2" id="pass">
                <div class="input-group-prepend"><span class="fa fa-key p-3 bg-info"></span></div>
                <input type="password" class="form-control" placeholder="Introduce tu contraseña..." ref={input => this.pass = input}></input>
              </div>
            </div>
            <div class="text-center">
              <button type="button" class="btn btn-info align-center" onClick={this.registrar}>Registrar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
