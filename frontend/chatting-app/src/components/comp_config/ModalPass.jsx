import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import FormPass from './FormPass'

class ModalPass extends React.Component{
     constructor(){
          super()
          this.state = {
               showModal: false
          }
     }

     handleModal(){
          this.setState({showModal: !this.state.showModal})
     }

     render(){
          return(
               <div className="container-fluid col-md-12">

               <Button className="btn-danger d-block"  onClick={()=>this.handleModal()}>Open</Button>

               <Modal show={this.state.showModal} onHide={()=>this.handleModal()}>
                    <Modal.Header  class="modal-header">
                         <h2 className="TitlePass">Change Password</h2>
                    </Modal.Header>

                    <Modal.Body  class="modal-body">
                         <FormPass/>
                    </Modal.Body>

                    <Modal.Footer  class="modal-footer">
                         <Button className="btn btn-primary" onClick={()=>this.handleModal()}>Decline</Button>
                         <Button className="btn btn-success">Accept</Button>
                    </Modal.Footer>
               </Modal>

               </div>
          )
     }
}

export default ModalPass