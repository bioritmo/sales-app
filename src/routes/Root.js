// External dependencies
import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Main from '../features/main/containers/Main';
import Persona from '../features/profile/persona/containers/Persona';
import SelectAvatar from '../features/profile/avatar/containers/SelectAvatar';

const Root = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/dados-iniciais" component={Persona} />
      <Route exact path="/seleciona-avatar" component={SelectAvatar} />
    </Switch>
  </HashRouter>
);

export default Root;
