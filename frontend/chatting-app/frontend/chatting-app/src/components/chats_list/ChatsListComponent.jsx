import React, { Component } from "react";
import chatItems from '../chat/chatItems.json'
import NewContact from "../modals/NewContactComponent";


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
          isNewContactModalOpen: false
        }
        this.toggleNewContactModal = this.toggleNewContactModal.bind(this);
    }

    toggleNewContactModal(){
        this.setState({
            isNewContactModalOpen: !this.state.isNewContactModalOpen
        });
    }

    render(){
        return(
            <React.Fragment>
                <NewContact isModalOpen={this.state.isNewContactModalOpen} toggleModal={this.toggleNewContactModal}/>
                <div class="row">
                    <div class="card border-0">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-4 text-center">
                                    <span class="fa-stack fa-2x">
                                        <i class="fa fa-circle fa-stack-2x"></i>
                                        <i class="fa fa-users fa-stack-1x fa-inverse"></i>
                                    </span>
                                </div>
                                <div class="col-4 text-center">
                                    <span class="fa-stack fa-2x">
                                        <i class="fa fa-circle fa-stack-2x"></i>
                                        <i class="fa fa-bullhorn fa-stack-1x fa-inverse"></i>
                                    </span>
                                </div>
                                <div class="col-4 text-center" onClick={this.toggleNewContactModal}>
                                    <span class="fa-stack fa-2x" >
                                        <i class="fa fa-circle fa-stack-2x"></i>
                                        <i class="fa fa-user-plus fa-stack-1x fa-inverse"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card">
                                <div class="card-header">
                                    <ul class="nav nav-tabs card-header-tabs">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="">Chats</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Friends</a>
                                    </li>
                                    </ul>
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
