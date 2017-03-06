const React = require('react');

const Clock = React.createClass({

	formatSeconds: (totalSeconds) => {
		let seconds = totalSeconds % 60;
		let minutes = (totalSeconds - seconds) / 60;
		let formatedSeconds = seconds < 10 ? '0' + seconds : seconds;
		let formatedMinutes = minutes < 10 ? '0' + minutes : minutes;

		return formatedMinutes + ':' + formatedSeconds;

	},
	render: function() {
		return (
			<div>
				
			</div>
		);
	}
});

module.exports = Clock;