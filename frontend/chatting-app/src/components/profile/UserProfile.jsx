import React, { Component } from 'react'
import './UserProfile.css'

class UserProfile extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <React.Fragment>
          <div class="row">
            <div class="col-5 mt-5">
              <img src={this.props.user.imagen} alt="user" className="img-fluid mt-5"/>
              <div class="social_media">
                <a href="#" target="_blank" rel="noreferrer"
                  class="ml-2">
                  <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                <a href="#" target="_blank" rel="noreferrer"
                  class="ml-1 ">
                  <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                <a href="#" target="_blank" rel="noreferrer"
                    class="ml-1">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="#" target="_blank" rel="noreferrer"
                    class="ml-1">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
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
            <div class="col-7 mt-5">
              <div class="info">
                  <h3 className="title">Profile</h3>
                  <hr />
                  <div className="card-body">
                    <div class="info_data row">
                        <div className="data col-md-3">
                            <h5>Full Name</h5>
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
                            <h5>Nickname</h5>
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
                            <h5>Phone</h5>
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
                            <h5>Email</h5>
                        </div>
                        <div className="data col-md-9 text-seconday">
                          <p>{this.props.user.email}</p>
                        </div>
                    </div>
                  </div>
                  </div>
              </div>
        </div>
      </React.Fragment>
    );
   
    
  }
}

export default UserProfile;