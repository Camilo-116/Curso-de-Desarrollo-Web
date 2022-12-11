import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.state = {
            errorEmail: false,
            errorPassword: false,
            errorLogin: false
        }
    }

    validateInput = () => {
        let errorEmail = false;
        let errorPassword = false;
        if (!this.validateEmailWithRegEx(this.emailRef.current.value)) {
            errorEmail = true;
        }
        if (!this.validatePasswordLength(this.passwordRef.current.value)) {
            errorPassword = true;
        }
        if (errorEmail || errorPassword) {
            if (errorEmail) {
                this.emailRef.current.value = '';
                this.passwordRef.current.value = '';
                this.emailRef.current.focus();
            } else {
                this.passwordRef.current.value = '';
                this.passwordRef.current.focus();
            }
        }else{
            this.emailRef.current.value = '';
            this.passwordRef.current.value = '';
        }
        this.setState({
            errorEmail: errorEmail,
            errorPassword: errorPassword,
            errorLogin: (errorEmail || errorPassword) ? true : false
        })
    }

    validatePasswordLength = (password) => {
        return (password.length >= 8) ? true : false;
    }

    validateEmailWithRegEx = (email) => {
        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEx.test(String(email).toLowerCase());
    }

    render() {
        return (
            <div id='login'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card rounded shadow'>
                                <div className='card-body'>
                                    <div className='card-title h2 fw-bold border-bottom'>Inicio de sesión</div>
                                    <form>
                                        <div className='form-group'>
                                            <div className='correo mb-2'>
                                                <label htmlFor='email' className='fw-bold lead fs-6'>
                                                    Correo electrónico*
                                                    {(this.state.errorEmail) ? <span className='text-danger fw-light small ms-3'>Correo inválido</span> : null}
                                                </label>
                                                <input type='email' ref={this.emailRef} className='form-control rounded' id='email' aria-describedby='emailHelp' placeholder='Introduce tu correo electrónico' />
                                                <small id='emailHelp' className='form-text text-muted'>Nunca compartiremos tu correo electrónico con nadie más.</small>
                                            </div>
                                            <div className='contraseña mt-2 mb-3'>
                                                <label htmlFor='password' className='fw-bold lead fs-6'>
                                                    Contraseña*
                                                    {(this.state.errorPassword) ? <span className='text-danger fw-light small ms-3'>La longitud debe ser por lo menos 8 caractéres</span> : null}
                                                </label>
                                                <input type='password' ref={this.passwordRef} className='form-control rounded' id='password' placeholder='Introduce tu contraseña' />
                                            </div>
                                            <button type='button' className='btn btn-primary rounded' onClick={this.validateInput}>Iniciar sesión</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;