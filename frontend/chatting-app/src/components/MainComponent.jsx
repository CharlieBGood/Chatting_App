import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
// import Footer from './FooterComponent';
import Login from './registration/LoginComponent';
import Header from './HeaderComponent';
import Register from "./registration/RegisterComponent";
import BusienessRegister from "./registration/BusienessRegisterComponent";
import ChatApp from './ChatAppComponent';
import { connect } from 'react-redux';
import { fetchUsers, createUser } from '../redux/ActionCreators'
 

const mapStateToProps = state => {
  return {
    users : state.users,
    chats_list : state.chats_list,
    errors : []
  }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUsers : () => dispatch(fetchUsers()),
    createUser : (user) => dispatch(createUser(user))
})

function RenderMainComponent(props){
  console.log(props)

  if (!props.isLoggedIn){
    return(
      <Switch>
        <Route exact path='/'><Login login={props.login} users={props.users}/></Route>
        <Route path='/sign-up'><Register login={props.login} createUser={props.createUser} /></Route>
        <Route path='/singUpBussness'><BusienessRegister login={props.login} /></Route>
        <Redirect to='/'></Redirect>
      </Switch>
    );
  }
  else{
    return(
      <ChatApp user={props.user} users={props.users} chats_list={props.chats_list}/>
    );
  }
}

class Main extends Component{

  constructor(props){
    super(props)
    this.state = {
      isLoggedIn : false,
      user: null
    }
    this.login = this.login.bind(this);
  }

  login(currentUser){
    this.setState({
        isLoggedIn : !this.state.isLoggedIn,
        user: currentUser
    })
  }
  
    componentDidMount() {
      // Uso tipico (no olvides de comparar las props):
        this.props.fetchUsers();
    }

    render() {
      
      return (
        <React.Fragment>
          <Header isLoggedIn={this.state.isLoggedIn} login={this.login}/>
          <RenderMainComponent isLoggedIn={this.state.isLoggedIn} login={this.login} 
          user={this.state.user} users={this.props.users} chats_list={this.props.chats_list}
          createUser={this.props.createUser} />
          {/* <Footer /> */}
        </React.Fragment>
      );
    }  
  
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));