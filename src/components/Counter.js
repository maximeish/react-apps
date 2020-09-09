import React from 'react';

class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			value: 0
		}

		this.increment = this.increment.bind(this);
	}
	
	increment() {
		this.setState(prevState => {
			return {
				value: prevState.value + 1
				//+1 to prevent altering the state variable
			}
		});
	}
	
	render() {
		return (
			<React.Fragment>
				<div>{this.state.value}</div>
				<button onClick={this.increment}>Increment</button>
			</React.Fragment>
		);
	}
}

export default Counter;