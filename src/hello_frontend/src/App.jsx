import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import ANewPageWhichHaveALotOfCardShowingImagesAndDestinationForEachPartyEvent from './views/a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Home />
    // <Router>
    //   <Routes>
    //     <Route component={Home} exact path="/" />
    //     <Route
    //       component={
    //         ANewPageWhichHaveALotOfCardShowingImagesAndDestinationForEachPartyEvent
    //       }
    //       exact
    //       path="/a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event"
    //     />
    //     <Route component={NotFound} path="**" />
    //     <Navigate to="**" />
    //   </Routes>
    // </Router>
  )
}

export default App