import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import DefaultLayout from '@/layouts/DefaultLayout'
import LoginLayout from '@/layouts/LoginLayout'
// import Dashboard from '@/views/Dashboard'
// import Login from '@/views/Login'

const Loading = () => <div>Loading...</div>
/**
 * Constant Routes
 */
const constantRoutes = [
  {
    path: '/',
    layout: DefaultLayout,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard'),
      loading: Loading
    }),
    exact: true
  },
  {
    path: '/login',
    layout: LoginLayout,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "Login" */ '@/views/Login'),
      loading: Loading
    }),
    exact: true
  }
]
const dynamicRoutes = []

const Routes = () => (
  <Router>
    <Switch>
      {constantRoutes.map(
        ({ path, layout: Layout, component: Component, exact = false }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={() => (
              <Layout>
                <Component />
              </Layout>
            )}
          />
        )
      )}
    </Switch>
  </Router>
)

export default Routes
