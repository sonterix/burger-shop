import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from 'components/App/AppContainer';
import Loader from 'components/Loader/Loader'

const BurgerBuilder = lazy(() => import('pages/BurgerBuilder/BurgerBuilder'))
const Checkout = lazy(() => import('pages/Checkout/Checkout'))
const Orders = lazy(() => import('pages/Orders/Orders'))

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={ <Loader /> }>
      <App>
        <Switch>
          <Route path="/" exact component={ BurgerBuilder } />
          <Route path="/checkout" component={ Checkout } />
          <Route path="/orders" component={ Orders } />
        </Switch>
      </App>
    </Suspense>
  </BrowserRouter>
)

export default Router