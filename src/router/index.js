import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'
const login = asyncComponent(() => import("../pages/login/App"))
const homePage = asyncComponent(() => import("../pages/homePage/homePage"))


export default class RouteConfig extends Component {
  render() {
    console.log(33223);
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" exact component={login} />
          <Route path="/homePage" component={homePage} />




          // <Redirect exact from='/' to='/login' />
          // <Route component={login} />
        </Switch>
      </HashRouter>
    )
  }
}