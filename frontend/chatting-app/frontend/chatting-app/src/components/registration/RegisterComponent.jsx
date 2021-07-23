import React from "react";
import {Link} from 'react-router-dom'

const Register = (props) => {
	return (
		<React.Fragment>
			<div className="container-login100">
				<div class="wrap-login101">
					<div>

						<form class="validate-form login100-form ">

							<span class="login100-form-title">
								Register Standar 
							</span>

							<div class="flexButton-container">
								
									{/* <button class="login101-form-btn"> */}
									<Link class="login101-form-btn" to={"/singUpBussness"}>	Busieness</Link>
									{/* </button> */}
								
							</div>

							<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
								<input class="input100" type="text" name="Nombre" placeholder="Nombre" />
								<span class="focus-input100"></span>
								<span class="symbol-input100">
									<i class="fa fa-user" aria-hidden="true"></i>
								</span>
							</div>

							<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
								<input class="input100" type="text" name="nickName" placeholder="nickName" />
								<span class="focus-input100"></span>
								<span class="symbol-input100">
									<i class="fa fa-address-card" aria-hidden="true"></i>
								</span>
							</div>

							<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
								<input class="input100" type="text" name="Email" placeholder="Email" />
								<span class="focus-input100"></span>
								<span class="symbol-input100">
								<i class="fa fa-envelope" aria-hidden="true"></i>
								</span>
							</div>

							<div class="wrap-input100 validate-input" data-validate = "Password is required">
								<input class="input100" type="password" name="pass" placeholder="Password" />
								<span class="focus-input100"></span>
								<span class="symbol-input100">
									<i class="fa fa-lock" aria-hidden="true"></i>
								</span>
							</div>

							<div class="container-login100-form-btn">
								<button class="login100-form-btn" onClick={props.login}>
									Login
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