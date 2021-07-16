import React, { Component } from 'react'
import chatItems from './chatItems.json'

const ChatItemGroup = (props) => {
    return (
      

        <div className={`chat__item ${props.user ? props.user : ""}`}>
           
            <div className="chat__item__content">
                <div className="chat_item_author">{props.author}</div>
                <div className="chat__msg">{}</div>
                <div className="chat__meta">
                    <span>Hace 16 min</span>
                </div>
            </div>
        
      </div>
     );
}
 
export default ChatItemGroup;