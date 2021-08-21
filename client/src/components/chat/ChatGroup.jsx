import React from 'react';
import ChatItemGroup from './ChatItemGroup'
import Avatar from './Avatar'
import chatItems from '../../dummydb/chatItems.json'

const ChatGrupo = (props) => {
   {chatItems.map(item=>{ 
        if(item.tipo=== "grupal"){
            return (
                <div className="main_chatcontent">
                        <div className="content_header">
                            <div className="blocks">
                                <div className="current-chatting-user ">
                                    <Avatar
                                    image={item.image}
                                    name={item.name}
                                    /> 
                                </div>
                                
                            </div>
                            <button type="button" className="btn-close" aria-label="Close"></button>
                           
                        </div>
                        <div className="content__body">
                    <div className="chat__items">
                        {item.map((itm) => {
                        return (
                            <ChatItemGroup
                            key={item.key}
                            user={itm.type ? itm.type : "me"}
                            autor={itm.autor}
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
               
               
                
         );}
   })}
    
    
}
 
export default ChatGrupo;