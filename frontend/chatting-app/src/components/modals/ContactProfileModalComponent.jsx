import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserProfile from '../profile/UserProfile'


function ContactProfile(props){

    if (props.user !== null){
        return (
            <Modal isOpen={props.isModalOpen} toggle={props.toggleModal} size='lg'>
                <ModalHeader>{props.user.nickname} Profile</ModalHeader>
                <ModalBody>
                    <div className='container scroll-modal'>
                        <div  className="row text-center"> 
                            <UserProfile user={props.user}/>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }   
    else{
        return ""
    }
}

export default ContactProfile;
