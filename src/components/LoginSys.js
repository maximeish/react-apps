import React from 'react';
import './css/LoginSys.css';

class LoginSys extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn: false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => {
			return {
				isLoggedIn: !prevState.isLoggedIn
			}
		});
	}

	render() {
		return (
			<React.Fragment>
				<div id="container">
					<LoginComponent
						handleClick={this.handleClick} 
						isLoggedIn={this.state.isLoggedIn} />
				</div>
			</React.Fragment>
		);
	}
}

const LoginComponent = props =>
			<React.Fragment>
				{props.isLoggedIn ? <p>Logged in</p> : <p>Logged out</p>}
				<button 
					onClick={props.handleClick}>
					{props.isLoggedIn ? "LOG OUT" : "LOG IN"}
				</button>
			</React.Fragment>

export default LoginSys;