import React from 'react';

// the props are the values or data trickled down from the parent App

const scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', height: '700px', border: '2px solid'}}>
			{props.children}
		</div>
	);
}

export default scroll;

// {{}} - allows us to use css in JSX
// using css in JSX use camel case like overflowY instead of overflow-y