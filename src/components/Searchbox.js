import React from 'react';

const Searchbox = ({searchfield,searchange}) => {
	return (
		<div className ="pa2">
			<input 
				className = "pa3 ba b--green bg-lightest-blue tc" 
				type = "search" 
				placeholder = "Search Robots" 
				onChange = { searchange }
			/>
		</div>
	);
}
export default Searchbox;