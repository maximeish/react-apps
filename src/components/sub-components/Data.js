import React from 'react';

const Data = props => 
		<React.Fragment>
			<div style={{display: props.connStarted  || props.dataFetched > 0 ? "block" : "none"}}>Data: {props.dataFetched}</div>
		</React.Fragment>

export default Data;