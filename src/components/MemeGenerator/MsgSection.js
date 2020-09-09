import React from 'react';

const MsgSection = props =>
	<React.Fragment>
		<div
			className="text-center"
			style={{display: props.errorFetching ? "block":"none"}}>
				
			<div className="text-large text-danger">Connection Timeout!</div>
			
			<small className="text-faded text-small">
				(Timeout - isn't that a funny word)
			</small>
		</div>
		
		<div style={{display: props.isLoading ? "block":"none"}}>
			<progress min="0" max="100"></progress>
		</div>
	</React.Fragment>

export default MsgSection;