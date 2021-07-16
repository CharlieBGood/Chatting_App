import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import ChatsGrid from './components/chat/ChatsGrid'
import './App.css';
import './Utils.css'


class App extends Component{

  render() {
    return (
      <BrowserRouter>
          <Main />
      </BrowserRouter>  
    );
  }  

}

export default App;
