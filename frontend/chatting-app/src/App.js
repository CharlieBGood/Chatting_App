import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode"; 
import setAuthToken from "./redux/utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/actionAuth";
import Register from './components/auth/RegisterComponent'
import Login from './components/auth/LoginComponent'
import ChatApp from './components/ChatAppComponent'
import PrivateRoute from './components/private-route/PrivateRouteComponent'; 
import Header from './components/HeaderComponent';
import './App.css';
import './Utils.css'
import { Provider } from 'react-redux';
import store from './redux/store'


// Check for token to keep user logged in 
if (localStorage.jwtToken) { 
    // Set auth token header auth 
    const token = localStorage.jwtToken; 
    setAuthToken(token); 
    // Decode token and get user info and exp 
    const decoded = jwt_decode(token); 
    // Set user and isAuthenticated 
    store.dispatch(setCurrentUser(decoded)); 
    // Check for expired token 
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) { 
        // Logout user 
        store.dispatch(logoutUser()); 
        // Redirect to login 
        window.location.href = "./sign-in"; 
    } 
} 

class App extends Component { 
    render() { 
        return ( 
            <Provider store={store}> 
                <Router> 
                <div className="App"> 
                    <Header /> 
                    <Route exact path="/" component={Login} /> 
                    <Route exact path="/sign-up" component={Register} /> 
                    <Route path="/sign-in" component={Login} /> 
                    <Switch> 
                        <PrivateRoute exact path="/temp" component={ChatApp} /> 
                    </Switch> 
                </div> 
                </Router> 
            </Provider> 
        ); 
    } 
} 
export default App;
