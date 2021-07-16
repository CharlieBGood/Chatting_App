import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import NewContact from "./components/modals/NewContact/NewContactComponent";
import './App.css';
import './Utils.css'
import ChatsGrid from './components/chat/ChatsGrid'
import UserProfile from "./components/profile/UserProfile";
import Grid from '@material-ui/core/grid'


class App extends Component{

  render() {
    return (
      <BrowserRouter>
          <NewContact />
      </BrowserRouter>  
    );
  }  

}

export default App;
