'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AllPuppies from './components/AllPuppies'
import SinglePuppy from './components/SinglePuppy'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/allPuppies/:puppyId" component={SinglePuppy} />
        <Route path="/allPuppies" component={AllPuppies} />
      </Switch>
    </BrowserRouter>
  </Provider >,
  document.getElementById('app')
)
