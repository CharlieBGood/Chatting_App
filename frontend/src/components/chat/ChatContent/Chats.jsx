import React, { Component } from 'react'
import Chat from './Chat'
import './chatContent.css'

const Chats = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Chat/>
                </div>        
            </div>
            
        </div>
     );
}
 
export default Chats;