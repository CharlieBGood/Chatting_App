import { render } from '@testing-library/react'
import React, { Component } from 'react'


function RenderUsersList({users}){
    var id = -1;
    const usersList = users.sort().map((user) =>{
        id++;
        return(
            <li className="list-group-item" id={"id_user_"+id}>
                {user}
            </li>
        );
    });

    return(
        <div class="scrollable w-100">
            <ul className="list-group">
                {usersList}
            </ul>
        </div>
    );
}

function RightSide(){
    if(true){
        return(
            <img src="images/iconoFoto.png" className="img-fluid" id="fotoGrupo" alt="logo" />
        );
    }
    else{
        return(
            'hi there'
        );
    }
};


class NewContact extends Component{

    constructor(props){
        super(props)
        this.state = {
          users: ['Adele', 'Agnes', 'Paquita la del barrio', 'Billy Joel', 'Bob Dylan']
        }
    }

    render(){
        return (
            <div className='container'>
                <div class="row">
                    {/* Parte izquierda: barra de búsqueda de contactos */}
                    <div className="col-5 text-center mt-5">
    
                        <h1>App Users</h1>
                        <div className="form-group my-5">
                            <input type="text" id="myInput" onkeyup="myFunction()" 
                            placeholder="Contact name..." title="Type in a name" 
                            class="form-control w-75"/>
                        </div>
                        <RenderUsersList users={this.state.users} />
                    </div>
            
                    {/* Parte derecha: Configuraciones de grupo    */}
                    <div  class="col-7 text-center"> 
                       <RightSide />
                    </div>
                </div>
            </div>
        )
    }
}

export default NewContact;