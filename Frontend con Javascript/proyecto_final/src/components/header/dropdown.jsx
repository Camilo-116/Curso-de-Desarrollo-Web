/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

class NavDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    navigate = (pagina) => {
        this.props.navigation(pagina);
    }

    render() {
        return (
            <div className='drop col-8 d-flex justify-content-end align-items-center p-0 me-5'>
                <div className="dropdown">
                    <button className="btn btn-outline-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa fa-bars"></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button className={`dropdown-item ${(this.props.pagina === 0) ? 'active' : ''}`} onClick={()=>this.navigate(0)} >Inicio</button></li>
                        <li><button className={`dropdown-item ${(this.props.pagina === 1) ? 'active' : ''}`} onClick={()=>this.navigate(1)} >Canciones</button></li>
                        <li><button className={`dropdown-item ${(this.props.pagina === 3) ? 'active' : ''}`} onClick={()=>this.navigate(3)} >Iniciar seión</button></li>
                        <li><button className={`dropdown-item ${(this.props.pagina === 4) ? 'active' : ''}`} onClick={()=>this.navigate(4)} >Registrarse</button></li>
                        <li><button className={`dropdown-item ${(this.props.pagina === 2) ? 'active' : ''}`} onClick={()=>this.navigate(2)} >Contacto</button></li>
                    </ul>
                </div></div>
        );
    }
}

export default NavDropdown;