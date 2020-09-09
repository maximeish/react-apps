import React from 'react';
import StopwatchUI from './StopwatchUI';
// import $ from 'jquery';
import '../css/Stopwatch.css';

class StopwatchComponent extends React.Component {
	state = {
		button: {
			hideStart: false,
			hidePause: true,
			hideResume: true,
			hideStop: true
		},
		allowed: {
			startTimer: true,
			pauseTimer: false,
			resumeTimer: false,
			stopTimer: false
		},
		styles: {
			timeUp: undefined 
		},
		min: "",
		sec: "",
		status: "standing by",
		hideDueToNotif: false
	}

	handleChange = Event => {
		const {id, value} = Event.target;
		this.setState({
			[id]: value
		});
	}
	
	changeState = (hideStart, hidePause, hideResume, hideStop, startTimer, pauseTimer, resumeTimer, stopTimer, status) => {
		this.setState(prevState => {
			return {
				button: {
					...prevState.button,
					hideStart: hideStart,
					hidePause: hidePause,
					hideResume: hideResume,
					hideStop: hideStop
				},
				allowed: {
					...prevState.allowed,
					startTimer: startTimer,
					pauseTimer: pauseTimer,
					resumeTimer: resumeTimer,
					stopTimer: stopTimer
				},
				status: status
			};
		});	
	}

	handleStart = () => {
		let startAllowed = this.state.allowed.startTimer && !this.state.allowed.stopTimer && !this.state.allowed.pauseTimer && !this.state.allowed.resumeTimer;
		if (startAllowed) {
			this.setState(prevState => {
				return {
					styles: {
						timeUp: undefined
					},
					min: prevState.min === "" ? 0 : prevState.min
				}
			});
			this.changeState(true, false, true, false, false, true, false, true, "running");
			
			let timer = setInterval(() => {

				if (Number(this.state.sec) > 0 && Number(this.state.min) >= 0 && this.state.status === "running") {
					this.setState(prevState => {
						return {
							sec: Number(prevState.sec) - 1
						};
					});
				} else {
					if (Number(this.state.sec) === 0 && Number(this.state.min) > 0 && this.state.status === "running") {
						this.setState(prevState => {
							return {
								min: Number(prevState.min) - 1,
								sec: 59
							}
						});
					}else {
						if ((this.state.status === "running") || (this.state.status === "stopped")) {
							if (this.state.status === 'running') {
								this.setState({
									hideDueToNotif: true,
									styles: {
										timeUp: "show-field text-center text-danger animate__animated animate__flash animate__repeat-3 1"
									}
								});
							}
							this.changeState(false, true, true, true, true, false, false, false, "stopped");
							this.setState(prevState => {
								return {
									min: "",
									sec: ""
								};
							});
							clearInterval(timer);
						}
					};
				}
			}, 1000);
		} else if (this.state.status === 'paused') {
			alert('paused');
		} else {
			;
		}
	}

	handlePause = () => {
		this.changeState(true, true, false, false, true, false, true, true, "paused");
	}

	handleResume = () => {
		this.changeState(true, false, true, false, false, true, false, true, "running");	
	}

	handleStop = () => {
		if (window.confirm('Are you sure?'))
			this.changeState(false, true, true, true, true, false, false, false, "stopped");
	}

	handleNotification = () => {
		this.setState({
			styles: {
				timeUp: undefined
			},
			hideDueToNotif: false
		});
	}

	render() {
		return (
			<StopwatchUI
				data={this.state}
				handleStart={this.handleStart}
				handlePause={this.handlePause}
				handleResume={this.handleResume}
				handleStop={this.handleStop}
				handleChange={this.handleChange}
				handleNotification={this.handleNotification} />
		);
	}
}

export default StopwatchComponent;