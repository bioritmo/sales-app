import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import * as actions from 'state/main/actions';
// Style
import './HomeButton.scss';

const HomeButton = () => {
  const dispatch = useDispatch();

  return (
    <div className="btn-home">
      <IconButton onClick={() => dispatch(actions.nextQuestion("/"))}>
        <ActionHome color="white"/>
      </IconButton>
    </div>
  )
}

export default HomeButton;