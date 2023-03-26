import React from 'react';
import Card from './Card.js';

/* Can just use empty tags <></> instead of <div> if no styles or attributes are used */
const CardList = ({ robots }) => {
	return (
		<> 
			{
      			robots.map((user, i) => {
					return (
						<Card 
							key={robots[i].id} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
							/>
					);
				})
      		}
    	</>
	);
}

export default CardList;