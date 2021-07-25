import { Component } from 'react'
import Configuration from './modals/ConfigurationModalComponent';


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
            <Configuration isModalOpen={this.state.isConfigurationModalOpen} toggleModal={this.toggleConfigurationtModal} 
              user={this.props.user}/>
            <div className="row justify-content-center mt-4">
              <img src={this.props.user.imagen} className='miniature-profile-image' alt="profile img" />  
            </div>                     
            <div class="row justify-content-center">
              {this.props.user.nickname}    
            </div>    
            <div class="row justify-content-center">
              <span class="fa-stack fa-2x" onClick={this.toggleConfigurationtModal}>
                  <i class="fa fa-circle fa-button fa-stack-2x"></i>
                  <i class="fa fa-cogs fa-stack-1x fa-inverse"></i>
              </span>
            </div>
          </div>
      )    
    }
    
}

export default MiniatureProfileSummary;