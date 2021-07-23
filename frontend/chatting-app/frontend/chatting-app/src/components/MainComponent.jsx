import React, { Component } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
// import Footer from './FooterComponent';
import Login from './registration/LoginComponent'
import Header from './HeaderComponent'
import Register from "./registration/RegisterComponent";
import BusienessRegister from "./registration/BusienessRegisterComponent"
import ChatAppComponent from './ChatAppComponent'


function RenderMainComponent(props){

  if (!props.isLoggedIn){
    return(
      <Switch>
        <Route exact path='/'><Login login={props.login} /></Route>
        <Route path='/sign-up'><Register login={props.login} /></Route>
        <Route path='/singUpBussness'><BusienessRegister login={props.login} /></Route>
        <Redirect to='/'></Redirect>
      </Switch>
    );
  }
  else{
    return(
      <ChatAppComponent />
    );
  }
}

class Main extends Component{

  constructor(props){
    super(props)
    this.state = {
      isLoggedIn : false
    }
    this.login = this.login.bind(this);
  }

  login(){
    this.setState({
        isLoggedIn : !this.state.isLoggedIn
    })
  }

    render() {
      
      return (
        <React.Fragment>
          <Header isLoggedIn={this.state.isLoggedIn} login={this.login}/>
          <RenderMainComponent isLoggedIn={this.state.isLoggedIn} login={this.login}/>
          {/* <Footer /> */}
        </React.Fragment>
      );
    }  
  
  }
  
  export default Main;