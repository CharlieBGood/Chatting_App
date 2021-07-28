import React, { Component, useState } from "react";
import ComponentInput from './elements/ComponentInput';
import { Link } from 'react-router-dom';
import Users from '../../dummydb/users.json';
import swal from 'sweetalert';;

const FieldAction = () =>{

	const [Email, cambiarEmail] = useState({campo:'', valido:null});
	const [Password, cambiarPassword] = useState({campo:'', valido:null});
	const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

	return(

		<React.Fragment>
			<ComponentInput 
				type="text"
				nombre="mail"
				placeholder="Email"
				icono="fa fa-envelope"
				expresionRegular={expresiones.correo}
				estado={Email}
				id="email"
				cambiarEstado={cambiarEmail}
				leyendaError="Please enter a valid email, like:  wolverine@xmen.org"/>

			<div>
				<br/>
			</div>

			<ComponentInput 
				type="password"
				nombre="Password"
				placeholder="Password"
				icono="fa fa-lock"
				id="password"
				expresionRegular={expresiones.password}
				estado={Password}
				cambiarEstado={cambiarPassword}
				leyendaError="Please use almost 4 digits"/>

		</React.Fragment>
	)
}

export default class Login extends Component {

	constructor(props){
        super(props)
        this.state = {
			user : null,
        }
        this.checkUserExists = this.checkUserExists.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

    }

	componentDidUpdate(prevProps) {
		// Uso tipico (no olvides de comparar las props):
		if (this.state.user !== null) {
			this.props.login(this.state.user)
		}
	  }

	checkUserExists(){
		var userFound = false
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;
		if (email === ''){
			swal('Error', 'Empty email, please provide some', 'error');
			return userFound;
		}
		Users.map((newUser) =>{
			if (newUser.email === email && newUser.password === password){
				this.setState({
					user: newUser
				})
				userFound = true;
			}
		})
		if(!userFound){
			swal('Error', 'Wrong Username or Password!', 'error')
		}
		return userFound;
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if(!this.checkUserExists()){
			e.preventDefault();
		}
	}

    render() {
        return (
            <React.Fragment>
				
			<div className="container-login100">
            	<div className="wrap-login100">
					<div className="login100-pic js-tilt" data-tilt>
						<img src="images/login.png" alt="IMG" />
					</div>
					
					<form className="validate-form login100-form" id="login-form" onSubmit={this.handleSubmit}>
						<span class="login100-form-title">
							Member Login
						</span>

						<FieldAction/>

						<div className="container-login100-form-btn">
							<button className="login100-form-btn">
								Login
							</button>
						</div>
						<div className="text-center pt-5">
							<Link className="txt2" to="/sign-up">
								Sign up
								<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
							</Link>
						</div>
					</form>
				</div>
			</div>

        </React.Fragment>
        );
    }
}