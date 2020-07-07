// External dependencies
import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Main from '../features/main/containers/Main';

const Root = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </HashRouter>
);

export default Root;
