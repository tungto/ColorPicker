import React, { Component } from 'react';


class Represent extends Component {
	setStyle() {
		return {
			color: this.props.color,
			borderColor: this.props.color,
			fontSize: this.props.size,
		};
	}
	render(){
		if(this.props.color){
			return(
				<input type="text" defaultValue="Setting Content" style={this.setStyle()}/>

			)
		}
		else return null;
			

}
}
	

Represent.propTypes = {
	// size: PropTypes.number.isRequired,
}

export default Represent;