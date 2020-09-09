import React from 'react';

// const Pic = () => 
// 		<React.Fragment>
// 			<img src="" width="500" height="500" />
// 		</React.Fragment>

class Pic extends React.Component {
	render() {
		return (
			<React.Fragment>
				<img src="" width="500" height="500" alt="no img" />
			</React.Fragment>
		);
	}
}

class MainContent extends React.Component { 
	render() {
		return (
			<React.Fragment>
				<main id="main-content" className="flex">
					<span>Main Content</span>
					<div><Pic /></div>
					<div><Pic /></div>
					<div><Pic /></div>
					<div><Pic /></div>
					<div><Pic /></div>
					<div><Pic /></div>
					<div><Pic /></div>
					<div><Pic /></div>
					<div><Pic /></div>
					<div><Pic /></div>
					<div><Pic /></div>
					<div><Pic /></div>
					<div><Pic /></div>
					<div><Pic /></div>
					<div><Pic /></div>
					<div><Pic /></div>
				</main>
			</React.Fragment>
		);
	}
}

export default MainContent;