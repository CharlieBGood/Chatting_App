import React from 'react'
import UserSetup from '../comp_config/UserSetup'
import UserRobot from '../comp_config/UserRobot'

function Configuration() {
     return (
          <div className="container-fluid">
               <div className="row">
                    <div className="col-lg-3 mb-md-1">
                         <UserRobot/>
                    </div>
                    <div className="col-lg-9 mt-md-1">
                         <UserSetup/>
                    </div>
               </div>
          </div>
     )
}

export default Configuration
