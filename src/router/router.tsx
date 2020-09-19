import React, { Component, Fragment }  from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";

class Router extends Component {
    render () {
        return (
            <HashRouter>
                <Fragment>
                    <Switch>
                        <Route  path="/login" component={ Login }></Route>
                        <Route path="/home" component={ Home }></Route>
                        <Redirect to= {"/login"}></Redirect>
                    </Switch>
                </Fragment>
            </HashRouter>
        )
    }
}

export default Router