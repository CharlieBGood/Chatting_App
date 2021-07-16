import React, { Component } from 'react'
import './UserProfile.css'



const UserProfile = () => {
  return ( 
    <div className="main_userProfile">
         <div className="profile row">
            <div className="profile-pic col-1">
              <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt="" />
            </div>           
            <div className="profile-info col-2">
              <p>Andrés Rodriguez</p>
              <p>Andru</p>
              <p>3015457455</p>
              <p>andres@gmail.com</p>
            </div>
         
          </div>
         
          <div className="profile-social">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Twitter</p>
          </div>
        
        
       

    </div>
   );
}
 
export default UserProfile;