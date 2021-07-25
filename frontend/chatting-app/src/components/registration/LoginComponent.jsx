import React, { Component, useState } from "react";
import ComponentInput from './elements/ComponentInput';
import { Link } from 'react-router-dom';
import Users from '../../dummydb/users.json'

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

		<React.Fragment>
			<ComponentInput 
				type="text"
				nombre="mail"
				placeholder="Email"
				icono="fa fa-envelope"
				expresionRegular={expresiones.correo}
				estado={Email}
				cambiarEstado={cambiarEmail}
				leyendaError="Please enter a valid email, like:  wolverine@xmen.org"/>

			{/* <ComponentInput
				type="password"
				nombre="pass"
				placeholder="password"
				icono="fa fa-lock"/> */}

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
		this.updateUSer = this.updateUSer.bind(this);

    }

	updateUSer(newUser){
		this.setState({
			user: newUser
		})
	}

	checkUserExists(){

		var userFound = false
		var email = document.getElementById('email').value;
		if (email === ''){
			alert('Empty email, please provide some')
			return userFound;
		}
		Users.map((newUser) =>{
			if (newUser.email === email){
				this.updateUSer(newUser);
				userFound = true;
			}
		})
		if(!userFound){
			alert('User does not exists!')
		}
		return userFound;
	}

	handleSubmit = (e) => {

		if(!this.checkUserExists()){
			e.preventDefault();
		}
		else{
			this.props.login();
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