import React, { Component } from "react";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import PropTypes from "prop-types";
import { connect } from "react-redux"; 
import { Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';
import { loginUser } from "../../redux/actions/actionAuth";
import { cleanErrors } from "../../redux/actions/actionAuth";
import { withRouter } from 'react-router-dom';
import { getContacts } from '../../redux/actions/actionContacts';

function cleanErrorsForDisplay(props){
	if (props.email){
		return props.email
	}
	else if (props.password){
		return props.password
	}
	else if (props.passwordincorrect){
		return props.passwordincorrect
	}
	else if (props.emailnotfound){
		return props.emailnotfound
	}
}


class Login extends Component {

	constructor(){
        super();
		this.state = {
			email: "", 
			password: "", 
			errors: {}
		}
    }

	componentWillReceiveProps(nextProps) { 
		if (nextProps.auth.isAuthenticated) { 
			this.props.cleanErrors();
			this.props.history.push("/app"); // push user to dashboard when they login */
	  	} 
	  	else if (nextProps.errors) { 
			this.setState({ 
				errors: nextProps.errors, 
			}); 
			var error = cleanErrorsForDisplay(nextProps.errors)
			swal("Error!", error, "error");
	  	} 
	}

	componentDidMount() { 
		// If logged in and user navigates to Login page, should redirect them to app 
		if (this.props.auth.isAuthenticated) { 
		  this.props.history.push("/app"); 
		} 
	}

	onChange = e => { 
		this.setState({ [e.target.id]: e.target.value }); 
	};

	onSubmit = e => {
		e.preventDefault();
		const userData = {
			email: this.state.email, 
			password: this.state.password, 
		};
		this.props.loginUser(userData); 
	}

    render() {
		const { errors } = this.state;
        return (
            <React.Fragment>
			<div className="container-login100">
            	<div className="wrap-login100">
					<div className="login100-pic js-tilt" data-tilt>
						<img src="images/login.png" alt="IMG" />
					</div>
					<Form className="login100-form" noValidate onSubmit={this.onSubmit}>
						<Row className="form-group">
							<Col md={12} className="wrap-input100">
								<FormGroup>
									<Input id="email"
										placeholder="Email" 
										className="input100" 
										onChange={this.onChange} 
										value={this.state.email} 
										error={errors.email}
									/>
									<span className="focus-input100"></span>
									<span className="symbol-input100">
										<i className="fa fa-envelope"></i>
									</span>
								</FormGroup>
							</Col>
						</Row>
						<Row className="form-group">
							<Col md={12} className="wrap-input100">
								<Input type="password" id="password" 
									placeholder="Password" 
									className="input100" 
									onChange={this.onChange} 
									value={this.state.password} 
									error={errors.password}
								/>
								<span className="focus-input100"></span>
								<span className="symbol-input100">
									<i className="fa fa-lock"></i>
								</span>
							</Col>
						</Row>
						<Row className="form-group">
							<Col md={{size:10}} className="container-login100-form-btn">
								<Button type="submit" className="login100-form-btn">Sign In</Button>
							</Col>
						</Row>
						<div className="text-center pt-5">
							<Link className="txt2" to="/sign-up">
								Sign up
								<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
							</Link>
						</div>
					</Form>
				</div>
			</div>
        </React.Fragment>
        );
    }
}

Login.propTypes = { 
	loginUser: PropTypes.func.isRequired, 
	auth: PropTypes.object.isRequired, 
	errors: PropTypes.object.isRequired, 
};

const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors }); 

export default connect(mapStateToProps, { loginUser, cleanErrors, getContacts })(withRouter(Login)); 