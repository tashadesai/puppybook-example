'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import AllPuppies from './components/AllPuppies'
import SinglePuppy from './components/SinglePuppy'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container flexbox-container">
        <div className="jumbotron">
          <Switch>
            <Route path="/:puppyId" component={SinglePuppy} />
            <Route path="/" component={AllPuppies} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
