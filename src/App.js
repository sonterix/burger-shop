import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from 'components/Layout/Layout'
import Loader from 'components/UI/Loader/Loader'

const App = () => {
  const BurgerBuilder = lazy(() => import('containers/BurgerBuilder/BurgerBuilder'))
  const Checkout = lazy(() => import('containers/Checkout/Checkout'))

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={ <Loader dark={ true } /> }>
          <Switch>
            <Route path="/" exact component={ BurgerBuilder } />
            <Route path="/checkout" component={ Checkout } />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
