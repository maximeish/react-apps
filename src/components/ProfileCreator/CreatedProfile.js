import React from 'react';

const ImgContainer = props => {
	let nameInitials;

	nameInitials = props.name[0].toUpperCase();

	if (props.name.indexOf(' ') !== -1) {
		nameInitials = props.name
							.split(' ')
							.map(word => word[0].toUpperCase())
							.join(' ')
	}

	return (
		<div
			style={{background: props.color}} 
			className="profile-image animate__animated animate__fadeIn">
			{nameInitials}
		</div>
	)
}

class CreatedProfile extends React.Component {
	render() {
		let textColor = '';

		switch(this.props.data.currentColor) {
			case '#333':
				textColor = '#EEE';
				break;
			case '#0C0':
				textColor = '#000';
				break;
			case '#1080FF':
				textColor = '#EEE';
				break;
			case '#CC0':
				textColor = '#000';
				break;
			default:
				textColor = '#000';
		};

		const styles = {
			display: this.props.data.currentProfileCreatedStatus ? "flex" : "none",
			background: this.props.data.currentColor,
			color: textColor
		};

		return (
			<div
				style={styles}
				id="created-profile"
				className="flex-item animate__animated animate__fadeInLeft">

				<ImgContainer 
					color={this.props.data.currentImgLink}
					name={this.props.data.currentName} />
				
				<div className="profile-name animate__animated animate__fadeIn">
					{this.props.data.currentName}
				</div>
				
				<div className="profile-bio animate__animated animate__fadeIn">
					{this.props.data.currentBio}
				</div>
			</div>
		);
	}
}

export default CreatedProfile;