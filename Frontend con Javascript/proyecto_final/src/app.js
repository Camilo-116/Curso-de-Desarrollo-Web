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
            showContact: false
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

    componentDidUpdate(prevProps, prevState) {
        console.log(`prevContact: ${prevState.showContact}`);
        console.log(`COntact: ${this.state.showContact}`);
    }

    render() {
        return (
            <React.Fragment>
                <Header pagina={this.state.pagina} contacto={this.state.showContact} navigation={this.navigate} />
                <Body pagina={this.state.pagina} />
                <Footer pagina={this.state.pagina} />
                {this.state.showContact ? <ContactDialog showContact={this.state.showContact} disposeDialog={() => this.setState({ showContact: false })} /> : null}
            </React.Fragment>
        );
    }
}

export default App;