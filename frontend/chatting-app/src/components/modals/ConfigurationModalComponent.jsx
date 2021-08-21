import React, { Component } from 'react'
import UserRobot from '../comp_config/UserRobot'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
     Col, Row, Form, Input  } from 'reactstrap';
import { } from 'reactstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux"; 
import { withRouter } from 'react-router-dom';
import { Uploader } from '../Uploader/Uploader';
import { updateUser, changeImage } from '../../redux/actions/actionAuth';


function DisplayUserImage(props){
     console.log('in')
     return(
          <img src={props.image !== '' ? props.image : 'images/profile_dummy.png'} className='miniature-profile-image' alt="profile img" 
                /> 
     )
}

class Configuration extends Component {

     constructor(){
          super();
          this.state = {
               name : "",
               lastname : "",
               nickname: "", 
               phone: "", 
               github : "",
               instagram : "",
               twitter: "",
               linkedin: "",
               url: "",
               errors: {},
               isChangingImage : false
          }
          this.updateUser = this.updateUser.bind(this)
          this.setUrl = this.setUrl.bind(this)
          this.changeProfileImage = this.changeProfileImage.bind(this)
     }

     setUrl=(valueUrl)=>{
         this.setState({url:valueUrl})
	};

     handleName=(e)=>{
          this.setState({name: e.target.value})
     };
     handleLastName=(e)=>{
          this.setState({lastname: e.target.value})
     };
     handleNickName=(e)=>{
          this.setState({nickname: e.target.value})
     };
     handlePhone=(e)=>{
          this.setState({phone: e.target.value})
     };
     handleGithub=(e)=>{
          this.setState({github: e.target.value})
     };
     handleInstagram=(e)=>{
          this.setState({instagram: e.target.value})
     };
     handleTwitter=(e)=>{
          this.setState({twitter: e.target.value})
     };
     handleLinkeding=(e)=>{
          this.setState({linkedin: e.target.value})
     }

     updateUser() {

		const userData = {
               id_user : this.props.auth.user.id,
			name: this.state.name, 
			lastname: this.state.lastname, 
               nickname: this.state.nickname,
               phone: this.state.phone,
               image: this.state.url,
               github: this.state.github,
               instagram: this.state.instagram,
               twitter: this.state.twitter,
               linkedin: this.state.linkedin,
               
		};

          const claves = Object.keys(userData);
    
           for(let i = 0; i < claves.length ; i++){
                if (userData[claves[i]] === ""){
                     userData[claves[i]]=this.props.auth.user[claves[i]]
                }
           }

		this.props.updateUser(userData); 
          this.props.toggleModal();
	}

     changeProfileImage(){
          this.setState({
               isChangingImage : !this.state.isChangingImage
          })
     }

     componentDidUpdate(){
          if (this.state.url !== ''){
               this.props.changeImage({
                    url : this.state.url,
                    user_id : this.props.auth.user.id
               });
               this.setState({
                    url : ''
               })
          } 
     }

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
                                   <div className="col-md-7 col-12 mt-1 mr-4">
                                        <div className="row justify-content-center">
                                             {this.state.isChangingImage === true ? <Uploader setUrl={this.setUrl} />
                                             : <DisplayUserImage image={this.props.auth.user.image} />}
                                             <hr />
                                             <span className="fa-stack fa-2x mb-4" onClick={this.changeProfileImage}>
                                                  <i className="fa fa-circle fa-button fa-stack-2x"></i>
                                                  <i className="fa fa-id-badge fa-stack-1x fa-inverse"></i>
                                             </span>
                                        </div>
                                        <div className="row scroll-update-profile-modal justify-content-center">
                                             <Form className="login100-form" noValidate onSubmit={this.onSubmit}>
                                                  <Row className="form-group text-center">
                                                       <Col md={12} className="wrap-input100">
                                                            <Input id="name"
                                                                 type="text"
                                                                 name="name"
                                                                 placeholder={this.props.auth.user.name}
                                                                 className="input100" 
                                                                 value={this.state.name} 
                                                                 onChange={this.handleName} 
                                                            />
                                                            <span className="focus-input100"></span>
                                                            <span className="symbol-input100">
                                                                 <i className="fa fa-user"></i>
                                                            </span>
                                                       </Col>
                                                       <Col md={12} className="wrap-input100">
                                                            <Input id="lastname" 
                                                                 placeholder={this.props.auth.user.lastname} 
                                                                 className="input100" 
                                                                 onChange={this.handleLastName} 
                                                                 value={this.state.lastname} 
                                                            />
                                                            <span className="focus-input100"></span>
                                                            <span className="symbol-input100">
                                                                 <i className="fa fa-user"></i>
                                                            </span>
                                                       </Col>
                                                       <Col md={12} className="wrap-input100">
                                                            <Input id="nickname" 
                                                                 type="text"
                                                                 placeholder={this.props.auth.user.nickname} 
                                                                 className="input100" 
                                                                 
                                                                 value={this.state.nickname} 
                                                                 onChange={this.handleNickName} 
                                                            />
                                                            <span className="focus-input100"></span>
                                                            <span className="symbol-input100">
                                                                 <i className="fa fa-user"></i>
                                                            </span>
                                                       </Col>
                                                       <Col md={12} className="wrap-input100">
                                                            <Input id="phone" 
                                                                 placeholder={this.props.auth.user.phone} 
                                                                 className="input100" 
                                                                 onChange={this.handlePhone} 
                                                                 value={this.state.phone} 
                                                            />
                                                            <span className="focus-input100"></span>
                                                            <span className="symbol-input100">
                                                                 <i className="fa fa-phone"></i>
                                                            </span>
                                                       </Col>
                                                       <Col md={12} className="wrap-input100">
                                                            <Input id="github" 
                                                                 placeholder={this.props.auth.user.github} 
                                                                 className="input100" 
                                                                 onChange={this.handleGithub} 
                                                                 value={this.state.github} 
                                                            />
                                                            <span className="focus-input100"></span>
                                                            <span className="symbol-input100">
                                                                 <i className="fa fa-github"></i>
                                                            </span>
                                                       </Col>
                                                       <Col md={12} className="wrap-input100">
                                                            <Input id="instagram" 
                                                                 placeholder={this.props.auth.user.instagram} 
                                                                 className="input100" 
                                                                 onChange={this.handleInstagram} 
                                                                 value={this.state.instagram} 
                                                            />
                                                            <span className="focus-input100"></span>
                                                            <span className="symbol-input100">
                                                                 <i className="fa fa-instagram"></i>
                                                            </span>
                                                       </Col>
                                                       <Col md={12} className="wrap-input100">
                                                            <Input id="twitter" 
                                                                 placeholder={this.props.auth.user.twitter} 
                                                                 className="input100" 
                                                                 onChange={this.handleTwitter} 
                                                                 value={this.state.twitter} 
                                                            />
                                                            <span className="focus-input100"></span>
                                                            <span className="symbol-input100">
                                                                 <i className="fa fa-twitter"></i>
                                                            </span>
                                                       </Col>
                                                       <Col md={12} className="wrap-input100">
                                                            <Input id="linkedin" 
                                                                 placeholder={this.props.auth.user.linkedin} 
                                                                 className="input100" 
                                                                 onChange={this.handleLinkeding} 
                                                                 value={this.state.linkedin} 
                                                            />
                                                            <span className="focus-input100"></span>
                                                            <span className="symbol-input100">
                                                                 <i className="fa fa-linkedin"></i>
                                                            </span>
                                                       </Col>
                                                  </Row>
                                             </Form>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </ModalBody>
                    <ModalFooter>
                         <Button color="primary" onClick={this.updateUser}>Update</Button>{' '}
                         <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
                    </ModalFooter>
               </Modal>
          )
     }
}

Configuration.propTypes = { 
	auth: PropTypes.object.isRequired, 
	errors: PropTypes.object.isRequired, 
};

const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors }); 

export default connect(mapStateToProps, { updateUser, changeImage })(withRouter(Configuration)); 
