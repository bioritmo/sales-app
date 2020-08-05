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
      <img src={imgSrc} Style="width: 220px;
    margin-left: 6em;
    margin-top: -5em;"/>
      <div className="text-card-select-item ">{ text }</div>
    </div>
  )
}

export default CardSelectItem;