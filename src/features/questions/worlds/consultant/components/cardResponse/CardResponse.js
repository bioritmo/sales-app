// external
import React from 'react';
//style
import './CardResponse.scss';

const CardResponse = ({ text, onClick, selected }) => {
  return (
		<p className={`text-card-consultant ${selected && 'selected'}`} onClick={onClick}>
			{text}
		</p>
  )
}

export default CardResponse;