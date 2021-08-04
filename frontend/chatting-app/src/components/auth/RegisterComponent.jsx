import React, { Component } from "react";
import { Label, Col, Row, Button, Form, Input } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from "prop-types"; 
import { withRouter } from 'react-router-dom';
import { registerUser } from "../../redux/actions/actionAuth";
import swal from 'sweetalert';

class Register extends Component {

	constructor(){
        super();
		this.state = {
			nickname: "", 
			email: "", 
			password: "", 
			password2: "", 
			errors: {}
		}
    }

	componentWillReceiveProps(nextProps) { 
		if (nextProps.errors) { 
			this.setState({ 
				errors: nextProps.errors, 
			}); 
			swal("Error!", JSON.stringify(nextProps.errors), "error");
		} 
	} 

	onChange = e => { 
		this.setState({ [e.target.id]: e.target.value }); 
	};

	onSubmit = e => {
		e.preventDefault();
		const newUser = {
			nickname: this.state.nickname, 
			email: this.state.email, 
			password: this.state.password, 
			password2: this.state.password2
		};
		this.props.registerUser(newUser, this.props.history);
	}

	render(){
		const { errors } = this.state;
		return (
			<React.Fragment>
				<div className="container-login100">
					<div className="wrap-login101">
						<span className="login100-form-title">
							Standar Form
						</span>
						{/*<div class="flexButton-container">
							<Link className="login101-form-btn" to={"/singUpBussness"}>	Busieness</Link>
						</div>*/}
						<Form className="login100-form" noValidate onSubmit={this.onSubmit}>
							<Row className="form-group">
								<Label htmlFor="firstname" md={12}>Nickname</Label>
								<Col md={12} className="wrap-input100">
									<Input id="nickname"
										onChange={this.onChange} 
										value={this.state.nickname} 
										placeholder="Nickname" 
										className="input100" 
										error={errors.nickname}
									/>
									<span className="focus-input100"></span>
									<span className="symbol-input100">
										<i className="fa fa-id-card"></i>
									</span>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="firstname" md={12}>Email</Label>
								<Col md={12} className="wrap-input100">
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
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="firstname" md={12}>Password</Label>
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
								<Label htmlFor="firstname" md={12}>Confirm Password</Label>
								<Col md={12} className="wrap-input100">
									<Input type="password" id="password2" 
										placeholder="Confirm Password" 
										className="input100" 
										onChange={this.onChange} 
										value={this.state.password2} 
										error={errors.password2}
									/>
									<span className="focus-input100"></span>
									<span className="symbol-input100">
										<i className="fa fa-lock"></i>
									</span>
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

Register.propTypes = { 
	registerUser: PropTypes.func.isRequired, 
	auth: PropTypes.object.isRequired, 
	errors: PropTypes.object.isRequired, 
};

const mapStateToProps = state => ({ 
	auth: state.auth, 
	errors: state.errors 
});

export default connect(mapStateToProps, { registerUser } )(withRouter(Register)); 