import React from 'react';
import FormChallengeUI from './sub-components/FormChallengeUI';

class FormChallenge extends React.Component {
	constructor() {
		super();
		this.state = {
			formModified: false,
			firstName: "",
			lastName: "",
			age: "",
			gender: "",
			nationality: "",
			submitted: false,
			fields: {
				maths: false,
				physics: false,
				'computer science': false
			}
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(Event) {
		const {type, name, value, checked} = Event.target;
		
		type === "checkbox" ?

		this.setState(prevState => {
			return {
				fields: {
					...prevState.fields,
					[name]: checked
				},
				formModified: true
			}
		})

		:
				
		this.setState({
			[name]: value,
			formModified: true
		});
	}

	handleSubmit() {
		this.setState({
			submitted: true
		});
	}

	render() {
		let fields = "";
		for (let field in this.state.fields) {
			if (this.state.fields[field])
				fields += field + ", ";
		}
		if (fields.endsWith(", "))
			fields = fields.slice(0, fields.lastIndexOf(", "));

		let submitMsgStyles = {}, infoPreviewStyles = {};
		
		const inputBoxStyles = {
			padding: "10px",
			letterSpacing: "3px",
			fontSize: "large",
			marginBottom: "5px"
		}
		
		if (this.state.formModified)
		{
			infoPreviewStyles = {
				display: "block",
				color: "#222",
				background: "#DDD",
				padding: "0",
				margin: "0 auto",
				textTransform: "uppercase",
				textAlign: "center"
			};
			submitMsgStyles = {
				maxWidth: "100%",
				display: "block",
				color: "#00A",
				opacity: 0.7,
				fontSize: "large",
				background: "lightblue",
				padding: "25px 20px",
				textAlign: "center",
				textTransform: "uppercase"
			};
		}
		else
			submitMsgStyles = infoPreviewStyles = { display: "none" };

		return (
			<FormChallengeUI 
				infoPreviewStyles={infoPreviewStyles}
				submitMsgStyles={submitMsgStyles}
				data={this.state}
				firstName={this.state.firstName}
				lastName={this.state.lastName}
				age={this.state.age}
				gender={this.state.gender}
				nationality={this.state.nationality}
				fields={fields}
				fieldsState={this.state.fields}
				handleSubmit={this.handleSubmit}
				inputBoxStyles={inputBoxStyles}
				handleChange={this.handleChange}
			/>
		);
	}

}

export default FormChallenge;