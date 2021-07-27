import React from 'react';
import { Link } from 'react-router-dom';

function ReturnNavElements(props){
  if (!props.isLoggedIn){
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
      <li className="nav-item" onClick={props.login}>
        <Link className="nav-link" to="/sign-in">Sign Out</Link>
      </li>
    );
  }
}


const Header = (props) => {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Chatting App</Link>
            <ul className="navbar-nav">
              <ReturnNavElements isLoggedIn={props.isLoggedIn} login={props.login}/>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;