import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Users from '../../dummydb/users.json'
import UserProfile from '../profile/UserProfile'

function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    

function RenderUsersList(props){
    
    var id = -1;
    const usersList = props.users.sort(GetSortOrder("nombre")).map((user) =>{
        id++;
        return(
            <li className="list-group-item" id={"id_user_"+id}
            key={"id_user_"+id} onClick={() => props.changeProfile(user)}>
                {user.nombre}
            </li>
        );
    });

    return(
        <div class="scrollable w-100">
            <ul className="list-group scrollable">
                {usersList}
            </ul>
        </div>
    );
}

function RightSide({profile}){
    if (profile == null){
        return(
            <img src="images/iconoFoto.png" className="img-fluid" id="fotoGrupo" alt="logo" />
        );
    }
    else{
        return(
            <UserProfile user={profile} />
        );
    }
};

class NewContact extends Component{

    constructor(props){
        super(props)
        this.state = {
          profile : null,
          users_list : Users
        }
        this.changeProfile = this.changeProfile.bind(this);
    }

    changeProfile(user){
        this.setState({
            profile : user 
        })
    }

    render(){
        return (
            <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal} size='lg'>
                <ModalHeader>New Contact</ModalHeader>
                <ModalBody>
                    <div className='container border'>
                        <div class="row">
                            {/* Parte izquierda: barra de búsqueda de contactos */}
                            <div className="col-5 text-center mt-5">
            
                                <h1>App Users</h1>
                                <div className="form-group my-5">
                                    <input type="text" id="myInput" onkeyup="myFunction()" 
                                    placeholder="Contact name..." title="Type in a name" 
                                    class="form-control w-75"/>
                                </div>
                                <RenderUsersList users={this.state.users_list} changeProfile={this.changeProfile}/>
                            </div>
                    
                            {/* Parte derecha: Configuraciones de grupo    */}
                            <div  class="col-7 text-center"> 
                                <RightSide profile={this.state.profile} />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.toggleModal}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default NewContact;