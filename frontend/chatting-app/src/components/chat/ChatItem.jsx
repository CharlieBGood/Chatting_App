import React, { Component } from 'react'

const ChatItem = (props) => {
    return (

        <div className={`chat__item ${props.user ? props.user : ""}`}>
            <div className="chat__item__content">
            <div className="chat__msg">{props.msg}</div>
            <div className="chat__meta">
                <span>Hace 16 min</span>
            </div>
            </div>
        
      </div>
     );
}
 
export default ChatItem;