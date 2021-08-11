import React, { Component } from "react";
import chatItems from '../../dummydb/contacts.json'
import NewContact from '../modals/NewContactModalComponent'
import NewGroup from "../modals/NewGroupModalComponent";
import PropTypes from "prop-types";
import { connect } from "react-redux"; 
import { withRouter } from 'react-router-dom';
import { getContacts } from '../../redux/actions/actionContacts';
import { getUsers } from '../../redux/actions/actionUsers';


function RenderUsersList(props){

    var id = -1;
    const contactsList = props.contacts.map((contact) => {
        id++;
        return(
            <li className="list-group-item" id={"id_user_"+id} key={"id_user_"+id}>
                <div className="row">
                    <div className="col-2">
                        <img src="images/man.png" className="img-fluid chat-list-miniature" id="fotoGrupo" alt="logo" />
                    </div>
                    <div className="col-10">
                        {contact.nickname}
                    </div>
                </div>
            </li>
        );
    });

    if (props.isLoading) {
        return(
            <h1>Is Loading</h1>
        )
    }
    else{
        return(
            <div className="scrollable w-100">
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
          profile : null,
          isNewContactModalOpen: false,
          isNewGroupModalOpen: false,
        }
        this.toggleNewContactModal = this.toggleNewContactModal.bind(this);
        this.toggleNewGroupModal = this.toggleNewGroupModal.bind(this);
    }

    toggleNewContactModal(){
        this.setState({
            isNewContactModalOpen: !this.state.isNewContactModalOpen
        });
    }
    toggleNewGroupModal(){
        this.setState({
            isNewGroupModalOpen: !this.state.isNewGroupModalOpen
        });
    }

    componentDidMount(){
        this.props.getContacts(this.props.auth.user.id);
        
    }

    render(){
        return(
            <React.Fragment>
                <NewContact isModalOpen={this.state.isNewContactModalOpen} toggleModal={this.toggleNewContactModal} /> 
                {/* <NewGroup isModalOpen={this.state.isNewGroupModalOpen} toggleModal={this.toggleNewGroupModal}/> */}
                <div className="row">
                    <div className="card border-0">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-6 text-center">
                                    <span className="fa-stack fa-2x" onClick={this.toggleNewGroupModal}>
                                        <i className="fa fa-circle fa-button fa-stack-2x"></i>
                                        <i className="fa fa-users fa-stack-1x fa-inverse"></i>
                                    </span>
                                </div>
                                <div className="col-6 text-center" onClick={this.toggleNewContactModal}>
                                    <span className="fa-stack fa-2x" >
                                        <i className="fa fa-circle fa-button fa-stack-2x"></i>
                                        <i className="fa fa-user-plus fa-stack-1x fa-inverse"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="card">
                                <div className="card-header text-center">
                                    Chats
                                </div>
                                <div className="card-body">
                                    <input type="text" id="myInput" 
                                    placeholder="Contact name..." title="Type in a name" 
                                    className="form-control mb-1"/>
                                    <RenderUsersList isLoading={this.props.contacts.isLoading} contacts={this.props.contacts.contacts} />
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
};

const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors, contacts: state.contacts, users: state.users }); 

export default connect(mapStateToProps, { getContacts, getUsers })(withRouter(ChatList)); 

