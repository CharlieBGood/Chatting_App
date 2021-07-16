import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Chatting App</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/sign-in">Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sign-up">Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;