import React, { Component } from 'react'

class Reproductor extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const src = require(`../../../assets/musica/${this.props.cancion.nombre}`)
        return (
            <div className='reproductor'>
                <div className='container'>
                    <div className='row'>
                        <div className='d-xs-none col-4 lead'>
                            {this.props.cancion.nombre}
                        </div>
                        <div className='col-xs-12 col-8'>
                            <audio src={src}></audio>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reproductor;