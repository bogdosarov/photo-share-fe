import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { HomePage } from 'views/HomePage/HomePage'

import './App.module.scss'
import './css/app.general.scss'

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
    </Switch>
  </BrowserRouter>
)
