import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class State extends React.Component {
    constructor() {
        super()
        this.state = {
            toggle: false,
        }
    }
    render() {
        return (
            <div class="container">
                <div class="row">
                    <h1 className={this.state.toggle ? 'rojo' : 'verde'}>Este es el estado del título</h1>
                    <p className={`'text-center' ${this.state.toggle ? 'verde' : 'rojo'}`}>Este es el estado del componente</p>
                </div>
                <button class="btn btn-primary" onClick={() => this.setState({ toggle: !this.state.toggle })}>Cambiar</button>
            </div>
        )
    }
}

export default State;