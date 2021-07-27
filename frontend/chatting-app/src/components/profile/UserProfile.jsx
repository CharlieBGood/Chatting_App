import React, { Component } from 'react'
import './UserProfile.css'

class UserProfile extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <React.Fragment>
          <div className="row">
            <div className="col img-title"> 
                <img src={this.props.user.imagen} alt="user" className="img-fluid mt-5"/>
                <hr /> 
            </div>
        </div>
        <div className= "row">
        <div class="col">
              <div class="info">
                  <div className="card-body">
                    <div class="info_data row">
                        <div className="data col-md-3">
                            <h6>Full Name</h6>
                        </div>
                        <div className="data col-md-9 text-seconday">
                          <p>{this.props.user.nombre}</p>
                        </div>
                    </div>
                  </div>
    
                  <hr></hr>
    
                  <div className="card-body">
                    <div class="info_data row">
                        <div className="data col-md-3">
                            <h6>Nickname</h6>
                        </div>
                        <div className="data col-md-9 text-seconday">
                          <p>{this.props.user.nickname}</p>
                        </div>
                    </div>
                  </div>
    
                  <hr />
    
                  <div className="card-body">
                    <div class="info_data row">
                        <div className="data col-md-3">
                            <h6>Phone</h6>
                        </div>
                        <div className="data col-md-9 text-seconday">
                          <p>{this.props.user.telefono}</p>
                        </div>
                    </div>
                  </div>
    
                  <hr />
    
                  <div className="card-body">
                    <div class="info_data row">
                        <div className="data col-md-3">
                            <h6>Email</h6>
                        </div>
                        <div className="data col-md-9 text-seconday">
                          <p>{this.props.user.email}</p>
                        </div>
                    </div>
                  </div>
                  <hr />  
                  </div>
              </div>
              <div class="social_media">
                <a href="#" target="_blank" rel="noreferrer"
                  class="ml-2">
                  <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-button fa-stack-2x"></i>
                      <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                <a href="#" target="_blank" rel="noreferrer"
                  class="ml-1 ">
                  <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-button fa-stack-2x"></i>
                      <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                <a href="#" target="_blank" rel="noreferrer"
                    class="ml-1">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-button fa-stack-2x"></i>
                        <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="#" target="_blank" rel="noreferrer"
                    class="ml-1">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-button fa-stack-2x"></i>
                        <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
              </div>
              <div className="button-new-chat" id="newChat">
                  <button>
                    New chat
                  </button>
              </div>
            
            
        </div>
      </React.Fragment>
    );
   
    
  }
}

export default UserProfile;