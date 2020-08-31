// external
import React from 'react';

//style
import './CardSelectItem.scss';

const CardSelectItem = ({ isSelected, text, imgSrc, onSelectItem }) => {
  return (
    <div 
      className={!isSelected ? 'card-select-question' : 'card-select-question selected'}
      onClick={onSelectItem}
    >
      <img src={imgSrc} className="icon-card"/>
      <div className="text-card-select-item ">{ text }</div>
    </div>
  )
}

export default CardSelectItem;