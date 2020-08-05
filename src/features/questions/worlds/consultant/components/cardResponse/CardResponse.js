// external
import React from 'react';
//style
import './CardResponse.scss';

const CardResponse = ({ text, onClick }) => {
  return (
		<p className={"text-card-consultant"} onClick={onClick}>
			{text}
		</p>
  )
}

export default CardResponse;