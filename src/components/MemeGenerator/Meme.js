import React from 'react';

const Meme = props =>
	<React.Fragment>
		<form onSubmit={props.genRandImage}>
			<div className="input-group">
				<input 
					type="text" 
					name="topText"
					className="form-control" 
					placeholder="Top Text"
					value={props.data.topText}
					onChange={props.handleChange} />

				<div className="input-group-text">
					<span className="input-group-prepend">-</span>
				</div>

				<input 
					type="text" 
					name="bottomText" 
					className="form-control"
					placeholder="Bottom Text"
					value={props.data.bottomText}
					onChange={props.handleChange} />
			</div>
			<button 
				className="btn btn-primary btn-block"
				type="submit">Generate
			</button>
		</form>
		<div className="">
			<img
				className="meme-img"
				src={props.randomImage}
				alt="This is weird. The meme should be right here"/>
			<h2 className="meme-txt topText">{props.data.topText}</h2>
			<h2 className="meme-txt bottomText">{props.data.bottomText}</h2>
		</div>
	</React.Fragment>

export default Meme;