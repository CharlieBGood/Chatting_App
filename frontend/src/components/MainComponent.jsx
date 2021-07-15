import { Component } from "react";
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './FooterComponent';
import Body from "./BodyComponent";
import Header from './HeaderComponent'
import Register from "./RegisterComponent";
import Login from "./LoginComponent"



class Main extends Component{
  
    render() {
  
      return (
        <div>
          <Header />
  
          <Switch>
            <Route exact path='/'></Route>
            <Route path='/sign-up'><Register/></Route>
            <Redirect to='/'></Redirect>
          </Switch>

          <Footer />

        </div>
      );
    }  
  
  }
  
  export default Main;