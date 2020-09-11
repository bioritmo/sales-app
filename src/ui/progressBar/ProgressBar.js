import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import progress_m from 'assets/imgs/corredor_m.gif';
import final_progress_m from 'assets/imgs/final_corredor_m.png';
import progress_f from 'assets/imgs/corredor_f.gif';
import final_progress_f from 'assets/imgs/final_corredor_f.png';
import { getStorageItem } from 'shared/utils';

//style
import './ProgressBar.scss';

export default function ProgressBar() {
  const progress = useSelector(state => state.main.progress || '0%');

  const [sex, setSex] = useState(getStorageItem('persona')['sex']);
  return (
    <>
      {
        sex === 'sex-m' ? (
          <img src={progress === '99%' ? final_progress_m : progress_m} style={{
            left: progress === '99%' ? '90%' : progress,
            position: 'absolute',
            bottom: 70,
            width: '2em',
            display: progress === '0%' && 'none'
          }} />
        ) : (
          <img src={progress === '99%' ? final_progress_f : progress_f} style={{
            left: progress === '99%' ? '90%' : progress,
            position: 'absolute',
            bottom: 70,
            width: '2em',
            display: progress === '0%' && 'none'
          }} />
        )
      }
      
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div style={{ 
            height: 15, 
            width: progress === '99%' ? '100%' : progress, 
            backgroundColor: 'white',
            transition: 'width .5s',
            maxWidth: '100%',
          }}></div>
        </div>
      </div>
    </>
  );
}