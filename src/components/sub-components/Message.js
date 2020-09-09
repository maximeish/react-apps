import React from 'react';

const Message = props => {
	const msgTxt = props.isFetching ? "Fetching data..." : props.isFetching === null ? "Waiting to fetch data" : "Data fetched successfully";
	return (
		<React.Fragment>
			<div>Status: {msgTxt}</div>
		</React.Fragment>
	);
}
export default Message;