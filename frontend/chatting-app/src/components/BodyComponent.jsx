import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from 'reactstrap';

import Login from "./LoginComponent";

function Body() {
  return (
    <Router>
      <Login />
    </Router>
  );
}

export default Body;