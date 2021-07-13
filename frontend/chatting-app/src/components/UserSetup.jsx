import React from 'react'
import ModalPass from './ModalPass'
import InputMoment from './InputMoment'

function UserSetup() {
     return (
          <div className="user-setup">
               <div className="auto-answer">
                    <div className="schedule-answer">
                         <div class="mb-3 form-check">
                              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                              <label class="form-check-label" for="exampleCheck1">Auto-Answer</label>
                         </div>
                         <div>
                              <InputMoment/>
                         </div>
                    </div>
                    <div className="message-answer">
                         <textarea class="form-control"></textarea>
                    </div>
               </div>
               <div className="change-pw">
                    <button className="button-cps">Safety</button>
                    <div className="setup-ps">
                         <ModalPass/>
                    </div>
               </div>
          </div>
     )
}

export default UserSetup
