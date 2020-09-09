import React from 'react';
import jokeData from './sub-components/jokeData';

class Joke extends React.Component {
	render() {
		const jokeComponents = jokeData.map((joke, index) => 
											<JokeComponent 
												key={index}
												question={joke.question}
												answer={joke.answer}
												noHr={joke.noHr} />
											);
		return(
			<React.Fragment>
				{jokeComponents}
			</React.Fragment>
		);
	}
}


const JokeComponent = props => {
	return (
		<React.Fragment>
			<div style={{display: !props.question && "none"}}>Question: {props.question}</div>
			<div>Answer: {props.answer}</div>
			<hr style={{display: props.noHr && "none"}}/>
		</React.Fragment>
	);
}


export default Joke;