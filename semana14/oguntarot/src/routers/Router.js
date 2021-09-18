import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import TarotCardPage from '../pages/TarotCardPage/TarotCardPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'


const Router = () => {
    return (
        <BrowserRouter>
        <Switch>

        <Route exact path='/'>
            <HomePage/>
        </Route>

        <Route exact path='/suacarta/:id'>
            <TarotCardPage/>
        </Route>

    <Route>

    <ErrorPage/>

    </Route>

        </Switch>
        </BrowserRouter>
    )
}

export default Router