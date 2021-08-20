import { Component } from 'react'
import Configuration from '../modals/ConfigurationModalComponent';


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


class MiniatureProfileSummary extends Component {

    constructor(props){
        super(props)
        this.state = {
          isConfigurationModalOpen: false
        }
        this.toggleConfigurationtModal = this.toggleConfigurationtModal.bind(this);
    }

    toggleConfigurationtModal(){
        this.setState({
          isConfigurationModalOpen: !this.state.isConfigurationModalOpen
        });
    }
    render(){
      return (
          <div className="container">
             <Configuration isModalOpen={this.state.isConfigurationModalOpen} toggleModal={this.toggleConfigurationtModal} /> 
            <div className="row justify-content-center mt-4">
              <img src={this.props.user.image != '' ? this.props.user.image : 'images/profile_dummy.png'} className='miniature-profile-image' alt="profile img" 
                />  
            </div>                     
            <div className="row justify-content-center mt-4 nickname-title">
              {capitalizeFirstLetter(this.props.user.nickname)}    
            </div>    
            <div className="row justify-content-center">
              <span className="fa-stack fa-2x" onClick={this.toggleConfigurationtModal}>
                  <i className="fa fa-circle fa-button fa-stack-2x"></i>
                  <i className="fa fa-cogs fa-stack-1x fa-inverse"></i>
              </span>
            </div>
          </div>
      )    
    }
    
}

export default MiniatureProfileSummary;