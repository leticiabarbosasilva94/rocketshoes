import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Main from './pages/Main';
// import Test from './pages/Test';
import Page404 from './pages/404';
import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
