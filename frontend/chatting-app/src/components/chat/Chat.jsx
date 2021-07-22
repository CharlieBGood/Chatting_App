import React from 'react';
import ChatItem from './ChatItem'
import Avatar from './Avatar'


const Chat = (props) => {
   
    return (
        <div className="main_chatcontent">
                <div className="content_header">
                    
                    <div className="blocks">
                        <div className="buttons-close-min">
                            <button type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                        
                        <div className="current-chatting-user ">
                            <Avatar
                            image={props.image}
                            name={props.name}
                            /> 
                        </div>
                        
                                                
                    </div>
                   
                </div>
                <hr></hr>
                <div className="content__body">
            <div className="chat__items">
                {props.mesages.map((itm) => {
                return (
                    <ChatItem
                    key={itm.key}
                    user={itm.type ? itm.type : "me"}
                    msg={itm.msg}
                    />
                );
                })}
                
            </div>
            </div>

            <div className="content__footer">
                <div className="sendNewMessage">
                    <input
                        type="text"
                        placeholder="Type a message"
                    />
                    <button className="btnSendMsg" id="sendMsgBtn">
                         Send
                    </button>
                </div>
            </div>
        </div>
       
       
        
     );
}
 
export default Chat;