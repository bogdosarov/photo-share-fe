import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Spinner from 'react-spinkit'

import { AuthManagerInstance } from 'utils/auth/AuthManager'
import { HomePage } from 'pages/HomePage/HomePage'
import { RegisterPage } from 'pages/RegisterPage/RegisterPage'
import { LoginPage } from 'pages/LoginPage/LoginPage'

import './App.module.scss'
import './styles/app.general.scss'

const renderUserRoutes = () => <Route path="/" component={HomePage} exact />

const renderGuestRoutes = () => (
  <Fragment>
    <Route path="/" component={HomePage} exact />
    <Route path="/register" component={RegisterPage} />
    <Route path="/login" component={LoginPage} />
  </Fragment>
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
