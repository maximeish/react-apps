import React from 'react';

class Quiz extends React.Component {
	constructor() {
		super();
		this.state = {
			questionsFetched: 0,
			isFetching: null,
			connStarted: false,
			connClosed: true,
			correctQuestions: 0
		}

		this.handleClickAns = this.handleClickAns.bind(this);
		this.handleStartConn = this.handleStartConn.bind(this);
		this.handleFetchQuestion = this.handleFetchData.bind(this);
		this.handleCloseConn = this.handleCloseConn.bind(this);
	}

	handleStartConn() {

	}
	
	handleFetchQuestion() {

	}

	handleClickAns() {

	}

	handleCloseConn() {

	}

	render() {
		return(
			<React.Fragment>
				<Message isFetching={this.state.isFetching} />
				<Questions 
					quest={this.state.dataFetched}
					connStarted={this.state.connStarted} />
				<Progress isFetching={this.state.isFetching} />
				<ButtonsDataFetcher 
					connStarted={this.state.connStarted} handleStartConn={this.handleStartConn}
					fetchData={this.state.isFetching} handleFetchData={this.handleFetchData}
					connClosed={this.state.connClosed} handleCloseConn={this.handleCloseConn} />
			</React.Fragment>
		);
	}
}

export default Quiz;