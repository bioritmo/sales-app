// external
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";
// material
import RaisedButton from 'material-ui/RaisedButton';
import { AlertMsg, Loader } from '../../../ui';

// internal
import * as actions from '../../../state/main/actions';
import logo from '../../../assets/imgs/semlogo.png'
//style
import './Main.scss';
import { Link } from 'react-router-dom';

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
        <Animated animationInDuration="1500" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <img src={logo} />
        </Animated>
        <Animated animationInDelay="1500" animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
          <div className="start-game-action">
            <Link to="/dados-iniciais" Style="text-decoration: none">
              <div className="btn-start">
                <p className="btn-start-text">INICIAR GAME</p>
              </div>
            </Link>
          </div>
        </Animated>
      </div>
    </div>
  )
}

export default Main;