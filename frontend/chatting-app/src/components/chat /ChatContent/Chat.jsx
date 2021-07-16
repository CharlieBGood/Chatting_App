import React, { useState, } from 'react';
import ChatItem from './ChatItem'
import chatItms from './chatItems.json'
import Avatar from './Avatar'
import  "react-icons/fa";

const Chat = (props) => {
   
    
    return (
        <div className="main_chatcontent">
                <div className="content_header">
                    <div className="blocks">
                        <div className="current-chatting-user ">
                            <Avatar
                            image="https://image.flaticon.com/icons/png/512/147/147144.png"
                            name="Juan Perez"
                            /> 
                        </div>
                    </div>
                   
                </div>
                <div className="content__body">
            <div className="chat__items">
                {chatItms.map((itm) => {
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
                        placeholder="Escribe un mensaje"
                    />
                    <button className="btnSendMsg" id="sendMsgBtn">
                         Enviar
                    </button>
                </div>
            </div>
        </div>
       
       
        
     );
}
 
export default Chat;