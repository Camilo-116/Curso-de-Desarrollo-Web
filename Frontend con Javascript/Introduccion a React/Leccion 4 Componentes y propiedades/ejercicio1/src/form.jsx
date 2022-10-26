import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class FormComponent extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="col">
                    <h1>Ingreso</h1>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend bg-info"><i class="fa fa-envelope icon"></i></div>
                            <input type="email" class="form-control" placeholder="Correo electronico" id="email"></input>
                        </div>
                        <div class="input-group">
                            <div class="input-group-prepend bg-info"><i class="fa fa-key icon"></i></div>
                            <input type="password" class="form-control" placeholder="Contraseña" id="email"></input>
                        </div>
                    </div>
                    <button class="btn btn-info" type="submit">Ingresar</button>
                </div>
                
            </div>
        );
    }
}

export default FormComponent;