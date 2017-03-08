const React = require('react');
const Clock = require('Clock');
const TimerForm = require('TimerForm');

const Timer = React.createClass({
	getInitialState: function () {
		return {
			count: 0
		};
	},
	handleSetTimer: function(seconds) {
		this.setState ({
			count: seconds
		});
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