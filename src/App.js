import React, { Component } from 'react';
import './App.css';
import Setting from './components/Setting';
import ShowInfo from './components/ShowInfo';
import PropTypes from 'prop-types';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			size: 12,
			colors: this.props.getInitalColor,
			colorDefault: "red"
		}
	}
	getInitialColor = this.props.COLORS;
	changeSizeAt = (e) => {
		var newSize = this.state.size + e;
		if(newSize <=40 && newSize >= 8){
			this.setState({
				size: newSize,
			})
		}	
	}

	changeColor = (color) =>{
		this.setState({colorDefault: color.background})
	}
	onResetAt = () =>{
		this.setState({
			colorDefault: "red",
			size: 12,
		})
	}
	
  render() {

  	return (
      <div className="container">
         <Setting 
         	changeSizeAt={this.changeSizeAt} 
         	colors={this.state.colors}
         	changeColorAt = {this.changeColor}
         	size={this.state.size}
         	color={this.state.colorDefault}
         	onResetAt={this.onResetAt}
         	/>
         <ShowInfo 
         	
         	size={this.state.size}
         	style={this.state.colorDefault}
         />
      </div>
    );
  }
}

App.propTypes = {
	// changeSizeAt: PropTypes.func.isRequired,
	getInitalColor : PropTypes.array.isRequired,
}

export default App;
