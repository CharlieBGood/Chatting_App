import React, { Component } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
// import Footer from './FooterComponent';
import Login from './auth/LoginComponent';
import Header from './HeaderComponent';
import Register from "./auth/RegisterComponent";
// import BusienessRegister from "./auth/BusienessRegisterComponent";
import ChatApp from './ChatAppComponent';

class Main extends Component{

    render() {
      
      return (
        <React.Fragment>
          <h1>Is logged in</h1>
        </React.Fragment>
      );
    }  
  
}
  
export default Main;