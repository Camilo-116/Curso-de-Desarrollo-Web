import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class FormComponent extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="col">
                    <div class="row">
                        <h1>Ingreso</h1>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-info"><i class="fa fa-user icon"></i></div>
                                        <input type="text" class="form-control" placeholder="Nombre" id="nombre"></input>
                                    </div>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-info"><i class="fa fa-envelope icon"></i></div>
                                        <input type="email" class="form-control" placeholder="Correo electronico" id="email"></input>
                                    </div>

                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-info"><i class="fa fa-user icon"></i></div>
                                        <input type="text" class="form-control" placeholder="Apellido" id="apellido"></input>
                                    </div>
                                    <div class="input-group">
                                        <div class="input-group-prepend bg-info"><i class="fa fa-key icon"></i></div>
                                        <input type="password" class="form-control" placeholder="Contraseña" id="email"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label for="direccion">Dirección: </label><br />
                                <div class="input-group">
                                    <div class="input-group-prepend bg-info"><i class="fa fa-home icon"></i></div>
                                    <input type="text" class="form-control" placeholder="Dirección" id="direccion"></input>
                                </div>
                            </div>
                        </div>
                        <div class="row pb-2">
                            <div class="col-6">
                                <label for="ciudad">Ciudad: </label><br />
                                <input type="text" class="form-control" placeholder="Ciudad" id="ciudad"></input>
                            </div>
                            <div class="col-3">
                                <label for="cod-pos">Código Postal: </label><br />
                                <input type="text" class="form-control" placeholder="Código Postal" id="cod-pos"></input>
                            </div>
                        </div>
                        <div class="col pb-3">
                            <input type="checkbox" ></input><span class="ps-2">Acepta los términos y condiciones.</span>
                        </div>
                        <button class="btn btn-info" type="submit">Ingresar</button>
                    </div>

                </div>

            </div>
        );
    }
}

export default FormComponent;