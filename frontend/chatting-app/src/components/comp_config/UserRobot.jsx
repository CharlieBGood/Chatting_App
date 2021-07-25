import React, {Component} from 'react'
import PasswordModal from '../modals/PasswordModalComponent'
import DateTime from './DateTime'


class UserSetup extends Component {

     constructor(props){
          super(props)
          this.state = {
            isPasswordModalOpen: false
          }
          this.togglePasswordModal = this.togglePasswordModal.bind(this);
      }
  
     togglePasswordModal(){
          this.setState({
               isPasswordModalOpen: !this.state.isPasswordModalOpen
          });
      }

     render(){
          return (
               <div className="container">
                    <PasswordModal isModalOpen={this.state.isPasswordModalOpen} toggleModal={this.togglePasswordModal} />
                    <div className="row robot-container">
                         <div className="col-md-12 col-12 mt-5 text-center">
                              <h2 class="TitlePass">ROBOT</h2>
                              <br />
                              <div className="mt-4">
                                   <DateTime/>
                              </div>
                              <br />
                              <textarea className="form-control"></textarea>
                              <div className="form-check mt-2 text-left">
                                   <input type="checkbox" className="form-check-input"/>
                                   <label className="form-check-label">Automatic Answer</label>
                              </div>
                              <br />
                              <button className="btn btn-primary mt-3" type="submit">Program</button>
                         </div>
                         <div className="col-md-12 col-12 mt-5 text-center">
                              <span class="fa-stack fa-2x" onClick={this.togglePasswordModal}>
                                   <i class="fa fa-circle fa-button fa-stack-2x"></i>
                                   <i class="fa fa-user-secret fa-stack-1x fa-inverse"></i>
                              </span>
                         </div>
                    </div>
               </div>
          )
     }
}

export default UserSetup
