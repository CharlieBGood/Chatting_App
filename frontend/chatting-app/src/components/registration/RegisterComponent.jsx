import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { Control, Form, Errors, actions } from 'react-redux-form';
import { Label, Col, Row, Button } from 'reactstrap';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)

const expresiones = {
	usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

class Register extends Component {

	constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

	handleSubmit(values) {
		console.log(values)
        this.props.createUser(values);
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

	render(){
		return (
			<React.Fragment>
				<div className="container-login100">
					<div className="wrap-login101">
						<span className="login100-form-title">
							Standar Form
						</span>

						<div class="flexButton-container">
							<Link className="login101-form-btn" to={"/singUpBussness"}>	Busieness</Link>
						</div>

						<Form model="newUser" className="validate-form login100-form" onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Label htmlFor="firstname" md={12}>Nickname</Label>
								<Col md={12} className="wrap-input100">
									<Control.text model=".nickname" id="nickname" name="nickname"
										placeholder="Nickname" 
										className="input100" 
										validators={{
											required, minLength: minLength(3), maxLength: maxLength(15)
										}} 
									/>
									<span className="focus-input100"></span>
									<span className="symbol-input100">
										<i className="fa fa-id-card"></i>
									</span>
									<Errors className="text-danger" model=".nickname"
										show="touched"
										messages={{
											required: 'Required',
											minLength: 'Must be greater than 2 characters',
											maxLength: 'Must be 15 characters or less'
										}} 
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="firstname" md={12}>Phone Number</Label>
								<Col md={12} className="wrap-input100">
									<Control.text model=".phone" id="phone" name="phone"
										placeholder="Phone Number" 
										className="input100" 
										validators={{
											required, isNumber
										}} 
									/>
									<span className="focus-input100"></span>
									<span className="symbol-input100">
										<i className="fa fa-phone"></i>
									</span>
									<Errors className="text-danger" model=".phone"
										show="touched"
										messages={{
											required: 'Required',
											isNumber : 'Must contain only numbers'
										}} 
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="firstname" md={12}>Email</Label>
								<Col md={12} className="wrap-input100">
									<Control.text model=".email" id="email" name="email"
										placeholder="Email" 
										className="input100" 
										validators={{
											required, validEmail
										}} 
									/>
									<span className="focus-input100"></span>
									<span className="symbol-input100">
										<i className="fa fa-envelope"></i>
									</span>
									<Errors className="text-danger" model=".email"
										show="touched"
										messages={{
											required: 'Required',
											validEmail : 'Must be a valid email'
										}} 
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="firstname" md={12}>Password</Label>
								<Col md={12} className="wrap-input100">
									<Control.password model=".password" id="password" name="password"
										placeholder="Password" 
										className="input100" 
										validators={{
											required
										}} 
									/>
									<span className="focus-input100"></span>
									<span className="symbol-input100">
										<i className="fa fa-lock"></i>
									</span>
									<Errors className="text-danger" model=".password"
										show="touched"
										messages={{
											required: 'Required',
										}} 
									/>
								</Col>
							</Row>
							<Row className="form-group">
                                <Col md={{size:10}} className="container-login100-form-btn">
                                    <Button type="submit" className="login100-form-btn">Sign Up</Button>
                                </Col>
                            </Row>
						</Form>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Register;