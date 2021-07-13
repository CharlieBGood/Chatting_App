import React from 'react'
import FormPass from './FormPass'

function ModalPass() {
     return (
          <div className="modal-dialog modal-dialog-centered">
               <div className="modal-dialog">
                    <div className="modal-content">
                         <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Precaution - Change Password</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                         </div>
                         <div className="modal-body">
                              <FormPass/>
                         </div>
                         <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Save</button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default ModalPass
