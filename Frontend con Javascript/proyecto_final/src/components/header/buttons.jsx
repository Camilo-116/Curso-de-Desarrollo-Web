/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

class NavButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    navigate = (event, pagina) => {
        this.props.navigation(pagina);
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-4 d-flex flex-row justify-content-center align-items-center p-0">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <a className={`nav-link ${(this.props.pagina === 0) ? 'text-secondary' : 'text-primary'}`} href="#" onClick={event => this.navigate(event, 0)}>Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${(this.props.pagina === 1) ? 'text-secondary' : 'text-primary'}`} href="#" onClick={event => this.navigate(event, 1)}>Canciones</a>
                        </li>
                    </ul>
                </div>
                <div className='col-4 d-flex flex-row justify-content-lg-end align-items-center p-0'>
                    <ul className="nav nav-pills w-100 d-flex justify-content-end">
                        <li className=" nav-item bg-primary rounded me-1">
                            <a className={`nav-link ${(this.props.contacto) ? 'text-secondary shadow' : 'text-light'}`} href="#" onClick={event => this.navigate(event, 2)}>Contacto</a>
                        </li>
                        <li className="nav-item bg-primary rounded ms-1 me-1">
                            <a className={`nav-link ${(this.props.pagina === 3) ? 'text-secondary shadow' : 'text-light'}`} href="#" onClick={event => this.navigate(event, 3)}>Iniciar sesión</a>
                        </li>
                        <li className="nav-item bg-primary rounded ms-1">
                            <a className={`nav-link ${(this.props.pagina === 4) ? 'text-secondary shadow' : 'text-light'}`} href="#" onClick={event => this.navigate(event, 4)}>Registrarse</a>
                        </li>
                    </ul>
                </div>
            </React.Fragment>


        );
    }
}

export default NavButtons;
