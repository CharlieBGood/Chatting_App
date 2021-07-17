import React, { Component } from "react";
import ChatsGrid from './chat/ChatsGrid'
import ChatListComponent from "./chats_list/ChatsListComponent";

class ChatAppComponent extends Component {
    constructor(props){
        super(props)
      }

    render(){
        return(
            <div class="row app-container">
                <div class="col-3">
                    <div class="miniature-profile-summary">
                        hi
                    </div>
                    <div class="border">
                        <ChatListComponent />
                    </div>
                </div>
                <div class="col-9">
                    <ChatsGrid />
                </div>
            </div>
        );
    }
}

export default ChatAppComponent;
