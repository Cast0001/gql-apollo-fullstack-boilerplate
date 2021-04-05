import React from 'react'
import baseLoadable from '@loadable/component'
import { Switch, Route } from 'react-router-dom'


const loadable = (func) => baseLoadable(func, { fallback: <div /> })

const MainPage = loadable(() => import('pages/MainPage/MainPage'))
const RootPage = loadable(() => import('pages/RootPage/RootPage'))

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <RootPage />
    </Route>
    <Route path="/main">
      <MainPage />
    </Route>
  </Switch>
)


export default Routes
