import React from 'react';

const FormChallengeUI = props => 
	<React.Fragment>
		<form 
			className="container-fluid form-container"
			onSubmit={props.handleSubmit}
		>
			<input 
				className="form-control form-control-lg"
				type="text" 
				name="firstName"
				value={props.data.firstName}
				placeholder="First Name"
				onChange={props.handleChange} />
			<br />
			<input
			className="form-control form-control-lg"
				type="text"
				name="lastName"
				value={props.data.lastName}
				placeholder="Last Name"
				onChange={props.handleChange} />
			<br />
			<input
			className="form-control form-control-lg"
				type="number"
				min="0"
				name="age"
				value={props.data.age}
				placeholder="Age"
				onChange={props.handleChange} />
			<br />
			<fieldset>
				<legend>Gender</legend>
				<label>
					<input 
						type="radio" 
						name="gender" 
						value="male" 
						checked={props.data.gender === "male"}
						onChange={props.handleChange} /> Male
				</label>
				<br />
				<label>
					<input 
						type="radio" 
						name="gender" 
						value="female" 
						checked={props.data.gender === "female"}
						onChange={props.handleChange} /> Female
				</label>
			</fieldset>
			<select
				className="form-control"
				name="nationality"
				value={props.data.nationality}
				onChange={props.handleChange}
			>
				<option value="" disabled>-- Choose Nationality --</option>
				<option value="rwandan">Rwandan</option>
				<option value="other">Other</option>
			</select>
			<fieldset>
				<legend>Fields of Interest</legend>
				<label>
					<input 
						type="checkbox"
						checked={props.data.fields.maths}
						onChange={props.handleChange}
						name="maths" /> Maths
				</label>
				<br />
				<label>
					<input 
						type="checkbox" 
						checked={props.data.fields.physics}
						onChange={props.handleChange}
						name="physics" /> Physics
				</label>
				<br />
				<label>
					<input 
						type="checkbox"
						checked={props.data.fields['computer science']} 
						onChange={props.handleChange}
						name="computer science" /> Computer Science
				</label>
			</fieldset>
			<div style={props.infoPreviewStyles}>
				<div style={props.submitMsgStyles}>Registration in progress...</div>
				<h1>Your&nbsp;Information</h1>
				<div className="info-box">
					<p>First Name: <strong>{props.firstName}</strong></p>
					<p>Last Name: <strong>{props.lastName}</strong></p>
					<p>Age: <strong>{props.age}</strong></p>
					<p>Gender: <strong>{props.gender}</strong></p>
					<p>Nationality: <strong>{props.nationality}</strong></p>
					<p>Fields of Interest: <strong>{props.fields}</strong></p>
				</div>
			</div>
			<button
				type="submit"
				className="btn btn-primary btn-block">Submit
			</button>
		</form>
	</React.Fragment>

export default FormChallengeUI;