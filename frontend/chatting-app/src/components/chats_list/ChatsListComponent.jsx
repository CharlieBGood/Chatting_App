import React, { Component } from "react";
import chatItems from '../../dummydb/contacts.json'
import NewContact from '../modals/NewContactModalComponent'
import NewGroup from "../modals/NewGroupModalComponent";
import PropTypes from "prop-types";
import { connect } from "react-redux"; 
import { withRouter } from 'react-router-dom';
import { addContact, getContacts, removeContact } from '../../redux/actions/actionContacts';
import { getUsers } from '../../redux/actions/actionUsers';
import {getConversations, setCurrentConversation, createNewConversation,
    setCurrentFriendConversation} from '../../redux/actions/actionConversations'
import { getMessage, getMessagesConversation} from '../../redux/actions/actionMessages'

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

    if (props.contacts.isLoading){
        return(
            <div className="col-12">
                <img src="images/ghost.gif" alt="searching..." className="img-fluid rounded mx-auto d-block mt-5"/>
            </div>
            
        )
    }
   
    else {
        const contactsList = props.contacts.contacts.sort(GetSortOrder('nickname')).map((contact) => {
            return(
                <li className="list-group-item" key={contact.id} id={contact.id}>
                    <div className="row">
                        <div className="col-2">
                            <img src={contact.image != '' ? contact.image : 'images/profile_dummy.png'} className="img-fluid chat-list-miniature" id="fotoGrupo" alt="logo" />
                        </div>
                        <div className="col-8" onClick={()=>props.setFriendConversation(contact)}>
                            {contact.nickname}
                        </div>
                        <div className="col-2" onClick={() => props.removeContact(contact.id)}>
                            X
                        </div>
                    </div>
                </li>
            );
        });
        return(
            <div className="d-flex scroll-contacts-list">
                <ul className="list-group">
                    {contactsList}
                </ul>
            </div>
        );
    }
}

class ChatList extends Component {
    constructor(props){
        super(props)
        this.state = {
          isNewContactModalOpen: false,
          isNewGroupModalOpen: false,
          
        }
        this.toggleNewContactModal = this.toggleNewContactModal.bind(this);
        this.toggleNewGroupModal = this.toggleNewGroupModal.bind(this);
        this.removeContact = this.removeContact.bind(this);
        this.setFriendConversation = this.setFriendConversation.bind(this);
    }


    componentDidMount(){
        this.props.getContacts(this.props.auth.user.id);
        this.props.getConversations(this.props.auth.user.id)
    }

    toggleNewContactModal(){
        var list = this.props.auth.user.id
            this.props.contacts.contacts.map((contact) => {
                list += '-' + contact.id
            })
        this.props.getUsers(list);
        this.setState({
            isNewContactModalOpen: !this.state.isNewContactModalOpen
        });
    }

    toggleNewGroupModal(){
        this.setState({
            isNewGroupModalOpen: !this.state.isNewGroupModalOpen
        });
    }

    removeContact(contact) {
        const data = {id_user : this.props.auth.user.id, id_contact : contact}
        this.props.removeContact(data);
    }

    setFriendConversation(friend){  
        
        let friendId = friend.id;
            
        if(this.props.conversations.conversations.length===0){
            const members = {senderId:this.props.auth.user.id, receiverId: friendId }
                this.props.createNewConversation(members)  
                this.props.setCurrentFriendConversation(friend)
        }else{
            let found = false;
            this.props.conversations.conversations.map(conversation => {
                
                if(conversation.members.includes(this.props.auth.user.id) && conversation.members.includes(friend.id)){
                    this.props.setCurrentConversation(conversation._id)
                    this.props.setCurrentFriendConversation(friend)
                    found= true;
                }
            });   
            if(!found){
                const members = {senderId:this.props.auth.user.id, receiverId: friendId }
                this.props.createNewConversation(members)
                this.props.setCurrentFriendConversation(friend)
            }
        }         
    }

    render(){
        return(
            <React.Fragment>
                <NewContact isModalOpen={this.state.isNewContactModalOpen} toggleModal={this.toggleNewContactModal} 
                users={this.props.users} /> 
                {/* <NewGroup isModalOpen={this.state.isNewGroupModalOpen} toggleModal={this.toggleNewGroupModal}/> */}
                <div className="row">
                    <div className="card border-0">
                        <div className="card-header">
                            <div className="row">
                                {/* <div className="col-6 text-center">
                                    <span className="fa-stack fa-2x" onClick={this.toggleNewGroupModal}>
                                        <i className="fa fa-circle fa-button fa-stack-2x"></i>
                                        <i className="fa fa-users fa-stack-1x fa-inverse"></i>
                                    </span>
                                </div> */}
                                <div className="col-12 text-center" onClick={this.toggleNewContactModal}>
                                    <span className="fa-stack fa-2x" >
                                        <i className="fa fa-circle fa-button fa-stack-2x"></i>
                                        <i className="fa fa-user-plus fa-stack-1x fa-inverse"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body extra">
                            <div className="card">
                                <div className="card-header text-center">
                                    Chats
                                </div>
                                <div className="card-body">
                                    {/*<input type="text" id="myInput" 
                                    placeholder="Contact name..." title="Type in a name" 
                            className="form-control mb-1"/>*/}
                                    <RenderUsersList contacts={this.props.contacts} removeContact={this.removeContact}
                                        setFriendConversation= {this.setFriendConversation}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

ChatList.propTypes = { 
	auth: PropTypes.object.isRequired, 
	errors: PropTypes.object.isRequired, 
    contacts : PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors, contacts: state.contacts, users: state.users, conversations:state.conversations }); 

export default connect(mapStateToProps, { getContacts, getUsers, removeContact, createNewConversation, 
    getConversations, setCurrentConversation, getMessagesConversation, setCurrentFriendConversation })(withRouter(ChatList)); 

