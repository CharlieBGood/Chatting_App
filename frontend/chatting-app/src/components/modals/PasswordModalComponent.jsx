import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormPass from '../comp_config/FormPass'

function PasswordModal(props) {

     return(
          <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}>
               <ModalHeader  class="modal-header">
                    Change Password
               </ModalHeader>

               <ModalBody  class="modal-body">
                    <FormPass/>
               </ModalBody>
               <ModalFooter>
                    <Button color="primary" onClick={props.toggleModal}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={props.toggleModal}>Cancel</Button>
               </ModalFooter>
          </Modal>
     )
}
export default PasswordModal;