import React from 'react';

const Progress = props =>
		<React.Fragment>
			<progress style={{display: props.isFetching ? "block" : "none"}}></progress>
		</React.Fragment>

export default Progress;