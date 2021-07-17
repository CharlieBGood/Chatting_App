import React, { Component } from "react";
import ChatsGrid from './chat/ChatsGrid'

class ChatAppComponent extends Component {
    constructor(props){
        super(props)
      }

    render(){
        return(
            <div class="row app-container">
                <div class="col-3">
                    <div class="miniature-profile-summary border">
                        hi
                    </div>
                    <div class="border">
                        there
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
