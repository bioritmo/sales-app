// external
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// material
import RaisedButton from 'material-ui/RaisedButton';
import { AlertMsg, Loader } from '../../../ui';

// internal
import * as actions from '../../../state/main/actions';
import logo from '../../../assets/imgs/semlogo.png'
//style
import './Main.scss';

const Main = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  function startgame() {
    dispatch(actions.startGame());
  }

  return (
    <div className="start-options">
      { isLoading && ( <Loader /> )}
      { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
      <div>
        <img src={logo} />
        <div className="start-game-action">
          <RaisedButton onClick={() => startgame()}>Start</RaisedButton>
        </div>
      </div>
    </div>
  )
}

export default Main;