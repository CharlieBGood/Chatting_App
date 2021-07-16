import React, { Component } from 'react'
import './UserProfile.css'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/grid'



const UserProfile = () => {
  return (
    <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
          <Grid container justifyContent="center" alignItems="center">
              <Grid item sm = {6}>
                <div className="profile-pic">
                  <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt="" />
                </div>
                
              </Grid>

                <Grid item sm={6} container>
                  <Grid item sm={3}>
                    <p><span>Nombre:</span></p>
                    <p>Apodo:</p>
                    <p>Teléfono:</p>
                    <p>Email:</p>
                  </Grid>
                  
                  <Grid item sm={9}>
                    <p>Juan Perez</p>
                    <p>Juancho</p>
                    <p>3015457455</p>
                    <p>juan@gmail.com</p>
                    </Grid>
                        
              </Grid>
          
           </Grid>
    
            <Grid item sm={12}>
            <div class="container">
                <a href="https://github.com/CharlieBGood" target="_blank" rel="noreferrer"
                    class="ml-2">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="https://www.instagram.com/carlosb1196/" target="_blank" rel="noreferrer"
                    class="ml-1 ">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="https://twitter.com/CharlieBGood_" target="_blank" rel="noreferrer"
                    class="ml-1">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/carlos-bueno-19058115b/" target="_blank" rel="noreferrer"
                    class="ml-1">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </div>
            </Grid>
            <Grid item sm={12}>
              <div className="button-nuevo-chat">
                <button>Nuevo chat</button>
              </div>
              
            </Grid>

    </Grid>
   
   );
}
 
export default UserProfile;