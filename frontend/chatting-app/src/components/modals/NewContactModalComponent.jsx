import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserProfile from '../profile/UserProfile'
import { connect } from "react-redux"; 
import { withRouter } from 'react-router-dom';
import { getUsers } from '../../redux/actions/actionUsers';
import { addContact } from '../../redux/actions/actionContacts';
import swal from 'sweetalert';

function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop].toLowerCase() > b[prop].toLowerCase()) {    
            return 1;    
        } else if (a[prop].toLowerCase() < b[prop].toLowerCase()) {    
            return -1;    
        }    
        return 0;    
    }    
}    

function RenderUsersList(props){

    const usersList = props.users.sort(GetSortOrder('nickname')).map((user) =>{
        return(
            <li className="list-group-item"
            key={user.id} onClick={() => props.changeProfile(user)}>
                <div className="row">
                        <div className="col-2">
                            <img src="images/woman.png" className="img-fluid chat-list-miniature" id="fotoGrupo" alt="logo" />
                        </div>
                        <div className="col-10">
                            {user.nickname}
                        </div>
                    </div>
            </li>
        );
    });

    return(
        <div className="d-flex scroll-users-list border">
            <ul className="list-group border">
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
            <UserProfile user={profile} renderNewChatButton={false}/>
        );
    }
};

class NewContact extends Component{

    constructor(props){
        super(props)
        this.state = {
          profile : null,
        }
        this.changeProfile = this.changeProfile.bind(this);
        this.addNewContact = this.addNewContact.bind(this);
    }

    changeProfile(user){
        this.setState({
            profile : user 
        })
    }

    addNewContact(){
        if (this.state.profile == null){
            swal("Error!", 'You have to select an user!', "error");
        }
        else{
            const contacts_data = {
                id_user : this.props.auth.user.id,
                id_contact : this.state.profile.id,
                contacts_list : this.props.contacts.contacts
            }
            this.props.addContact(contacts_data);
        };
        this.props.toggleModal()
    }

    render(){
        return (
            <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal} size='lg'>
                <ModalHeader>New Contact</ModalHeader>
                <ModalBody>
                    <div className='container scroll-modal'>
                        <div className="row">
                            {/* Parte izquierda: barra de búsqueda de contactos */}
                            <div className="col-5 mt-5">
                                {/*<input type="text" id="myInput"
                                placeholder="Contact name..." title="Type in a name" 
        className="form-control mb-1"/>*/}
                                <RenderUsersList users={this.props.users} changeProfile={this.changeProfile} />
                            </div>
                    
                            {/* Parte derecha: Configuraciones de grupo    */}
                            <div  className="col-7 text-center"> 
                                <RightSide profile={this.state.profile} />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.addNewContact}>Add Contact</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors, contacts: state.contacts, users: state.users }); 

export default connect(mapStateToProps, { getUsers, addContact })(withRouter(NewContact)); 
