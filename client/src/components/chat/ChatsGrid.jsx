import React from 'react'
import Chat from './Chat'
import './chatContent.css'
import Grid from '@material-ui/core/grid'

const ChatsGrid = (props) => {
    return (
        <Grid container>
            {props.chats_list.map(user =>
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