import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { HomePage } from 'pages/HomePage/HomePage'
import { RegisterPage } from 'pages/RegisterPage/RegisterPage'
import { LoginPage } from 'pages/LoginPage/LoginPage'

import './App.module.scss'
import './styles/app.general.scss'

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </BrowserRouter>
)
