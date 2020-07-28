import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//style
import './ProgressBar.scss';

export default function ProgressBar() {
  const progress = useSelector(state => state.main.progress || '0%');

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div style={{ 
          height: 15, 
          width: progress, 
          backgroundColor: 'white',
          transition: 'width .5s',
          maxWidth: '100%',
        }}></div>
      </div>
    </div>
  );
}