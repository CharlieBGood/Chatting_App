import React from 'react'
import FormUpdate from './FormUpdate'
import UserPhoto from './../../img/task26.png'


function UserSetup() {
     return (
          <div className="container-fluid" class="setupUser">
               <div className="row">
                    <div className="col-2 mt-5">
                         <img src={UserPhoto} />

                         <br />

                         <button type="submit" className="btn btn-primary  m-md-5">New Photograph</button>
                    </div>

                    <div className="col-1">
                         <br />
                    </div>

                    <div className="col-9">
                         <FormUpdate/>
                    </div>
               </div>

          </div>
     )
}

export default UserSetup


