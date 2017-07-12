'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AllPuppies from './components/AllPuppies'
import SinglePuppy from './components/SinglePuppy'

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div className="container flexbox-container">
        <div className="jumbotron">
          <Switch>
            <Route exact path="/" component={AllPuppies} />
            <Route path="/puppies/:puppyId" component={SinglePuppy} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider >),
  document.getElementById('app')
)
