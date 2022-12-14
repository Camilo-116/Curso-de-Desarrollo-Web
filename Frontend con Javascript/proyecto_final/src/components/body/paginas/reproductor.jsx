import React, { Component } from 'react'
import '../../../styles/body.css'
import { Player } from 'react-simple-player'

class Reproductor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: false
        }
    }

    handleResize = () => {
        if (window.innerWidth < 768) {
            this.setState({ mobile: true })
        } else {
            this.setState({ mobile: false })
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize.bind(this));
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize.bind(this));
    }

    render() {
        const src = require(`../../../assets/musica/${this.props.cancion.ruta}`)
        return (
            <div className='reproductor container position-relative'>
                <div className='row pt-2 pb-2 no-gutters border-bottom'>
                    <div className='d-none d-sm-block col-4 p-0 lead fw-bold text-primary text-start'>
                        {this.props.cancion.nombre}
                    </div>
                    <div className='col-xs-12 col-8 ps-2'>
                        <Player src={src} height={40} hideVolume={this.state.mobile} accent={[39, 128, 227]} ></Player>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reproductor;