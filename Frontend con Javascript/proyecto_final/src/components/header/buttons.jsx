/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

class NavButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            px: 0,
            py: 0
        }
    }

    handleResize = () => {
        // if (window.innerWidth < 768) {
        //     this.setState({ px: 0, py: 0 })
        // } else {
        //     this.setState({ px: 1, py: 1 })
        // }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
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
                            <button className={`nav-link ${(this.props.pagina === 0) ? 'text-secondary' : 'text-primary'}`} onClick={event => this.navigate(event, 0)}>Inicio</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${(this.props.pagina === 1) ? 'text-secondary' : 'text-primary'}`} onClick={event => this.navigate(event, 1)}>Canciones</button>
                        </li>
                    </ul>
                </div>
                <div className='col-4 d-flex flex-row justify-content-lg-end align-items-center p-0'>
                    <ul className="nav nav-pills w-100 d-flex justify-content-end">
                        <li className="d-flex align-items-center nav-item bg-primary rounded me-1">
                            <button className={`filled nav-link py-1 px-2 py-xl-2 px-xl-4 ${(this.props.contacto) ? 'text-secondary shadow' : 'text-light'}`} href="#" onClick={event => this.navigate(event, 2)}>Contacto</button>
                        </li>
                        <li className="d-flex align-items-center nav-item bg-primary rounded ms-1 me-1">
                            <button className={`filled nav-link py-1 px-2 py-xl-2 px-xl-4 ${(this.props.pagina === 3) ? 'text-secondary shadow' : 'text-light'}`} href="#" onClick={event => this.navigate(event, 3)}>Iniciar sesión</button>
                        </li>
                        <li className="d-flex align-items-center nav-item bg-primary rounded ms-1">
                            <button className={`filled nav-link py-1 px-2 py-xl-2 px-xl-4 ${(this.props.pagina === 4) ? 'text-secondary shadow' : 'text-light'}`} href="#" onClick={event => this.navigate(event, 4)}>Registrarse</button>
                        </li>
                    </ul>
                </div>
            </React.Fragment>


        );
    }
}

export default NavButtons;
