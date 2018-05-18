import React from 'react';
import PropTypes from 'prop-types';
import Represent from './Represent';

const ShowInfo = (props) => {
	
	return(
		<div className="show col-12">
			<div className="info">
				<span>Color: </span>
				<span>{props.style}</span>
				<span> - </span>
				<span>FontSize: </span>
				<span>{props.size}</span>
			</div>
			<br />
			<Represent 
				color={props.style}
				size={props.size}
				/>
		</div>
	)
}

ShowInfo.propTypes = {
	size: PropTypes.number.isRequired,
}

export default ShowInfo;