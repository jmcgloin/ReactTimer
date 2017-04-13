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
	handleSetTimer: function(seconds) {
		this.setState ({
			count: seconds,
			timerStatus: 'started'
		});
	},
	componentDidUpdate: function(prevProps, prevState) {
		if(this.state.timerStatus !== prevState.timerStatus) {
			switch(this.state.timerStatus) {
				case 'started':
					this.startTimer();
					break;
			}
		}
	},
	startTimer: function() {
		this.timer = setInterval(() => {
			this.state.count > 0 ?
				this.setState({count: this.state.count - 1}) :
				clearInterval(this.timer);
		}, 1000);
	},
	render: function() {
		let {count} = this.state;
		return (
			<div>
				<Clock totalSeconds={count}/>
				<TimerForm onSetTimer={this.handleSetTimer}/>
			</div>
		);
	}
});

module.exports = Timer;