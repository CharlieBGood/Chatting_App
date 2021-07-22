import React from 'react'
import Grid from '@material-ui/core/grid'
import './chatContent.css'

const Avatar = (props) => {
    return ( 
        <div className="avatar">
            <div className="avatar-img ">
              <Grid container>
                  <Grid item sm={7}>
                    <img src={props.image} alt="profile pic" />
                  </Grid>
                  <Grid item sm={5}>
                      <p>{props.name}</p>
                  </Grid>
                  

              </Grid>
              
          </div>

        </div>
          
     );
}
 
export default Avatar;