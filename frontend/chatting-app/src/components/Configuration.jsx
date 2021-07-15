import React from 'react'
import UserSetup from './UserSetup'
import User from './User'

function Configuration() {
     return (
          <div className="container">
               <div className="row">
                    <div className="col-md-5">
                         <UserSetup/>
                    </div>
                    <div className="col-md-7">
                         <User/>
                    </div>
               </div>
          </div>
     )
}

export default Configuration
