import React, { Component } from 'react'
import Chat from './Chat'
import './chatContent.css'
import chatItems from './chatItems.json'
import Grid from '@material-ui/core/grid'

const ChatsGrid = () => {
    return (
        <Grid container>
            {chatItems.map(user =>
                <Grid item sm={6}>
                    <Chat
                        key={user.id}
                        image={user.imagen}
                        name={user.nombre}
                        mesages={user.mensajes}
                    />
                </Grid>
            )}    
        </Grid>
    );
  
}
export default ChatsGrid;