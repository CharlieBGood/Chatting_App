import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import NewContact from "./components/modals/NewContact/NewContactComponent";
import Configuration from "./components/Configuration"
import ChatsGrid from './components/chat/ChatsGrid'
import './App.css';
import './Utils.css'


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
