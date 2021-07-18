import React from "react";

const BusienessRegister = (props) => {

	return (
		<React.Fragment>
		<div className="row justify-content-center">

			<div class="registerBusiness-form-btn"> 

				<div class="container-flex">

					<span class="login100-form-title">Register Busieness</span>

					<img src="images/upImage.png" class="my-4" alt="IMG" height="200" width="200" />

					<form class="validate-form login100-form">

						<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
							<input class="input100" type="text" name="Nombre" placeholder="Nombre" />
							
							<span class="symbol-input100">
								<i class="fa fa-user" aria-hidden="true"></i>
							</span>
						</div>
					
						
						<div class="wrap-input100 validate-input" data-validate = "Valid NameCompany is required: ex@abc.xyz">
							<input class="input100" type="text" name="Name company" placeholder="NameCompany" />
							
							<span class="symbol-input100">
								<i class="fa fa-industry" aria-hidden="true"></i>
							</span>
						</div>

						<div class="wrap-input100 validate-input" data-validate = "Valid WebPage is required: ex@abc.xyz">
							<input class="input100" type="text" name="WebPage" placeholder="WebPage" />
							
							<span class="symbol-input100">
								<i class="fa fa-window-maximize" aria-hidden="true"></i>
							</span>
						</div>

						<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
							<input class="input100" type="text" name="email" placeholder="Email" />
							
							<span class="symbol-input100">
								<i class="fa fa-envelope" aria-hidden="true"></i>
							</span>
						</div>

						<div class="wrap-input100 validate-input" data-validate = "Password is required">
							<input class="input100" type="password" name="pass" placeholder="Password" />
							<span class="symbol-input100">
								<i class="fa fa-lock" aria-hidden="true"></i>
							</span>
						</div>

						<span class="login100-form-title">
							First Catalog 
						</span>

						<div class="wrap-input100 validate-input" data-validate = "Valid NameCatalog is required: ex@abc.xyz">
							<input class="input100" type="text" name="NameCatalgo" placeholder="NameCatalog" />
							
							<span class="symbol-input100">
								<i class="fa fa-newspaper-o" aria-hidden="true"></i>
							</span>
						</div>

						<div class="wrap-input100 validate-input" data-validate = "Valid Description is required: ex@abc.xyz">
							<input class="input100" type="text" name="Description" placeholder="Description" />
							
							<span class="symbol-input100">
								<i class="fa fa-reorder" aria-hidden="true"></i>
							</span>
						</div>

						<div class="wrap-input100 validate-input" data-validate = "Valid WebPage is required: ex@abc.xyz">
							<input class="input100" type="text" name="WebPage" placeholder="WebPage" />
							
							<span class="symbol-input100">
								<i class="fa fa-window-maximize" aria-hidden="true"></i>
							</span>
						</div>
					
					</form>		

					<img src="images/upImage.png" class="mt-4" alt="IMG" height="200" width="200" />

					<div class="mt-4 col-2">
						<button type="submit" class="login100-form-btn" onClick={props.login}>
							Register
						</button>
					</div>
				</div>
			</div>		
		</div>						
	</React.Fragment>

	);
}

export default BusienessRegister;