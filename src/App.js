import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'


import Navbar from './components/Navbar'
import Home from './components/Home'
import BeerIndex from './components/BeerIndex'
import ShowBeer from './components/ShowBeer'

function App() {

  return (  
    <BrowserRouter> 
      <Navbar /> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers/:beerId" component={ShowBeer} />
        <Route path="/BeerIndex" component={BeerIndex} /> 
      </Switch>
    </BrowserRouter>
  
  )
}

export default App
