import React from 'react';

const ProfileEditor = props =>

<div className="flex-item animate__animated animate__fadeIn">
	<div className="editor-header text-center">
		<div className="react-logo">
			<strong className="text-primary">React</strong>
			<small className="text-faded"> (with Redux) </small>
		</div>
		<div className="header-text">Profile Creator</div>
	</div>
	
	<form onSubmit={props.handleSubmit}>
		<div className="form-group input-icon">
			<i className="fa fa-user"></i>
			<input 
				type="text"
				name="name"
				value={props.data.name}
				className="input-field form-control form-control-lg"
				placeholder="Name"
				onChange={props.handleChange}
			/>
		</div>

		<div className="form-group input-icon">
			<i className="fa fa-info-circle"></i>
			<input
				type="text"
				name="bio"
				value={props.data.bio}
				className="input-field form-control form-control-lg"
				placeholder="Bio"
				onChange={props.handleChange}
			/>
		</div>

		<div className="form-group input-icon">
			<label htmlFor="profile-color" className="form-text">Profile Image Color <small className="form-text text-faded-normal">(Use a dark color for clear visibility)</small></label>
			<i className="fa fa-paint-brush"></i>
			<input
				id="profile-color"
				type="color"
				name="imgLink"
				value={props.data.imgLink}
				className="input-field form-control form-control-lg"
				placeholder="Profile Image Color"
				onChange={props.handleChange}
			/>
		</div>

		<div className="form-group input-icon">
			<i className="fa fa-chrome"></i>
			<select
				name="color"
				value={props.data.color}
				className="input-field form-control form-control-lg"
				onChange={props.handleChange}>
				<option value="" disabled>Background Color</option>
				<option value="#1080FF" className="form-control form-control-lg">Blue</option>
				<option value="#0C0" className="form-control form-control-lg">Green</option>
				<option value="#CC0" className="form-control form-control-lg">Yellow</option>
				<option value="#333" className="form-control form-control-lg">Dark</option>
				<option value="#EEE" className="form-control form-control-lg">White</option>
			</select>
		</div>

		<button
			type="submit"
			className="btn btn-block btn-lg btn-primary">
			<i className="fa fa-gear"></i> Create Profile
		</button>

		<button
			type="reset"
			onClick={props.handleReset}
			className="btn btn-block btn-lg btn-danger">
			<i className="fa fa-trash"></i> Delete Profile
		</button>
	</form>
</div>

export default ProfileEditor;