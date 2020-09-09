import React from 'react';

const StopwatchUI = props => {
	let startStyles = {display: props.data.button.hideStart ? "none":"block"};
	let pauseStyles = {display: props.data.button.hidePause ? "none":"block"};
	let stopStyles = {display: props.data.button.hideStop ? "none":"block"};
	let resumeStyles = {display: props.data.button.hideResume ? "none":"block"};
	let timerStyles = {display: ['running', 'paused'].indexOf(props.data.status) === -1 ? "none":"block"};
	let inputStyles = ['running', 'paused'].indexOf(props.data.status) !== -1 ? "input-group hide-field" : "input-group noexist";
	let dispZero = {display: props.data.sec < 10 ? "inline":"none", fontSize: "xx-large"};
	let timeUp = props.data.styles.timeUp || "hide-field";
	let notifHide, hideBtnStyles = null;
	if (props.data.hideDueToNotif) {
		notifHide = "hide-field";
		hideBtnStyles = {
			display: 'none'
		}
	}
	else 
		notifHide = null;

	return (
		<React.Fragment>
			<main className="container-fluid">
				<h1 className="animate__animated animate__fadeInRight">Stopwatch <span className="app-version">v1.0</span> <small id="react-banner">using React</small></h1>

				<div className={timeUp}>
					TIME'S UP!<br />
					0 <small>min</small> : 00 <small>sec</small><br />
					<button 
						className="btn btn-info"
						onClick={props.handleNotification}>Clear Notification</button>
				</div>
				
				<div
					className="timer-container animate__animated animate__fadeIn" 
					style={timerStyles}>
					{props.data.min} <span>min</span> <span className="time-separator">:</span> <span style={dispZero}>0</span>{props.data.sec} <span>sec</span>
				</div>
				
				<div className={inputStyles + " animate__animated animate__fadeInLeft " + notifHide}>
					<input 
						id="min"
						value={props.data.min}
						onChange={props.handleChange}
						className="button text-center form-control form-control-lg btn-primary" 
						type="number" min="0" placeholder="0 minutes" />

					<div className="input-group-text field-separator">
						<span className="input-group-prepend"> : </span>
					</div>

					<input 
						id="sec"
						value={props.data.sec}
						onChange={props.handleChange}
						className="button form-control form-control-lg text-center btn-primary" 
						type="number" min="0" placeholder="00 seconds" />
				</div>
				
				<div
					className={notifHide} 
					id="btn-container"
					style={hideBtnStyles}>
					<div
						style={startStyles}
						className="button animate__animated animate__fadeInRight">
						<button
							id="starter"
							name="start"
							onClick={props.handleStart}
							className="btn btn-success btn-block btn-lg">
						Start</button>
					</div>
					<div
						style={pauseStyles}
						className="button animate__animated animate__fadeInLeft">
						<button
							id="pauser"
							name="pause"
							onClick={props.handlePause}
							className="btn btn-primary btn-block btn-lg">
						Pause</button>
					</div>
					<div
						style={resumeStyles}
						className="button animate__animated animate__fadeInLeft">
						<button
							id="resumer"
							name="resume"
							onClick={props.handleResume}
							className="btn btn-info btn-block btn-lg">
						Resume</button>
					</div>
					<div
						style={stopStyles}
						className="button animate__animated animate__fadeInRight">
						<button
							id="stopper"
							name="stop"
							onClick={props.handleStop}
							className="btn btn-danger btn-block btn-lg">
						Stop</button>
					</div>
				</div>
			</main>
		</React.Fragment>
	)
}
export default StopwatchUI;