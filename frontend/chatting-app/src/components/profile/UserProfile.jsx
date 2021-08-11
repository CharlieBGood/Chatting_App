import React, { Component } from 'react'
import './UserProfile.css'

function RenderNewChatButton(props){
  if (props.renderNewChatButton){
    return(
      <div className="button-new-chat" id="newChat">
          <button>
            New chat
          </button>
      </div>   
    )
  }
  else{
    return("")
  }
}


class UserProfile extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <React.Fragment>
          <div className="row">
            <div className="col img-title"> 
                <img src="images/woman.png" alt="user" className="img-fluid mt-5"/>
                <hr /> 
            </div>
          </div>
          <div className= "row">
          <div className="col">
                <div className="info">
                    <div className="card-body">
                      <div className="info_data row">
                          <div className="data col-md-3">
                              <h6>Full Name</h6>
                          </div>
                          <div className="data col-md-9 text-seconday">
                            <p>{this.props.user.name}</p>
                          </div>
                      </div>
                    </div>
      
                    <hr></hr>
      
                    <div className="card-body">
                      <div className="info_data row">
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
                      <div className="info_data row">
                          <div className="data col-md-3">
                              <h6>Phone</h6>
                          </div>
                          <div className="data col-md-9 text-seconday">
                            <p>{this.props.user.phone}</p>
                          </div>
                      </div>
                    </div>
      
                    <hr />
      
                    <div className="card-body">
                      <div className="info_data row">
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
                <div className="social_media">
                  <a href="#" target="_blank" rel="noreferrer"
                    className="ml-2">
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-button fa-stack-2x"></i>
                        <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer"
                    className="ml-1 ">
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-button fa-stack-2x"></i>
                        <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer"
                      className="ml-1">
                      <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-button fa-stack-2x"></i>
                          <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                      </span>
                  </a>
                  <a href="#" target="_blank" rel="noreferrer"
                      className="ml-1">
                      <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-button fa-stack-2x"></i>
                          <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                      </span>
                  </a>
                </div>
                <RenderNewChatButton renderNewChatButton={this.props.renderNewChatButton} />
          </div>
      </React.Fragment>
    );
   
    
  }
}

export default UserProfile;