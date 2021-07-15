import React from 'react'
import ModalPass from './ModalPass'
import momentjs from 'moment';
import FormPass from './FormPass'

function UserSetup() {
     return (
          <div className="container">
               <div className="row">
                    <div className="col-md-12">
                         <div className="col-md-12">
                              <div class="col-md-3 form-check">
                                   <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                   <label class="form-check-label" >Auto-Answer</label>
                              </div>
                              <div className="col-md-6">
                                   {momentjs}
                              </div>
                         </div>
                         <div className="col-md-12">
                              <textarea class="form-control">Message</textarea>
                         </div>
                    </div>


                    <div className="col-md-12">
                         <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="action-modal">Pass</button>
                         <div className="modal" id="action-modal">
                              <div className="modal-dialog modal-dialog-centered">
                                   <div className="modal-dialog">
                                        <div className="modal-content">
                                             <div className="modal-header">
                                                  <h5 className="modal-title">Precaution - Change Password</h5>
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
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default UserSetup
