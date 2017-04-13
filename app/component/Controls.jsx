const React = require('react');

const Controls = React.createClass({
	propTypes: function() {
		timerStatus: React.PropTypes.string.isRequired
	},

	render: function() {
		let {timerStatus} = this.props;
		let renderStartStopButton = function() {
			if(timerStatus === 'started') {
				return (<button className='button secondary'>Pause</button>);
			} else if(timerStatus === 'paused') {
				return (<button className='button primary'>Start</button>);
			}
		};
		return (
			<div className='controls'>
				{renderStartStopButton()}
				<button className='button alert hollow' ref='reset'>Reset</button>
			</div>
		);
	}
});

module.exports = Controls;