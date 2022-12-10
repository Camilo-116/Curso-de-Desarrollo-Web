import React, { Component } from 'react'
import Carousel from './carousel.jsx'
import Reproductor from './reproductor.jsx';

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let tiles = []
        if (this.props.canciones_top) {
            for (let i = 0; this.props.canciones_top.length; i++) {
                tiles.add(<Reproductor cancion={this.props.canciones_top[i]} />)
            }
        }
        return (
            <div id="inicio" className='d-flex flex-column'>
                <div className='index-card w-100 container'>
                    <div className='row h-100 ps-4 pt-5 pb-5 pe-5'>
                        <div className='info col-sm-6 col-xs-12 h-100'>
                            <div className='col-12 align-self-center h-100 d-flex flex-column justify-content-start'>
                                <div className='h1 lead fw-bold'>Canciones gratis para la comunidad!</div>
                                <div className='pt-4 pb-4'>Con este sitio podrás escuchar audios de manera libre...</div>
                                <div>
                                    <button className='btn btn-primary rounded'>Ver Canciones</button>
                                </div>
                            </div>
                        </div>
                        <div className='imagen col-sm-6 col-xs-12 h-100 p-0 overflow-hidden position-relative'>
                            {Carousel()}
                        </div>
                    </div>
                </div>
                <div className='top-songs w-100 container text-center mt-4'>
                    <div className='h2 fw-bold border-top pt-2 pb-2'>
                        Top Canciones
                    </div>
                    <div className='row border-top border-bottom border-2 shadow-sm pt-1 pb-1'>
                        <div className='d-xs-none col-4 lead'>
                            Nombre
                        </div>
                        <div className='col-xs-12 col-8'>
                            Canción
                        </div>
                    </div>
                    {(tiles.length > 0) ? tiles : null}
                </div>
            </div>
        );
    }
}

export default Inicio;