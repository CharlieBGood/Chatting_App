import React, { useState } from "react";
import ComponentInput from './elements/ComponentInput';
import {Link} from 'react-router-dom'

const Register = (props) => {

	const [Nombre, cambiarNombre] = useState({campo:'', valido:null});
	const [NickName, cambiarNickName] = useState({campo:'', valido:null});
	const [Email, cambiarEmail] = useState({campo:'', valido:null});
	const [Password, cambiarPassword] = useState({campo:'', valido:null});

	const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
      }

	return (
		<React.Fragment>
			<div className="container-login100">
				<div class="wrap-login101">
					<div>

						<form class="validate-form login100-form ">

							<span class="login100-form-title">
								Standar Form
							</span>

							<div class="flexButton-container">
								<Link class="login101-form-btn" to={"/singUpBussness"}>	Busieness</Link>
							</div>

							<ComponentInput 
								type="text"
								nombre="Nombre"
								placeholder="Nombre"
								icono="fa fa-user"
								expresionRegular={expresiones.nombre}
								estado={Nombre}
								cambiarEstado={cambiarNombre}
								leyendaError="Please enter a valid Name"/>

							<ComponentInput 
								type="text"
								nombre="NickName"
								placeholder="NickName"
								icono="fa fa-address-card"
								expresionRegular={expresiones.nombre}
								estado={NickName}
								cambiarEstado={cambiarNickName}
								leyendaError="Please enter a valid NickName"/>

							<ComponentInput 
								type="text"
								nombre="mail"
								placeholder="Email"
								icono="fa fa-envelope"
								expresionRegular={expresiones.correo}
								estado={Email}
								cambiarEstado={cambiarEmail}
								leyendaError="Please enter a valid email, like:  wolverine@xmen.org"/>

							<ComponentInput 
								type="password"
								nombre="Password"
								placeholder="Password"
								icono="fa fa-lock"
								expresionRegular={expresiones.password}
								estado={Password}
								cambiarEstado={cambiarPassword}
								leyendaError="Please use almost 4 digits"/>

							<div class="container-login100-form-btn">
								<button class="login100-form-btn" onClick={props.login}>
									Create
								</button>
							</div>

						</form>

					</div>

				</div>
			</div>
		</React.Fragment>
	)
}

export default Register;