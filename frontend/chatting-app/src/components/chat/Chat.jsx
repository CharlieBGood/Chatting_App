  
import React, { Component, useState, createRef, useEffect } from "react";
import ChatItem from "./ChatItem";
import './chatContent.css'
import PropTypes from "prop-types";
import { connect } from "react-redux"; 
import { withRouter } from 'react-router-dom';
import { getContacts} from '../../redux/actions/actionContacts';
import {getConversations, setCurrentConversation} from '../../redux/actions/actionConversations'
import { getMessage, getMessagesConversation} from '../../redux/actions/actionMessages'
const io = require("socket.io-client");
const ENDPOINT = "http://localhost:5000";
const socket = io(ENDPOINT);



function IsCurrentConversation({handleSearchChange, submitChatMessage, messageValue, currentConversationID,  friendCurrentConversation, currentUser, messages }){
  if(currentConversationID!== null){
        
    return(
      <div className="main__chatcontent">
      <div className="content__header">
          <div className="current-chatting-user">
              <img src="images/man.png" alt="" />              
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
        <div className="sendNewMessage" onSubmit={submitChatMessage}>
          <input
            type="text"
            placeholder="Type a message here"
            id= "input-conversation"
            value= {messageValue}
            onChange={handleSearchChange}
            
          />
          <button className="btnSendMsg" id="sendMsgBtn" onClick={submitChatMessage}>
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
    );
  }else{
    return <span className="Message-no-open-chat">Open a conversation to start a chat. </span>;
  }
}

export class Chat extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      messageValue: "",
      messages: []
      
    }
    this.friendCurrentConversation = this.friendCurrentConversation.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.submitChatMessage = this.submitChatMessage.bind(this);
}
   

  componentDidMount(){
    this.props.getMessagesConversation(this.props.conversations.currentConversation)

    
   
    
    socket.on('Output Chat Message', messageFromBackend =>{
      console.log(messageFromBackend);
      this.props.getMessage(messageFromBackend)
    });
  }


  friendCurrentConversation(){
    const friendId = this.props.currentConversation.members.find((m)=> m!== this.props.auth.user._id);
    const friend= this.props.contacts.contacts.find(m=> m.id === friendId);
    return friend;
  }

  handleSearchChange = (e) =>{
    this.setState({
      messageValue: e.target.value
    })
  }

  submitChatMessage=(e)=>{
    e.preventDefault();

    let text = this.state.messageValue
    let sender= this.props.auth.user.id;
    let conversationId = this.props.conversations.currentConversation

    socket.emit('Input Chat Message', {
      conversationId,
      text,
      sender,
      
    })
    this.setState({messageValue: ""})
  }

  
  componentWillReceiveProps(propsa){
    console.log(propsa.conversations.currentConversation)
  }

  render() {
    return (
    
    <IsCurrentConversation
      currentConversationID = {this.props.conversations.currentConversation}
      friendCurrentConversation={this.friendCurrentConversation}
      currentUser={this.props.auth.user.id}
      messageValue={this.state.messageValue}
      handleSearchChange={this.handleSearchChange}
      submitChatMessage={this.submitChatMessage}
      messages={this.props.messages}

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

