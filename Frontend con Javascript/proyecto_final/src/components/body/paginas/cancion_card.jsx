import React, { Component } from 'react'
import { Player } from 'react-simple-player'

class CancionCard extends Component {
    constructor(props) {
        super(props);
        this.img = require(`../../../assets/imagenes/${this.props.cancion.icono}`)
        this.state = {}
    }

    render() {
        const src = require(`../../../assets/musica/${this.props.cancion.ruta}`)
        return (
            <div className='card col-12 col-md-6 col-lg-4 col-xl-3 mt-1 mb-1'>
                <div className='card-icon d-flex justify-content-center align-items-center'>
                    <img src={this.img} className="img-fluid" alt={`Icono de ${this.props.cancion.nombre}`} />
                </div>
                <div className='card-body text-center'>
                    <div className='card-title lead fw-bold'>
                        {this.props.cancion.nombre}
                    </div>
                    <div className='card-player'>
                        <Player src={src} height={40} accent={[39, 128, 227]} hideVolume></Player>
                    </div>
                </div>
            </div>
        );
    }
}

export default CancionCard;