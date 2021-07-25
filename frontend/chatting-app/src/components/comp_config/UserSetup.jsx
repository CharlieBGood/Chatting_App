import React from 'react'
import FormUpdate from './FormUpdate'
import UserPhoto from './../../img/task26.png'


function UserSetup() {
     return (
          <div className="container">
               <div className="row justify-content-center">
                    <img className="miniature-profile-image" src={UserPhoto} alt="ActRazer" />
                    <hr />
                    <button className="btn btn-circle btn-md mb-3" type="button">Shift Photo</button>
               </div>
               <div className="row justify-content-center">
                    <FormUpdate/>
               </div>
          </div>

     )
}

export default UserSetup


