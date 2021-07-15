import React from 'react'

function FormPass() {
     return (
          <div className="row col-12">
               <div className="row g-2 align-items-center">
                    <div className="col-auto">
                         <label for="inputPassword6" className="col-form-label">Actual Password</label>
                    </div>

                    <div className="col-auto">
                         <input type="password" id="inputPassword6" className="form-control" />
                    </div>

                    <div className="col-auto">
                         <span id="passwordHelpInline" className="form-text">Remember the password</span>
                    </div>
               </div>

               <div className="row g-2 align-items-center">
                    <div className="col-auto">
                         <label for="inputPassword6" className="col-form-label">New Password</label>
                    </div>
                    <div className="col-auto">
                         <input type="password" id="inputPassword6" className="form-control" />
                    </div>
                    <div className="col-auto">
                         <span id="passwordHelpInline" className="form-text">Must be 8-20 characters long</span>
                    </div>
               </div>

               <div className="row g-2 align-items-center">
                    <div className="col-auto">
                         <label for="inputPassword6" className="col-form-label">Confirm Password</label>
                    </div>
                    <div className="col-auto">
                         <input type="password" id="inputPassword6" className="form-control" />
                    </div>
                    <div className="col-auto">
                         <span id="passwordHelpInline" className="form-text">Write the New Password</span>
                    </div>
               </div>

          </div>
     )
}

export default FormPass
