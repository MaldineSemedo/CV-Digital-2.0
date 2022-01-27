import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home_PT from "./paginas/Home/Home-PT";
import Sobre from "./paginas/Sobre/Sobre";
import Login from "./Login";


function Routes() {
    return  (
  
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/Home" exact component={Home_PT}/>
                <Route path="/Sobre" exact component={Sobre}/>
            </Switch>
        </BrowserRouter>

    );
  }
  
  export default Routes;
  