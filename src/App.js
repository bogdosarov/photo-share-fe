import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Spinner from 'react-spinkit'

import { AUTH_EVENTS, AuthManagerInstance } from 'utils/auth/AuthManager'
import { HomePage } from 'pages/HomePage/HomePage'
import { RegisterPage } from 'pages/RegisterPage/RegisterPage'
import { LoginPage } from 'pages/LoginPage/LoginPage'
import { ResetPage } from 'pages/ResetPage/ResetPage'
import { NotFound } from 'pages/404Page/NotFound'

import './App.module.scss'
import './styles/app.general.scss'

const renderUserRoutes = () => <Route path="/" component={HomePage} exact />

const renderGuestRoutes = () => (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/register" component={RegisterPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/reset" component={ResetPage} />
    <Route path="/404" component={NotFound} />
    <Redirect from="*" to="/404" />
  </Switch>
)

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      isAuthenticated: false,
    }

    AuthManagerInstance.init()
      .catch(() => {})
      .finally(() => {
        this.setState({
          isLoading: false,
          isAuthenticated: AuthManagerInstance.authenticated,
        })
      })

    AuthManagerInstance.on(AUTH_EVENTS.LOGOUT, () => {
      this.setState({ isAuthenticated: false })
    })
  }

  render() {
    return (
      <Fragment>
        {this.state.isLoading && <Spinner name="line-scale-party" fadeIn="none" />}
        {!this.state.isLoading && (
          <BrowserRouter>
            <Switch>
              {this.state.isAuthenticated && renderUserRoutes()}
              {!this.state.isAuthenticated && renderGuestRoutes()}
            </Switch>
          </BrowserRouter>
        )}
      </Fragment>
    )
  }
}
