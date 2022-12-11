/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Header from './components/header/header.jsx'
import Body from './components/body/body.jsx'
import Footer from './components/footer/footer.jsx'
import ContactDialog from './components/body/paginas/contact_dialog.jsx'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pagina: 0,
            showContact: false,
            canciones: []
        }
    }

    navigate = (pagina) => {
        console.log(`pagina: ${pagina}`);
        (pagina !== 2) ? this.setState({
            pagina: pagina,
            showContact: false
        }) : this.setState({
            showContact: true
        })
    }

    componentDidMount() {
        fetch('http://localhost:3000/canciones.json')
            .then(response => response.json())
            .then(result => this.setState({ canciones: result.canciones }));
    }

    render() {
        return (
            <React.Fragment>
                <Header pagina={this.state.pagina} contacto={this.state.showContact} navigation={this.navigate} />
                <Body pagina={this.state.pagina} canciones={this.state.canciones} navigation={this.navigate}/>
                <Footer pagina={this.state.pagina} />
                {this.state.showContact ? <ContactDialog showContact={this.state.showContact} disposeDialog={() => this.setState({ showContact: false })} /> : null}
            </React.Fragment>
        );
    }
}

export default App;