import React from 'react';
import Data from './sub-components/Data';
import Message from './sub-components/Message';
import Progress from './sub-components/Progress';
import ButtonsDataFetcher from './sub-components/ButtonsDataFetcher';


class DataFetcher extends React.Component {
	constructor() {
		super();
		this.state = {
			dataFetched: 0,
			isFetching: null,
			connStarted: false,
			connClosed: true
		}

		this.handleStartConn = this.handleStartConn.bind(this);
		this.handleFetchData = this.handleFetchData.bind(this);
		this.handleCloseConn = this.handleCloseConn.bind(this);
	}

	handleStartConn() {
		this.setState({
			connStarted: true,
			connClosed: false
		})
	}

	handleFetchData() {
		setTimeout(() => {
			this.setState(prevState => {
				return {
					isFetching: false,
					dataFetched: prevState.dataFetched + 1
				}
			})
		}, 5000);
		this.setState({isFetching: true});
	}

	handleCloseConn() {
		this.setState({
			isFetching: null,
			connStarted: false,
			connClosed: true
		});
	}

	render() {
		return(
			<React.Fragment>
				<Message isFetching={this.state.isFetching} />
				<Data 
					dataFetched={this.state.dataFetched}
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

export default DataFetcher;
