import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AdministrationArea from './pages/AdministrationArea'
import SignUp from './pages/SignUp'
import TravelList from './pages/TravelList'

const Routers = () => {
    return (
        <BrowserRouter>

<Switch>
  <Route exact path={'/area-de-administracao'}>
    <AdministrationArea/>
    </Route>

    <Route exact path={'/SignUp'}>
    <SignUp/>
    </Route>


    <Route exact path={'/TravelList'}>
    <TravelList/>
    </Route>

</Switch>

</BrowserRouter> 
    )
}

export default Routers
