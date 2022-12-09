/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import '../../styles/body.css';
import Inicio from './paginas/inicio.jsx';
import Canciones from './paginas/canciones.jsx';
import Login from './paginas/login.jsx';
import Registro from './paginas/registro.jsx';

class Body extends React.Component {


    render() {
        switch (this.props.pagina) {
            case 0:
                return <Inicio />;
            case 1:
                return <Canciones />;
            case 3:
                return <Login />;
            case 4:
                return <Registro />;
            default:
                return <Inicio />;
        }
    }
}

export default Body;