import React from 'react';

const char = (props) => {

	const style = {
		display: 'inline-block',
		margin: '16px',
		textAlign: 'center',
		border: '1px solid black',
		padding: '16px'
	};


	return (
		<div style={style} onClick={props.clicked}>
			{props.character}
		</div>


	);
};

export default char;