import React from 'react';

class PasswordValidator extends React.Component {

	constructor() {
		super();
		this.state = {
			passwd: "",
			passwdLength: 0,
			passwdStrength: null
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(Event) {
		this.setState({
			passwd: Event.target.value,
			passwdLength: Event.target.value.length,
			passwdStrength: Event.target.value.length === 0 ? null : Event.target.value.length > 0 && Event.target.value.length < 6 ? "Weak" : Event.target.value.length >= 6 && Event.target.value.length < 8 ? "Medium" : "Strong"
		});
	}

	render() {
		let progress = "", progBarStyles = {}, smallStyles = {};

		let inputStyles = {
			padding: "20px",
			marginBottom: "10px",
			fontSize: "large",
			textAlign: "center"
		}
		let formStyles = {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center"
		}
		switch(this.state.passwdStrength) {
			case "Weak":
				smallStyles = {display: "block", color: "red",
								fontSize: "x-large"};
				progBarStyles = {display: "block"};
				progress = 30;
				break;
			case "Medium": 
				smallStyles = {display: "block", color: "blue",
								fontSize: "x-large"};
				progBarStyles = {display: "block"};
				progress = 60;
				break;
			case "Strong":
				smallStyles = {display: "block", color: "green",
								fontSize: "x-large"};
				progBarStyles = {display: "block"};
				progress = 98;
				break;
			default: 
				smallStyles = {display: "none"};
				progBarStyles = {display: "none"};
				break;
		} 
		return (
			<React.Fragment>
				<h1>Password Length Validator</h1>
				<form style={formStyles}>
					<input
						style={inputStyles}
						type="password"
						name="passwd"
						placeholder="Password"
						onChange={this.handleChange} />
					<small style={smallStyles}>
						{this.state.passwdStrength}
					</small>
					<progress 
						style={progBarStyles}
						min="0" max="100" 
						value={progress}>
					</progress>
				</form>
			</React.Fragment>
		)
	}

}

export default PasswordValidator;