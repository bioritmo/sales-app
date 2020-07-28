// External dependencies
import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Main from '../features/main/containers/Main';
import Persona from '../features/questions/profile/containers/Persona';
import Avatar from '../features/questions/profile/containers/Avatar'
import HealthPhysical from '../features/questions/worlds/health/containers/Physical';
import HealthEnergy from '../features/questions/worlds/health/containers/Energy';
import HealthImc from '../features/questions/worlds/health/containers/Imc';
import Modality from '../features/questions/worlds/modality/containers/Modality';
import Challenge from '../features/questions/worlds/challenge/containers/Challenge';
import Muscle from '../features/questions/worlds/muscle/containers/Muscle';
import Finish from '../features/finish/containers/Finish';
import FinishRegister from '../features/finish/containers/FinishRegister';

const Root = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/dados-iniciais" component={Persona} />
      <Route exact path="/selecione-avatar" component={Avatar} />
      <Route exact path="/saude-fisico" component={HealthPhysical} />
      <Route exact path="/saude-nivel-de-energia" component={HealthEnergy} />
      <Route exact path="/saude-imc" component={HealthImc} />
      <Route exact path="/modalidades" component={Modality} />
      <Route exact path="/desafios" component={Challenge} />
      <Route exact path="/grupos-musculares" component={Muscle} />
      <Route exact path="/finaliza-cadastro" component={FinishRegister} />
      <Route exact path="/fim-de-jogo" component={Finish} />
    </Switch>
  </HashRouter>
);

export default Root;
