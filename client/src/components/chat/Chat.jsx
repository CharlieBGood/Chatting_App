import React, { Component } from "react";
import ChatItem from "./ChatItem";
import ContactProfile from "../modals/ContactProfileModalComponent";
import './chatContent.css'
import PropTypes from "prop-types";
import { connect } from "react-redux"; 
import { withRouter } from 'react-router-dom';
import {getConversations} from '../../redux/actions/actionConversations'
import { getMessage, getMessagesConversation} from '../../redux/actions/actionMessages'
import socket from '../../Socket'


function IsCurrentConversation({handleSearchChange, submitChatMessage, messageValue, currentConversationID,  
  friendCurrentConversation, currentUser, messages, handleKeyPress, showContactProfile }){
  if(currentConversationID!== null && friendCurrentConversation !== null){
        
    return(
      <div className="main__chatcontent">
      <div className="content__header">
          <div className="current-chatting-user">
            <img src={friendCurrentConversation.image !== '' ? friendCurrentConversation.image : 'images/profile_dummy.png'} className='miniature-profile-image'  alt="profile img" 
                onClick={showContactProfile}/>              
            <p>{friendCurrentConversation.nickname}</p>
          </div>
      </div>
      <div className="content__body mt-3">
        <div className="chat__items">
          { Object.keys(messages).length === 0 ? 'Send a message':
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
            className="border"
            autoComplete="off"
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
        <span className="message-no-open-chat">Open a conversation to start a chat</span>
        <img src='images/withOutChat.png' className='image_witout' alt=''/>
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
      contact : null,
      isContactProfileModalOpen: false,
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.submitChatMessage = this.submitChatMessage.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toggleContactProfileModal = this.toggleContactProfileModal.bind(this);
  }
   

  componentDidMount(){
    this.props.getMessagesConversation(this.props.conversations.currentConversation)
    if (socket.listeners('Output Chat Message').length === 0){
      socket.on('Output Chat Message', messageFromBackend =>{
        this.props.getMessage(messageFromBackend)
      })
    }
  }

  toggleContactProfileModal(){
    this.setState({
      isContactProfileModalOpen: !this.state.isContactProfileModalOpen
    });
  }

  componentWillReceiveProps(nextProps){
    if (this.props.conversations.currentConversation !== nextProps.conversations.currentConversation){
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
    if (text !== ''){
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
      <React.Fragment>
        <ContactProfile isModalOpen={this.state.isContactProfileModalOpen} toggleModal={this.toggleContactProfileModal} 
          user={this.props.conversations.currentConversationFriend}/>
        <IsCurrentConversation
          currentConversationID = {this.props.conversations.currentConversation}
          friendCurrentConversation={this.props.conversations.currentConversationFriend}
          currentUser={this.props.auth.user.id}
          messageValue={this.state.messageValue}
          handleSearchChange={this.handleSearchChange}
          submitChatMessage={this.submitChatMessage}
          messages={this.props.messages}
          handleKeyPress={this.handleKeyPress}
          showContactProfile={this.toggleContactProfileModal}
        />
      </React.Fragment>
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

