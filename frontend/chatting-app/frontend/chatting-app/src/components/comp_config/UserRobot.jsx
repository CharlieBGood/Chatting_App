import React from 'react'
import ModalPass from './ModalPass'
import DateTime from './DateTime'


function UserSetup() {

     return (
          <div className="container" class="setupRobot">
               <div className="row">
                    <div className="container col-md-12 mt-5">
                         <div>
                              <h2 class="TitlePass">ROBOT</h2>
                         </div>

                         <div className="col-md-12 form-check">
                              <input type="checkbox" className="form-check-input"/>
                              <label className="form-check-label" >Automatic Answer <i class="fas fa-satellite"></i></label>
                         </div>

                         <br />
                         <div className="col-md-12 mt-4">
                              <DateTime/>
                         </div>

                         <br />
                         <div className="col-md-12">
                              <textarea className="form-control" class></textarea>
                         </div>

                         <button className="btn btn-warning mt-3" type="submit">Program</button>
                    </div>

                    <div className="col-md-12 mt-lg-5">
                              <ModalPass/>
                    </div>
               </div>
          </div>
     )
}

export default UserSetup
