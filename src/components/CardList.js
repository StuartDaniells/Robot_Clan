import React from 'react';
import Cards from './Cards';
/* (import {robos} from './robos') we don't need to pass this import since in 
   the App.js we pass robos as state and its then passed down as props, so 
   CardList passes robos as props */

const CardLists = ({ robos }) => {
	const cardArray = robos.map((user,i) => {
		return (
				<Cards key={i} id = {robos[i].id} name = {robos[i].name} 
				email = {robos[i].email} />
			);
	});
	return(
		 <div>
			{cardArray}
		</div> 
	);
}
export default CardLists;