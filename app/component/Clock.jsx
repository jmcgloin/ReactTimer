const React = require('react');

const Clock = React.createClass({
	getDefaultProps: function () {
		return {
			totalSeconds: 0
		};
	},
	propTypes: function () {
		return {
			totalSeconds: React.propTypes.number
		};
	},
	formatSeconds: (totalSeconds) => {
		let seconds = totalSeconds % 60;
		let minutes = (totalSeconds - seconds) / 60;
		let formatedSeconds = seconds < 10 ? '0' + seconds : seconds;
		let formatedMinutes = minutes < 10 ? '0' + minutes : minutes;

		return formatedMinutes + ':' + formatedSeconds;

	},
	render: function() {
		let {totalSeconds} = this.props;
		return (
			<div className='clock'>
				<span className='clock-text'>
					{this.formatSeconds(totalSeconds)}
				</span>
			</div>
		);
	}
});

module.exports = Clock;