import React from 'react'
import { BrowserRouter, Route, Router, Switch, History } from 'react-router-dom'
import ProfilesContainer from '../containers/ProfilesContainer'
import ShowProfileContainer from '../containers/ShowProfileContainer'
import ProfileFormContainer from '../containers/ProfileFormContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProfilesContainer} />
        <Route exact path="/profiles" component={ProfilesContainer} />
        <Route exact path="/profiles/new" component={ProfileFormContainer} />
        <Route exact path="/profiles/:id" component={ShowProfileContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
