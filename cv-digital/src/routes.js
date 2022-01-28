import React from "react";
import "./Routes.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home_PT from "./paginas/Home/Home-PT";
import Sobre from "./paginas/Sobre/Sobre";
import Error from "./paginas/Error/Error";
import Login from "./Login";


function Routes() {
    return  (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/Home' component={Home_PT} />
        <Route path='/Sobre' component={Sobre} />
        <Route path='/sign-up' component={Login} />
        <Route component={Error} />
      </Switch>
    </Router>
    );
  }
  
  export default Routes;
  