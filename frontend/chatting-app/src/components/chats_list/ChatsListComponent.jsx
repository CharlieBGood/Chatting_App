import React, { Component } from "react";
import chatItems from '../../dummydb/contacts.json'
import NewContact from '../modals/NewContactModalComponent'
import NewGroup from "../modals/NewGroupModalComponent";


function RenderUsersList(props){
    var id = -1;
    const chatsList = props.chats.sort().map((chat) =>{
        id++;
        return(
            <li className="list-group-item" id={"id_user_"+id}>
                <div class="row">
                    <div class="col-2">
                        <img src={chat.imagen} className="img-fluid chat-list-miniature" id="fotoGrupo" alt="logo" />
                    </div>
                    <div class="col-10">
                        {chat.nombre}
                    </div>
                </div>
            </li>
        );
    });
    return(
        <div class="scrollable w-100">
            <ul className="list-group">
                {chatsList}
            </ul>
        </div>
    );
}

class ChatListComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
          profile : null,
          isNewContactModalOpen: false,
          isNewGroupModalOpen: false
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

    render(){
        return(
            <React.Fragment>
                <NewContact isModalOpen={this.state.isNewContactModalOpen} toggleModal={this.toggleNewContactModal} users={this.props.users}/>
                <NewGroup isModalOpen={this.state.isNewGroupModalOpen} toggleModal={this.toggleNewGroupModal}/>
                <div class="row">
                    <div class="card border-0">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-6 text-center">
                                    <span class="fa-stack fa-2x" onClick={this.toggleNewGroupModal}>
                                        <i class="fa fa-circle fa-button fa-stack-2x"></i>
                                        <i class="fa fa-users fa-stack-1x fa-inverse"></i>
                                    </span>
                                </div>
                                <div class="col-6 text-center" onClick={this.toggleNewContactModal}>
                                    <span class="fa-stack fa-2x" >
                                        <i class="fa fa-circle fa-button fa-stack-2x"></i>
                                        <i class="fa fa-user-plus fa-stack-1x fa-inverse"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card">
                                <div class="card-header text-center">
                                    Chats
                                </div>
                                <div class="card-body">
                                    <input type="text" id="myInput" onkeyup="myFunction()" 
                                    placeholder="Contact name..." title="Type in a name" 
                                    class="form-control mb-1"/>
                                    <RenderUsersList chats={chatItems} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ChatListComponent;
