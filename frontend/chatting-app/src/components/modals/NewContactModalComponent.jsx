import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Contacts from '../../dummydb/contacts.json'

function RenderUsersList(props){
    var id = -1;
    const usersList = Contacts.sort().map((user) =>{
        id++;
        return(
            <li className="list-group-item" id={"id_user_"+id}
            key={"id_user_"+id} onClick={props.changeProfile}>
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

function RightSide({profile}){
    if (profile == null){
        return(
            <img src="images/iconoFoto.png" className="img-fluid" id="fotoGrupo" alt="logo" />
        );
    }
    else{
        return(
            profile
        );
    }
};

class NewContact extends Component{

    constructor(props){
        super(props)
        this.state = {
          profile : null
        }
        this.changeProfile = this.changeProfile.bind(this);
    }

    changeProfile(e){
        this.setState({
            profile : e.target.innerHTML + ' profile'
        })
    }

    render(){
        return (
            <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal} size='lg'>
                <ModalHeader toggle={this.props.toggleModal}>New Contact</ModalHeader>
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
                                <RenderUsersList changeProfile={this.changeProfile}/>
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