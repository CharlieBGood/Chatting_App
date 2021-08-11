import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserProfile from '../profile/UserProfile'
import { connect } from "react-redux"; 
import { withRouter } from 'react-router-dom';
import { getUsers } from '../../redux/actions/actionUsers';

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
    const usersList = props.users.map((user) =>{
        id++;
        return(
            <li className="list-group-item" id={"id_user_"+id}
            key={"id_user_"+id} onClick={() => props.changeProfile(user)}>
                {user.nickname}
            </li>
        );
    });

    return(
        <div className="scrollable w-100">
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
        console.log(profile)
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
    }

    changeProfile(user){
        this.setState({
            profile : user 
        })
    }

    componentWillReceiveProps(nextProps){
        console.log('nextProps')
        if (this.props.contacts.contacts.length > 0) {
            var list = this.props.auth.user.id
            this.props.contacts.contacts.map((contact) => {
                list += '-' + contact.id
            })
            if (this.props.users.length === 0){
                this.props.getUsers(list);
            }
        }
    }

    render(){
        return (
            <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal} size='lg'>
                <ModalHeader>New Contact</ModalHeader>
                <ModalBody>
                    <div className='container border'>
                        <div className="row">
                            {/* Parte izquierda: barra de búsqueda de contactos */}
                            <div className="col-5 text-center mt-5">
            
                                <h1>App Users</h1>
                                <div className="form-group my-5">
                                    <input type="text" id="myInput"
                                    placeholder="Contact name..." title="Type in a name" 
                                    className="form-control w-75"/>
                                </div>
                                <RenderUsersList users={this.props.users} changeProfile={this.changeProfile}/>
                            </div>
                    
                            {/* Parte derecha: Configuraciones de grupo    */}
                            <div  className="col-7 text-center"> 
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

const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors, contacts: state.contacts, users: state.users }); 

export default connect(mapStateToProps, { getUsers })(withRouter(NewContact)); 
