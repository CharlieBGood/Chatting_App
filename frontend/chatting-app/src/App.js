import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import UserProfile from "./components/profile/UserProfile";
import './App.css';
import './Utils.css'

class App extends Component{

  render() {
    return (
      <BrowserRouter>
          <UserProfile />
      </BrowserRouter>  
    );
  }  

}

export default App;
