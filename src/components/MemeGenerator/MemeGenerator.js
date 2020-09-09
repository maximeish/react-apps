import React from 'react';
import Header from './Header';
import MsgSection from './MsgSection';
import Meme from './Meme';
import '../css/MemeGenerator.css';

class MemeGenerator extends React.Component {
		state = {
			topText: "",
			bottomText: "",
			randomImage: "https://a.uguu.se/zDRL8NArpJhR_f.png",
			allMemeImages: "",
			isLoading: false,
			errorFetching: false
		}

	componentDidMount() {
		this.setState({
			isLoading: true
		});

		fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(memesObj => {
				this.setState({
					allMemeImages: memesObj.data.memes,
					isLoading: false
				});
			})
			.catch(() => {
				this.setState({
					errorFetching: true
				});
			});
	}

	handleChange = Event => {
		const {name, value} = Event.target;
		this.setState({
			[name]: value
		});
	}

	genRandImage = Event => {
		Event.preventDefault();
		let imagesNum = this.state.allMemeImages.length;
		let randomNum = Math.floor(Math.random() * imagesNum);
		this.setState({
			randomImage: this.state.allMemeImages[randomNum].url
		});
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<div id="meme-container">
					<MsgSection
						errorFetching={this.state.errorFetching}
						isLoading={this.state.isLoading} />
					<Meme
						data={this.state}
						handleChange={this.handleChange}
						randomImage={this.state.randomImage}
						genRandImage={this.genRandImage} />
				</div>
			</React.Fragment>
		);
	}
};

export default MemeGenerator;