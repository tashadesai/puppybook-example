'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppies from './components/AllPuppies';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store} >
    <div className="container flexbox-container">
      <div className="jumbotron">
        <AllPuppies />
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);
