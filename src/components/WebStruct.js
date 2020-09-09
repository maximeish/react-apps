import React from 'react';
import NavBar from './sub-components/NavBar';
import MainContent from './sub-components/MainContent';
import Footer from './sub-components/Footer';
import './css/WebStruct.css';

class WebStruct extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div id="container">
					<NavBar />
					<MainContent />
					<Footer />
				</div>
			</React.Fragment>
		)
	};
}

export default WebStruct;