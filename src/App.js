import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.module.scss'
import './styles/app.general.scss'

import { HomePage } from 'views/HomePage/HomePage'

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
    </Switch>
  </BrowserRouter>
)
