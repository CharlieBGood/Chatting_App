import React, { Component } from 'react'
import UserSetup from '../comp_config/UserSetup'
import UserRobot from '../comp_config/UserRobot'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Configuration extends Component {

     render(){
          return (

               <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal} size='lg'>
                    <ModalHeader>Configuration</ModalHeader>
                    <ModalBody>
                         <div className="container-fluid">
                              <div className="row">
                                   <div className="col-md-5 col-12 mb-md-1">
                                        <UserRobot/>
                                   </div>
                                   <div className="col-md-7 col-12 mt-md-1">
                                        <UserSetup/>
                                   </div>
                              </div>
                         </div>
                    </ModalBody>
                    <ModalFooter>
                         <Button color="primary" onClick={this.props.toggleModal}>Do Something</Button>{' '}
                         <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
                    </ModalFooter>
               </Modal>
          )
     }
}

export default Configuration
