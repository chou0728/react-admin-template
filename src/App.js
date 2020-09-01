import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/Login'
import '@/App.less'

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/login' exact component={Login} />
    </Switch>
  </Router>
)

export default App
