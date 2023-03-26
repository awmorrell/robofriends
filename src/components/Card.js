import React from 'react';
import 'tachyons';
import './Card.css';

const Card = ({ name, email, id }) => {
	return (
		<div id='cardz' className='tc dib br3 pa3 ma2 mt3 grow bw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${id}1?200x200`} /> 
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;