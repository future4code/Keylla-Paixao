import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AddReceitaPage from '../pages/AddReceitaPage/AddReceitasPage'
import CadastroPage from '../pages/CadastroPage/CadatroPage'
import DetalheReceitaPage from '../pages/DetalheReceitaPage/DetalheReceitaPage'
import ListaDeReceitasPage from '../pages/ListaDeReceitasPage/ListaDeReceitasPages'
import LoginPage from '../pages/LoginPage/LoginPages'
import ErrorPage from '../pages/ErrorPage/ErrorPage'


const Router = () => {
    return (
        <BrowserRouter>
        <Switch>

        <Route exact path='/login'>
            <LoginPage/>
        </Route>

        <Route exact path='/addreceita'>
            <AddReceitaPage/>
        </Route>

        <Route exact path='/cadastro'>
            <CadastroPage/>
        </Route>

      <Route exact path='/detalhe/:id' >
            <DetalheReceitaPage/>
      </Route>

      <Route exact path='/'>
            <ListaDeReceitasPage/>
      </Route>

<Route>
    <ErrorPage/>
    </Route>

        </Switch>
        </BrowserRouter>
    )
}

export default Router
