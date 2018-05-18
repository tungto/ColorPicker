import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var COLORS = [
				{background: "red"},
				{background: "lightgreen"},
				{background: "brown"},
				{background: "royalblue"}
			]

ReactDOM.render(<App getInitalColor={COLORS}/>, document.getElementById('root'));
registerServiceWorker();
