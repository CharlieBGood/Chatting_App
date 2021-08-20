  
import React, { Component, useState, createRef, useEffect } from "react";
import ChatItem from "./ChatItem";
import './chatContent.css'
import PropTypes from "prop-types";
import { connect } from "react-redux"; 
import { withRouter } from 'react-router-dom';
import {getConversations} from '../../redux/actions/actionConversations'
import { getMessage, getMessagesConversation} from '../../redux/actions/actionMessages'
const io = require("socket.io-client");
const ENDPOINT = "http://localhost:5000";
const socket = io(ENDPOINT);

function IsCurrentConversation({handleSearchChange, submitChatMessage, messageValue, currentConversationID,  
  friendCurrentConversation, currentUser, messages, handleKeyPress }){
  if(currentConversationID!== null && friendCurrentConversation !== null){
        
    return(
      <div className="main__chatcontent">
      <div className="content__header">
          <div className="current-chatting-user">
            <img src={friendCurrentConversation.image != '' ? friendCurrentConversation.image : 'images/profile_dummy.png'} className='miniature-profile-image'  alt="profile img" 
                />              
            <p>{friendCurrentConversation.nickname}</p>
          </div>
      </div>
      <div className="content__body">
        <div className="chat__items">

          
          { Object.keys(messages).length === 0? 'Send a message':
          messages.messages.map((itm) => {
        
            return (
              <ChatItem
                key={itm._id}
                user={itm.sender === currentUser ? "me" : ""}
                msg={itm.text}
                time={itm.createdAt}
              />
            );
          })}
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <input
            type="text"
            placeholder="Type a message here"
            id= "input-conversation"
            value= {messageValue}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
          <button className="btnSendMsg" id="sendMsgBtn" onClick={submitChatMessage}>
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
    );
  }else{
    return (
      <div className='contenedor'>
        <img src='images/withOutChat.png' className='image_witout' alt=''/>
        {/* <span className="Message-no-open-chat">Open a conversation to start a chat. </span> */}
       </div> 
      );
  }
}

export class Chat extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      messageValue: "",
      messages: [],
      friend : null,
      socket : null
      
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.submitChatMessage = this.submitChatMessage.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
}
   

  componentDidMount(){
    this.props.getMessagesConversation(this.props.conversations.currentConversation)
    
    socket.on('Output Chat Message', messageFromBackend =>{
      this.props.getMessage(messageFromBackend)
    });
    this.setState({
      socket : socket
    })
  }

  componentWillReceiveProps(nextProps){
    if (this.props.conversations.currentConversation != nextProps.conversations.currentConversation){
      this.props.getMessagesConversation(nextProps.conversations.currentConversation)
    }
  }

  handleSearchChange = (e) =>{
    this.setState({
      messageValue: e.target.value
    })
  }

  handleKeyPress(e){
    if (e.charCode === 13) {
      this.submitChatMessage()
    }
  }

  submitChatMessage=()=>{

    let text = this.state.messageValue
    let sender= this.props.auth.user.id;
    let conversationId = this.props.conversations.currentConversation
    if (text != ''){
      socket.emit('Input Chat Message', {
        conversationId,
        text,
        sender,
        
      })
      this.setState({messageValue: ""})
    }
  }

  render() {
    return (
    
    <IsCurrentConversation
      currentConversationID = {this.props.conversations.currentConversation}
      friendCurrentConversation={this.props.conversations.currentConversationFriend}
      currentUser={this.props.auth.user.id}
      messageValue={this.state.messageValue}
      handleSearchChange={this.handleSearchChange}
      submitChatMessage={this.submitChatMessage}
      messages={this.props.messages}
      handleKeyPress={this.handleKeyPress}
    />
      
   
    );
  }
}

Chat.propTypes = { 
	auth: PropTypes.object.isRequired, 
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ 
  auth: state.auth, 
  errors: state.errors, 
  contacts: state.contacts, 
  messages:state.messages, 
  conversations: state.conversations
}); 

export default connect(mapStateToProps, {getMessagesConversation, getMessage, getConversations})(withRouter(Chat)); 

