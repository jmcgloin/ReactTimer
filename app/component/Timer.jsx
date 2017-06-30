const React = require('react');
const Clock = require('Clock');
const TimerForm = require('TimerForm');
const Controls = require('Controls');

const Timer = React.createClass({
	getInitialState: function () {
		return {
			count: 0,
			timerStatus: 'stopped'
		};
	},
	componentDidUpdate: function(prevProps, prevState) {
		if(this.state.timerStatus !== prevState.timerStatus) {
			switch(this.state.timerStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},
	componentWillUnmount: function() {
		clearInterval(this.timer);
		this.timer = undefined;
	},
	handleSetTimer: function(seconds) {
		this.setState ({
			count: seconds,
			timerStatus: 'started'
		});
	},
	handleStatusChange: function(newStatus) {
		this.setState ({
			timerStatus: newStatus
		});
	},
	startTimer: function () {
		this.timer = setInterval( () => {
			let newCount = this.state.count - 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0,
				timerStatus: newCount === 0 ? 'stopped' : this.state.timerStatus
			});
		}, 1000);
	},
	render: function() {
		let {count, timerStatus} = this.state;
		let renderControlArea = () => {
			return timerStatus !== 'stopped' ? 
				<Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/> : 
				<TimerForm onSetTimer={this.handleSetTimer}/>
		};

		return (
			<div>
				<h1 className="page-title">Timer App</h1>
				<Clock totalSeconds={count}/>
				{renderControlArea()}
			</div>
		);
	}
});

module.exports = Timer;