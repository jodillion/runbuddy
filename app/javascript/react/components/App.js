import React from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import ProfilesContainer from '../containers/ProfilesContainer'
import ShowProfileContainer from '../containers/ShowProfileContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProfilesContainer} />
        <Route exact path="/profiles" component={ProfilesContainer} />
        <Route exact path="" component={ShowProfileContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
