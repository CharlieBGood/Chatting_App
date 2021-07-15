import React from 'react'
import FormUpdate from './FormUpdate'
import UserPhoto from './../../img/task26.png'


function UserSetup() {
     return (
          <div className="container">
               <div className="row">
                    <div className="col-lg-4 mt-md-5">
                         <img src={UserPhoto} />

                         <br />

                         <button type="submit" className="btn btn-primary col-10 m-md-5">New Photograph</button>


                    </div>

                    <div className="col-lg-1">
                         <br />
                    </div>

                    <div className="col-lg-7">
                         <FormUpdate/>
                    </div>
               </div>

          </div>
     )
}

export default UserSetup


