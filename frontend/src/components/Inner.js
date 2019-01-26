import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Index from '../pages/index'

const Inner = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
  </BrowserRouter>
)

export default Inner
