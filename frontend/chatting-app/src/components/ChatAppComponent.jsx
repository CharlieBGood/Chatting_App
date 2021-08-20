import React, { Component } from "react";
import Chat from './chat/Chat'
import ChatList from "./chats_list/ChatsListComponent";
import MiniatureProfileSummary from "./miniature_profile/MiniatureProfileSummaryComponent";
import PropTypes from "prop-types";
import { connect } from "react-redux"; 
import { withRouter } from 'react-router-dom';

class ChatApp extends Component {

    constructor(){
        super();
		this.state = {
			errors: {}
		}
    }

    render(){
        return(
            <div className="row app-container">
                <div className="col-3">
                    <div className="row">
                        <div className="miniature-profile-summary">
                            <MiniatureProfileSummary user={this.props.auth.user}/> 
                        </div>
                    </div>
                    <div className="border mt-4">
                        <ChatList />
                    </div>
                </div>
                <div className="col-9">
                    <Chat socket={this.props.socket}/> 
                </div>
            </div>
        );
    }
}

ChatApp.propTypes = { 
	auth: PropTypes.object.isRequired, 
	errors: PropTypes.object.isRequired, 
};

const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors }); 

export default connect(mapStateToProps)(withRouter(ChatApp)); 
