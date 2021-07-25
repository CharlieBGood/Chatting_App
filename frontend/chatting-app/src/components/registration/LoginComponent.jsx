import React, { Component, useState } from "react";
import ComponentInput from './elements/ComponentInput';

const FieldAction = () =>{

	const [Email, cambiarEmail] = useState({campo:'', valido:null});
	const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
      }

	return(

		<div>

			<ComponentInput 
				type="text"
				nombre="mail"
				placeholder="Email"
				icono="fa fa-envelope"
				expresionRegular={expresiones.correo}
				estado={Email}
				cambiarEstado={cambiarEmail}
				leyendaError="El correo solo debe de tener letras, numeros, puntos, guines y guiones bajos"/>

			{/* <ComponentInput
				type="password"
				nombre="pass"
				placeholder="password"
				icono="fa fa-lock"/> */}


		</div>


	)
}

export default class Login extends Component {

    render() {
        return (
            <React.Fragment>
				
			<div className="container-login100">
            	<div className="wrap-login100">
					<div className="login100-pic js-tilt" data-tilt>
						<img src="images/login.png" alt="IMG" />
					</div>
					
					<form className="validate-form login100-form">
						<span class="login100-form-title">
							Member Login
						</span>

						<FieldAction/>

						<div className="container-login100-form-btn">
							<button className="login100-form-btn" onClick={this.props.login}>
								Login
							</button>
						</div>
						<div className="text-center pt-5">
							<a className="txt2" href="/">
								Create your Account
								<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
							</a>
						</div>
					</form>
				</div>
			</div>

        </React.Fragment>
        );
    }
}