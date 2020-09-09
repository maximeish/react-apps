import React from 'react';

class ImageContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let ImageSection;
		fetch(this.props.currentImgLink)
			.then(() => {
					render() {
						return (
							)
					}
				}
			)
			.catch(err => {
					render() {
						return (
							<div>
								<div>fetch error: {JSON.stringify(err)}</div>
								<img
									src='#'
									className="profile-image"
									alt="Not Available"/>
							</div>)
					}
				}
			);
	}
}

export default ImageContainer;