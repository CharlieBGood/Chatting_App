import React from 'react'
import Grid from '@material-ui/core/grid'
import './chatContent.css'

const Avatar = (props) => {
    return ( 
        <div className="avatar">
            <div className="avatar-img row ">
            
                  <div className=" col-6">
                    <img src={props.image} alt="profile pic" />
                  
                  </div>
                  <div className="col-6">
                    <p>{props.name}</p>
                  </div>
         
              
          </div>

        </div>
          
     );
}
 
export default Avatar;