import React from 'react'
import { BrowserRouter, Route, Router, Switch, History } from 'react-router-dom'
import UsersContainer from '../containers/UsersContainer'
import ShowUserContainer from '../containers/ShowUserContainer'
import ChatContainer from '../containers/ChatContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/users" component={UsersContainer} />
        <Route exact path="/users/:id" component={ShowUserContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
