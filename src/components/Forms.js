import React from 'react';

//Form BEST PRACTICES - DO NOT DELETE

class Forms extends React.Component {

	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			gender: "",
			comment: "",
			isAdult: false,
			field: "Computer Science"
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	//You shouldn't directly access the 'Event' object's properties
	//in this.setState()
	//::further research: React synthetic event
	//'Formik' a nice JS library for dealing with forms easily
	handleChange(Event) {
		const {name, type, value, checked} = Event.target;
		
		//SIMPLIFIED
		type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value});
	}

	handleReset() {
		this.setState({
			firstName: "",
			lastName: "",
			gender: "",
			comment: "",
			isAdult: false,
			field: "Computer Science"
		});
	}

	render() {
		//controlled form - state should be the single source of truth
		return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit}>
					<input 
						type="text"
						value={this.state.firstName}
						name="firstName"
						placeholder="First name"
						onChange={this.handleChange} />
					<br />
					<input 
						type="text"
						value={this.state.lastName}
						name="lastName"
						placeholder="Last name"
						onChange={this.handleChange} />
					<br />
					<textarea 
						name="comment"
						placeholder="Comment here..."
						value={this.state.comment}
						onChange={this.handleChange}
						rows="5" />
					<br />
					<label>
						<input
							type="checkbox"
							name="isAdult"
							checked={this.state.isAdult}
							onChange={this.handleChange} />
						Are you adult?
					</label>
					<fieldset>
						<legend>Gender</legend>
						<label>
							<input
								type="radio"
								name="gender"
								value="male"
								checked={this.state.gender === "male"}
								onChange={this.handleChange} />
							Male
						</label>
						<label>
							<input
								type="radio"
								name="gender"
								value="female"
								checked={this.state.gender === "female"}
								onChange={this.handleChange} />
							Female
						</label>
					</fieldset>

					<label htmlFor="field">Field:</label>
						<select
							id="field"
							name="field"
							value={this.state.field}
							onChange={this.handleChange}
						>
							<option value="Computer Science">Computer Science</option>
							<option value="Mathematics">Mathematics</option>
							<option value="Physics">Physics</option>
						</select>
					
					<button type="submit">Submit</button>

					<button type="reset" onClick={this.handleReset}>
						Reset
					</button>
				</form>
			</React.Fragment>
		)
	}

}

export default Forms;
