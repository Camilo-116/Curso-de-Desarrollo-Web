import React, { Component } from 'react'
import Slider from './slider.jsx'

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
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
                        <Slider/>
                    </div>
                </div>
                <div className='top-songs w-100 container'>

                </div>
            </div>
        );
    }
}

export default Inicio;