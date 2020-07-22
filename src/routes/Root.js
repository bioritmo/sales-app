// External dependencies
import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Main from '../features/main/containers/Main';
import Persona from '../features/questions/containers/profile/persona/containers/Persona';

const Root = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/dados-iniciais" component={Persona} />
    </Switch>
  </HashRouter>
);

export default Root;
