import React, { Component } from "react";
import ChatsGrid from './chat/ChatsGrid'
import ChatListComponent from "./chats_list/ChatsListComponent";
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

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
            <div class="row app-container">
                <div class="col-3">
                    <div class="miniature-profile-summary">
                        <MiniatureProfileSummary user={this.props.auth.user}/> 
                    </div>
                    <div class="border">
                        {/* <ChatListComponent users={this.props.users}/> */}
                    </div>
                </div>
                <div class="col-9">
                    {/* <ChatsGrid chats_list={this.props.chats_list}/> */}
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
