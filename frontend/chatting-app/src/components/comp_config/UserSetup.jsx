import React from 'react'
import FormUpdate from './FormUpdate'


function UserSetup(props) {
     return (
          <div className="container">
               <div className="row justify-content-center">
                    <img className="miniature-profile-image" src={props.user.imagen} alt="ActRazer" />
                    <hr />
                    <span class="fa-stack fa-2x mb-4">
                         <i class="fa fa-circle fa-button fa-stack-2x"></i>
                         <i class="fa fa-id-badge fa-stack-1x fa-inverse"></i>
                    </span>
               </div>
               <div className="row justify-content-center">
                    <FormUpdate user={props.user}/>
               </div>
          </div>
     )
}

export default UserSetup


