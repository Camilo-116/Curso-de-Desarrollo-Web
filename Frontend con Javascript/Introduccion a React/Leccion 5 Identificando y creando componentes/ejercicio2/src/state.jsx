import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class State extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: props.show,
        }
    }
    render() {
        return (
            <div class="container">
                {this.state.show ?
                    <div class="row">
                        <p>{this.props.mensaje}</p>
                    </div>
                    : null}

                <button class="btn btn-primary" onClick={() => this.setState({ show: !this.state.show })}>Cambiar</button>
            </div>
        )
    }
}

export default State;