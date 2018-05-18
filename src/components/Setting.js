import React from 'react';
import PropTypes from 'prop-types';
import ColorPicker from './ColorPicker';
import SettingSize from './SettingSize';
const Setting = (props) => {
	return(
		<div className="wrapper col-12">
			<ColorPicker 
				colors={props.colors}
				changeColor={props.changeColorAt}
			/>
			<SettingSize 
				size={props.size}
				onReset={props.onResetAt}
				changeSize={props.changeSizeAt}
				/>
		</div>
		
	)
}
Setting.propTypes={
	changeSizeAt: PropTypes.func.isRequired,
	changeColorAt: PropTypes.func.isRequired,
}
export default Setting;