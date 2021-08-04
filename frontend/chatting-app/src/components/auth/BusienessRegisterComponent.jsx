{/*import React, { useState } from "react";

const BusienessRegister = (props) => {

	const [Nombre, cambiarNombre] = useState({campo:'', valido:null});
	const [NameCompany, cambiarNameCompany] = useState({campo:'', valido:null});
	const [WebPage, cambiarWebPage] = useState({campo:'', valido:null});
	const [Email, cambiarEmail] = useState({campo:'', valido:null});
	const [Password, cambiarPassword] = useState({campo:'', valido:null});
	const [NameCatalog, cambiarNameCatalog] = useState({campo:'', valido:null});
	const [Description, cambiarDescription] = useState({campo:'', valido:null});
	const [WebPageCatalog, cambiarWebPageCatalog] = useState({campo:'', valido:null});


	const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
      }


	return (
		<React.Fragment>
		<div className="row justify-content-center">

			<div class="registerBusiness-form-btn"> 

				<div class="container-flex">

					<span class="login100-form-title">Busieness Form</span>

					<img src="images/upImage.png" class="my-4" alt="IMG" height="200" width="200" />

					<form class="validate-form login100-form">

						<ComponentInput 
							type="text"
							nombre="Nombre"
							placeholder="Nombre"
							icono="fa fa-user"
							expresionRegular={expresiones.correo}
							estado={Nombre}
							cambiarEstado={cambiarNombre}
							leyendaError="Please enter a valid Nombre, like:  wolverine@xmen.org"/>

						<ComponentInput 
							type="text"
							nombre="NameCompany"
							placeholder="NameCompany"
							icono="fa fa-industry"
							expresionRegular={expresiones.correo}
							estado={NameCompany}
							cambiarEstado={cambiarNameCompany}
							leyendaError="Please enter a valid Nombre, like:  wolverine@xmen.org"/>

						<ComponentInput 
							type="text"
							nombre="WebPage"
							placeholder="WebPage"
							icono="fa fa-window-maximize"
							expresionRegular={expresiones.correo}
							estado={WebPage}
							cambiarEstado={cambiarWebPage}
							leyendaError="Please enter a web page"/>

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


						<span class="login100-form-title mt-5">
							First Catalog 
						</span>

						<ComponentInput 
							type="text"
							nombre="NameCatalog"
							placeholder="NameCatalog"
							icono="fa fa-newspaper-o"
							expresionRegular={expresiones.usuario}
							estado={NameCatalog}
							cambiarEstado={cambiarNameCatalog}
							leyendaError="Please enter a valid NameCatalog, like:  wolverine@xmen.org"/>

						<ComponentInput 
							type="text"
							nombre="Description"
							placeholder="Description"
							icono="fa fa-reorder"
							expresionRegular={expresiones.nombre}
							estado={Description}
							cambiarEstado={cambiarDescription}
							leyendaError="Please enter a description with more of 4 characters"/>
						

						<ComponentInput 
							type="text"
							nombre="WebPageCatalog"
							placeholder="WebPageCatalog"
							icono="fa fa-window-maximize"
							expresionRegular={expresiones.nombre}
							estado={WebPageCatalog}
							cambiarEstado={cambiarWebPageCatalog}
							leyendaError="Please enter correct webPage"
							/>
					
					</form>	

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

export default BusienessRegister;*/}