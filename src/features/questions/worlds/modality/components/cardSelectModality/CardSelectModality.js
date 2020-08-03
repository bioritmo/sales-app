// external
import React from 'react';

//style
import './CardSelectModality.scss';

const CardSelectModality = ({ isSelected, text, img, onSelectItem }) => {
  return (
    <div 
      className={!isSelected ? 'card-select-question-modality' : 'card-select-question-modality selected'}
      onClick={onSelectItem}
    >
      <img src={img} className="img-card" />
      <div className="text-card">{text}</div>
    </div>
  )
}

export default CardSelectModality;