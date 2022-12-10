import React, { Component } from 'react'
import CancionCard from './cancion_card.jsx'

class Canciones extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
        this.state = {
            input: ''
        }
    }

    componentDidMount() {
        this.inputRef.current.addEventListener('input', () => {
            this.setState({ input: this.inputRef.current.value })
        })
    }

    matchesInput(nombreCancion) {
        return nombreCancion.toLowerCase().includes(this.state.input.toLowerCase())
    }

    render() {
        let cards = []
        if (this.props.canciones.length > 0) {
            cards = this.props.canciones.map(cancion => {
                return this.matchesInput(cancion.nombre) ? <CancionCard cancion={cancion} /> : null
            })
        }
        return (
            <div id="canciones" className="d-flex flex-column">
                <div className='lead h1 fs-3 fw-bold text-dark'>
                    Explora canciones
                </div>
                <div className='form-group col-12 rounded'>
                    <input type="text" className='form-control' ref={this.inputRef} placeholder='Nombre de la canción...' />
                </div>
                <div className='card-rack d-flex flex-row flex-wrap ps-2 pt-2 pe-2'>
                    {cards}
                </div>
            </div>
        );
    }
}

export default Canciones;