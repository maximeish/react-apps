import React from 'react';

const ButtonsDataFetcher = props => {
	const startConnStyles = props.connStarted ? {display: "none"} : {display: "block"};
	const closeConnStyles = props.connClosed ? {display: "none"} : {display: "block"};
	const fetchDataStyles = props.connStarted && !props.isFetching ? {display: "block"} : {display: "none"};

	return (
		<React.Fragment>
			<div>
				<button style={startConnStyles} onClick={props.handleStartConn}>Start connection</button>
				<button style={fetchDataStyles} onClick={props.handleFetchData}>Fetch data</button>
				<button style={closeConnStyles} onClick={props.handleCloseConn}>Close connection</button>
			</div>
		</React.Fragment>
	);
}

export default ButtonsDataFetcher;