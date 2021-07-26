import React, { Component } from "react";
import ChatsGrid from './chat/ChatsGrid'
import ChatListComponent from "./chats_list/ChatsListComponent";
import MiniatureProfileSummary from "./MiniatureProfileSummaryComponent";

class ChatApp extends Component {

    render(){
        return(
            <div class="row app-container">
                <div class="col-3">
                    <div class="miniature-profile-summary">
                        <MiniatureProfileSummary user={this.props.user} />
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

export default ChatApp;
