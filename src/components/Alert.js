import React from 'react';
import sayHi from './sub-components/sayHi.js';

class Alert extends React.Component {
	render() {
		return (
			<React.Fragment>
				<button onClick={sayHi}>Click me</button>
			</React.Fragment>
		);
	}
}

export default Alert;