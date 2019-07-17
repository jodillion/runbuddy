import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import ProfilesContainer from '../containers/ProfilesContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <Route exact path="/profiles" component={ProfilesContainer} />
    </BrowserRouter>
  )
}

export default App
