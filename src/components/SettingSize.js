import React from 'react';
import PropTypes from 'prop-types';

const SettingSize = (props) => {
	return(
		<div className="setting-size col-6">
			<div className="input-box">
				<h1 className="current-size">Size: <span>{props.size}</span></h1>
				<div className="setting-btn">
					<input type="submit" value="Increase" className="btn" onClick={() => props.changeSize(2)} />
					<input type="submit" value="Decrease" className="btn"  onClick={() => props.changeSize(-2)} />
				</div>
			</div>
			<div className="out-box">
				<input type="submit" value="Reset" className="btn" onClick={props.onReset}/>
			</div>
		</div>
		
	)
}
SettingSize.propTypes={
	changeSize: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
	size: PropTypes.number.isRequired,
}
export default SettingSize;