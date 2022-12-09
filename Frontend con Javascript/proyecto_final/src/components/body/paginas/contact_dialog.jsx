/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ContactDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log('Se montó el modal de contacto')
    }

    componentWillUnmount() {
        console.log('Se desmontará el modal de contacto')
    }

    render() {
        return (
            <Modal show={this.props.showContact} onHide={this.props.disposeDialog} onExit={this.props.disposeDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Métodos de contacto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Puedes contactar con nosotros a través de alguno de los siguientes medios:
                    <ul>
                        <li>
                            Correo electrónico: <a href="#">oyeNext@gmail.com</a>
                        </li>
                        <li>
                            Teléfono: <a href="#">+57 315 8889900</a>
                        </li>
                        <li>
                            Twitter: <a href="#">@oyeNext</a>
                        </li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.disposeDialog}>
                        Vale
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ContactDialog;