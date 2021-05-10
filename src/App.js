import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'


import Navbar from './components/Navbar'
import Home from './components/Home'
import BeerIndex from './components/BeerIndex'
import BeerCard from './components/BeerCard'

function App() {
  return (

    
  
  
    <BrowserRouter> 
      <Navbar /> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/BeerIndex" component={BeerIndex} /> 
        <Route path="/beers/:Id" component={BeerCard} />
       
      </Switch>
    </BrowserRouter>
    
    
  
  )
}

export default App
