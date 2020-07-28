// external
import React from 'react';

//internal
import './WorldName.scss';

const WorldName = ({ name }) => {
  return (
    <div className="world-name">
      <p>{name}</p>
    </div>
  )
}

export default WorldName;