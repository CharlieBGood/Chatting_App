import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
     Col, Row, Form, FormGroup, Input, Label } from 'reactstrap';
import { connect } from "react-redux"; 
import { withRouter } from 'react-router-dom';
import { changePassword } from "../../redux/actions/actionAuth";
import { cleanErrors } from "../../redux/actions/actionAuth";
import swal from 'sweetalert';


function cleanErrorsForDisplay(props){
	if (props.old_password){
		return props.old_password
	}
	else if (props.password){
		return props.password
	}
	else if (props.password2){
		return props.password2
	}
	else if (props.emailnotfound){
		return props.emailnotfound
	}
}



class PasswordModal extends Component {

     constructor(){
          super();
          this.state = {
               old_password : "",
               password: "", 
               password2: "",  
               hasChanged : false,
               errors : false
          }
          this.changePassword = this.changePassword.bind(this)
     }

     onChange = e => { 
		this.setState({ [e.target.id]: e.target.value }); 
	};

     componentWillReceiveProps(nextProps){ 

          if (Object.keys(nextProps.errors).length !== 0) { 
               var error = cleanErrorsForDisplay(nextProps.errors)
               swal("Error!", error, "error");
               this.props.cleanErrors();
               this.setState({
                    hasChanged : false,
                    errors : true
               })
          }
     }

     componentDidUpdate(){
          if (this.state.hasChanged && !this.state.errors)  {
               swal("Success!", 'Your password has changed', "success");
               this.props.toggleModal();
               this.setState({
                    hasChanged : false,
                    errors : false
               }) 
          }
     }

     changePassword(){

          const data = {
               id : this.props.auth.user.id,
               old_password : this.state.old_password,
               password : this.state.password,
               password2 : this.state.password2
          }
          this.props.changePassword(data);
          this.setState({
               hasChanged : true
          })
     }

     render () {
          return(
               <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal}>
                    <ModalHeader  className="modal-header">
                         Change Password
                    </ModalHeader>
     
                    <ModalBody  className="modal-body">
                         <Form className="login100-form" noValidate>
                              <Row className="form-group">
                                   <Col md={12} className="wrap-input100">
                                        <FormGroup>
                                             <Label>Old Password</Label>
                                             <Input type="password" id="old_password"
                                                  placeholder="" 
                                                  className="input100" 
                                                  onChange={this.onChange} 
                                             />
                                             <span className="focus-input100"></span>
                                        </FormGroup>
                                        <FormGroup className="mt-4">
                                             <Label>New Password</Label>
                                             <Input type="password" id="password"
                                                  placeholder="" 
                                                  className="input100" 
                                                  onChange={this.onChange} 
                                             />
                                             <span className="focus-input100"></span>
                                        </FormGroup>
                                        <FormGroup className="mt-4">
                                             <Label>Confirm New Password</Label>
                                             <Input type="password" id="password2"
                                                  placeholder="" 
                                                  className="input100" 
                                                  onChange={this.onChange} 
                                             />
                                             <span className="focus-input100"></span>
                                        </FormGroup>
                                   </Col>
                              </Row>
                         </Form>
                    </ModalBody>
                    <ModalFooter>
                         <Button color="primary" onClick={this.changePassword}>Change Password</Button>
                         <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
                    </ModalFooter>
               </Modal>
          )
     }     
}
const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors }); 

export default connect(mapStateToProps, { changePassword, cleanErrors })(withRouter(PasswordModal)); 