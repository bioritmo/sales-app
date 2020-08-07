// external
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from "react-animated-css";

// internal
import * as actions from 'state/main/actions';
import { Link } from 'react-router-dom';
import { AlertMsg, Loader, Logo } from 'ui';
import { updateStorage, setDefaultStorage } from 'shared/utils';
//style
import './Main.scss';

const Main = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading || false);
  const message = useSelector(state => state.main.message);

  useEffect(() => {
    dispatch(actions.updateProgress('0%'));
    setDefaultStorage();
  }, [])

  return (
    <div className="container-main">
      <div className="start-options">
        <Logo />
        { isLoading && ( <Loader /> )}
        { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )}
        <div className="bg-start">
          <Animated animationInDelay={1500} animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
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
    </div>
  )
}

export default Main;