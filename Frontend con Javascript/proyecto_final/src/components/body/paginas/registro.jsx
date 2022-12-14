import React, { Component } from 'react'

class Registro extends Component {
    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.confirmPasswordRef = React.createRef();
        this.generoRef = React.createRef();
        this.edadRef = React.createRef();
        this.terminosRef = React.createRef();
        this.state = {
            errorEmail: false,
            errorPassword: false,
            errorConfirmPassword: false,
            errorGenero: false,
            errorEdad: false,
            errorTerminos: false,
            errorLogin: false
        }
    }

    validateInput = () => {
        let errorEmail = false;
        let errorPassword = false;
        let errorConfirmPassword = false;
        let errorGenero = false;
        let errorEdad = true;
        let errorTerminos = false;

        let checks = document.getElementsByClassName('form-check-input');

        if (!this.validateEmailWithRegEx(this.emailRef.current.value)) {
            errorEmail = true;
        }
        if (!this.validatePasswordLength(this.passwordRef.current.value)) {
            errorPassword = true;
        }
        if (this.passwordRef.current.value !== this.confirmPasswordRef.current.value) {
            errorConfirmPassword = true;
        }
        if (this.generoRef.current.value === '') {
            errorGenero = true;
        }
        for (let i = 0; i < checks.length - 1; i++) {
            if (checks[i].checked) {
                errorEdad = false;
            }
        }
        if (!this.terminosRef.current.checked) {
            errorTerminos = true;
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
            if (errorConfirmPassword) {
                this.confirmPasswordRef.current.value = '';
                this.confirmPasswordRef.current.focus();
            }
            if (errorGenero) {
                this.generoRef.current.value = '';
            }
            if (errorTerminos) {
                this.terminosRef.current.checked = false;
            }
        } else {
            this.emailRef.current.value = '';
            this.passwordRef.current.value = '';
            this.confirmPasswordRef.current.value = '';
            this.generoRef.current.value = '';
            this.edadRef.current.value = '';
            this.terminosRef.current.checked = false;
        }
        this.setState({
            errorEmail: errorEmail,
            errorPassword: errorPassword,
            errorConfirmPassword: errorConfirmPassword,
            errorGenero: errorGenero,
            errorEdad: errorEdad,
            errorTerminos: errorTerminos,
            errorLogin: (errorEmail || errorPassword || errorConfirmPassword || errorGenero || errorEdad || errorTerminos) ? true : false
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
            <div id='registro'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card rounded shadow'>
                                <div className='card-body'>
                                    <div className='card-title h2 fw-bold border-bottom'>Registro de Usuario</div>
                                    <form>
                                        <div className='form-group'>
                                            <div className='correo mb-2'>
                                                <label htmlFor='email' className='fw-bold lead fs-6'>
                                                    Correo electr??nico*
                                                    {(this.state.errorEmail) ? <span className='text-danger fw-light small ms-3'>Correo inv??lido</span> : null}
                                                </label>
                                                <input type='email' ref={this.emailRef} className='form-control rounded' id='email' aria-describedby='emailHelp' placeholder='Introduce tu correo electr??nico' />
                                            </div>
                                            <div className='contrase??a mt-2 mb-3'>
                                                <label htmlFor='password' className='fw-bold lead fs-6'>
                                                    Contrase??a*
                                                    {(this.state.errorPassword) ? <span className='text-danger fw-light small ms-3'>La longitud debe ser por lo menos 8 caract??res</span> : null}
                                                </label>
                                                <input type='password' ref={this.passwordRef} className='form-control rounded' id='password' placeholder='Introduce tu contrase??a' />
                                            </div>
                                            <div className='contrase??a mt-2 mb-3'>
                                                <label htmlFor='password' className='fw-bold lead fs-6'>
                                                    Confirmar Contrase??a*
                                                    {(this.state.errorConfirmPassword) ? <span className='text-danger fw-light small ms-3'>Las contrase??as deben coincidir</span> : null}
                                                </label>
                                                <input type='password' ref={this.confirmPasswordRef} className='form-control rounded' id='password' placeholder='Introduce tu contrase??a' />
                                            </div>
                                            <div className='genero mt-2 mb-3'>
                                                <label htmlFor='password' className='fw-bold lead fs-6'>
                                                    G??nero preferido*
                                                    {(this.state.errorGenero) ? <span className='text-danger fw-light small ms-3'>Debe especificar un g??nero</span> : null}
                                                </label>
                                                <select className="form-select rounded" ref={this.generoRef} id="genero-select">
                                                    <option value="" key="0" className='text-muted' selected>--Selecciona un g??nero--</option>
                                                    <option value="trap" key="1">Trap Latino</option>
                                                    <option value="afrob" key="2">AfroBeat</option>
                                                    <option value="pop" key="3">Pop</option>
                                                    <option value="rap" key="4">Rap</option>
                                                    <option value="rock" key="5">Rock</option>
                                                    <option value="regg" key="6">Reggeaton</option>
                                                    <option value="afrop" key="7">AfroPop</option>
                                                </select>
                                            </div>
                                            <div className='edad mt-2 mb-3'>
                                                <legend className='fw-bold lead fs-6'>
                                                    Edad*
                                                    {(this.state.errorEdad) ? <span className='text-danger fw-light small ms-3'>Debe especificar un rango de edad</span> : null}
                                                </legend>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="optionsRadios" id="menor20" value="-20" />
                                                    <label className="form-check-label" htmlFor="menor20">
                                                        Menor a 20 a??os
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="optionsRadios" id="de20a40" value="20-40" />
                                                    <label className="form-check-label" htmlFor="de20a40">
                                                        Entre 20 y 40 a??os
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="optionsRadios" id="mayor50" value="+50" />
                                                    <label className="form-check-label" htmlFor="mayor50">
                                                        Mayor a 50 a??os
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='terminos mb-3'>
                                                <input className="form-check-input" ref={this.terminosRef} type="checkbox" value="" id="checkTerminos" />
                                                <label className="form-check-label ps-2 small" htmlFor="checkTerminos">
                                                    Acepto los t??rminos y condiciones de uso.
                                                    {(this.state.errorTerminos) ? <><br /><span className='text-danger fw-light small'>Aceptar los t??rmino y condiciones es obligatorio</span></> : null}
                                                </label>
                                            </div>
                                            <button type='button' className='btn btn-primary rounded' onClick={this.validateInput}>Registrarse</button>
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

export default Registro;