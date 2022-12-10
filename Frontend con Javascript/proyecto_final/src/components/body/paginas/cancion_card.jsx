import React, { Component } from 'react'

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
                        <audio className='rounded' controls>
                            <source src={src} type="audio/mp3" />
                        </audio>
                    </div>
                </div>
            </div>
        );
    }
}

export default CancionCard;