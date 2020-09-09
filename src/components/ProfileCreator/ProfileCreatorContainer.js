import React from 'react';
import CreatedProfile from './CreatedProfile';
import ProfileEditor from './ProfileEditor';
import '../css/ProfileCreator.css';
import * as ACTION from './actions/actions';
import {connect} from 'react-redux';

class ProfileCreatorContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.currentName,
			bio: this.props.currentBio,
			imgLink: this.props.currentImgLink,
			color: this.props.currentColor,
			isProfileCreated: this.props.currentProfileCreatedStatus
		};
	}
	handleChange = Event => {
		const {name, value} = Event.target;
		this.setState({
			[name]: value
		});
	}

	handleSubmit = Event => {
		Event.preventDefault();
		//simplify further
		this.props.createName(this.state.name);
		this.props.createBio(this.state.bio);
		this.props.createImgLink(this.state.imgLink);
		this.props.createColor(this.state.color);
		this.props.createProfileCreatedStatus(true);
		//why is redux not updating this?
		this.setState({
			isProfileCreated: true
		});
	}

	handleReset = Event => {
		Event.preventDefault();
		this.setState({
			name: "",
			bio: "",
			imgLink: "#17477e",
			color: "",
			isProfileCreated: false
		});
		this.props.createProfileCreatedStatus(false);
	}

	render() {
		let CreatedProfileContainer;
		if(this.state.isProfileCreated)
			CreatedProfileContainer = <CreatedProfile data={this.props} />
		else CreatedProfileContainer = <div style={{display: 'none'}}></div>

		return (
			<div className="flex-container">
				<ProfileEditor
					data={this.state}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					handleReset={this.handleReset} />
				
				{CreatedProfileContainer}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	currentName: state.name,
	currentBio: state.bio,
	currentImgLink: state.imgLink,
	currentColor: state.color,
	currentProfileCreatedStatus: state.isProfileCreated
});

const mapDispatchToProps = dispatch => ({
	createName: name => dispatch(ACTION.updateName(name)),
	createBio: bio => dispatch(ACTION.updateBio(bio)),
	createImgLink: imgLink => dispatch(ACTION.updateImgLink(imgLink)),
	createColor: color => dispatch(ACTION.updateColor(color)),
	createProfileCreatedStatus: status => dispatch(ACTION.updateProfileCreatedStatus(status)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(ProfileCreatorContainer);

export default Container;