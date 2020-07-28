// external
import React from 'react';

//style
import './CardSelectItem.scss';

const CardSelectItem = ({ isSelected, text, icon, onSelectItem }) => {
  return (
    <div 
      className={!isSelected ? 'card-select-question' : 'card-select-question selected'}
      onClick={onSelectItem}
    >
      <div>{ icon }</div>
      <div className="text-card-select-item ">{ text }</div>
    </div>
  )
}

export default CardSelectItem;