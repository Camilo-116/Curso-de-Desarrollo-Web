/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import '../../styles/body.css';
import Inicio from './paginas/inicio.jsx';
import Canciones from './paginas/canciones.jsx';
import Login from './paginas/login.jsx';
import Registro from './paginas/registro.jsx';

class Body extends React.Component {

    navigate = (pagina) => {
        this.props.navigation(pagina);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (nextProps.canciones !== this.props.canciones) ? true
            : (nextProps !== this.props) ? true 
            : false
    }

    render() {
        switch (this.props.pagina) {
            case 0:
                let canciones_top = Array.from(this.props.canciones)
                canciones_top.sort((a, b) => (a.reproducciones < b.reproducciones) ? 1 : -1)
                canciones_top = canciones_top.slice(0, 3)
                console.log(`Canciones top: ${canciones_top[0]}`)
                return <Inicio canciones_top={canciones_top} navigation={this.navigate}/>;
            case 1:
                return <Canciones canciones={this.props.canciones} />;
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