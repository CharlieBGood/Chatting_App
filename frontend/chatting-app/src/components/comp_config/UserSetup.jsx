import React from 'react'
import FormUpdate from './FormUpdate'
import UserPhoto from './../../img/task26.png'


function UserSetup() {
     return (
          <div className="container-fluid" class="setupUser">

               <div className="row">
                    <div className="col-2 mt-5">
                         <img width={310} src={UserPhoto} alt="ActRazer" />

                         <button class="butonshift" type="button">Shift Photo</button>

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


