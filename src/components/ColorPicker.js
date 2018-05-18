import React from 'react';
import PropTypes from 'prop-types';

const ColorPicker = (props) => {
	return(
		<div className="main col-6">
			<h1>Color Picker</h1>
			{props.colors.map((color, index) => {
				return 	<span 
							className="square" 
							style={color}
							key={index}
							onClick={ (e) => props.changeColor(color)}
							>
						</span>
			})
		}
		</div>
	)
}
ColorPicker.propTypes ={
	colors: PropTypes.array.isRequired,
	changeColor: PropTypes.func.isRequired,
}

export default ColorPicker;