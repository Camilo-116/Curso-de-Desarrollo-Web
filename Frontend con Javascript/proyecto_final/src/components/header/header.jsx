/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../styles/header.css';
import NavButtons from './buttons.jsx';
import Logo from './logo.jsx';
import NavDropdown from './dropdown.jsx';

class Header extends React.Component {

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

    navigate = (pagina) => {
        this.props.navigation(pagina);
    }

    render() {
        var navMenu
        if (!this.state.mobile) {
            navMenu = <NavButtons contacto={this.props.contacto} pagina={this.props.pagina} navigation={this.navigate} />
        } else {
            navMenu = <NavDropdown pagina={this.props.pagina} navigation={this.navigate} />
        }
        return (
            <div id="header" className="border-bottom border-primary shadow bg-light d-flex flex-row flex-nowrap row">
                <div className='col-4 p-0'>
                    <Logo navigation={this.navigate} />
                </div>
                {navMenu}
            </div>
        );
    }
}

export default Header;