import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './views/Home/Home'
import About from './views/About/About'

import Header from './components/Header/Header'

import './css/app.general.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
