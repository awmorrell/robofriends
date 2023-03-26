import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='tc pa3 mb3 b--washed-blue bg-white shadow-3' 
				type='search' 
				placeholder='search robots'
				onChange={searchChange} 
			/>
		</div>
	);
}

export default SearchBox;