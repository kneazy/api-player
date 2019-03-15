
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import App from './components/App';
import GetCategories from './components/GetCategories';
import GetStations from './components/GetStations';

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Route path='/' component={App}/>
      <Switch>
        <Route path='/categories' component={GetCategories}/>
        <Route path='/stations/:id' component={GetStations}/>
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;