import React, { Component } from "react";

export default class Login extends Component {

    render() {
        return (
            <React.Fragment>

			<div className="container-login100">
            	<div className="wrap-login100">
					<div className="login100-pic js-tilt" data-tilt>
						<img src="images/login.png" alt="IMG" />
					</div>
					
					<form className="validate-form login100-form ">
						<span class="login100-form-title">
							Member Login
						</span>
						<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
							<input className="input100" type="text" name="email" placeholder="Email" />
							<span className="focus-input100"></span>
							<span className="symbol-input100">
								<i className="fa fa-envelope" aria-hidden="true"></i>
							</span>
						</div>
						<div className="wrap-input100 validate-input" data-validate = "Password is required">
							<input className="input100" type="password" name="pass" placeholder="Password" />
							<span className="focus-input100"></span>
							<span className="symbol-input100">
								<i className="fa fa-lock" aria-hidden="true"></i>
							</span>
						</div>
						<div className="container-login100-form-btn">
							<button className="login100-form-btn" onClick={this.props.login}>
								Login
							</button>
						</div>
						<div className="text-center pt-2">
							<span className="txt1">
								Forgot
							</span>
							<a className="txt2 ml-2" href="#">
								Username / Password?
							</a>
						</div>
						<div className="text-center pt-5">
							<a className="txt2" href="#">
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