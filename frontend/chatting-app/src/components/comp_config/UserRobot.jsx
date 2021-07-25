import React from 'react'
import ModalPass from './ModalPass'
import DateTime from './DateTime'


function UserSetup() {

     return (
          <div className="container">
               <div className="row border">
                    <div className="container col-md-12 mt-5">
                         <h2 class="TitlePass">ROBOT</h2>
                         <div className="form-check">
                              <input type="checkbox" className="form-check-input"/>
                              <label className="form-check-label" >Automatic Answer <i class="fas fa-satellite"></i></label>
                         </div>
                         <br />
                         <div className="mt-4">
                              <DateTime/>
                         </div>
                         <br />
                         <textarea className="form-control"></textarea>
                         <br />
                         <button className="btn btn-primary mt-3" type="submit">Program</button>
                    </div>
                    <div className="mt-5">
                              <ModalPass/>
                    </div>
               </div>
          </div>
     )
}

export default UserSetup
