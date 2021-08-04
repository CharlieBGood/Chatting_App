import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { logoutUser } from "../redux/actions/actionAuth";
import { connect } from "react-redux"; 
import { withRouter } from 'react-router-dom';


function ReturnNavElements(props){
  if (!props.isAuthenticated){
    return(
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link" to="/sign-in">Sign in</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sign-up">Sign up</Link>
        </li>
      </React.Fragment>
    );
  }
  else{
    return(
      <li className="nav-item">
        <Link className="nav-link" to="/sign-in" onClick={props.logOut}>Sign Out</Link>
      </li>
    );
  }
}


class Header extends Component{

  constructor(){
    super();
    this.state = {
      isAuthenticated : false
    }
  }

  componentWillReceiveProps(nextProps) { 
		this.setState({
      isAuthenticated : nextProps.auth.isAuthenticated
    })
	}

  onLogoutClick = (e) => { 
    e.preventDefault(); 
    this.props.logoutUser(); 
  };

  render(){
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>Chatting App</Link>
              <ul className="navbar-nav">
                <ReturnNavElements isAuthenticated={this.state.isAuthenticated} logOut={this.props.logoutUser}/>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = { 
	logoutUser: PropTypes.func.isRequired, 
	auth: PropTypes.object.isRequired, 
	errors: PropTypes.object.isRequired, 
};

const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors }); 

export default connect(mapStateToProps, { logoutUser })(withRouter(Header)); 