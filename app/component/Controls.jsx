const React = require('react');

const Controls = React.createClass({
	propTypes: {
		timerStatus: React.PropTypes.string.isRequired,
		onStatusChange: React.PropTypes.func.isRequired
	},
	onStatusChange: function(newStatus) {
		return () => {
			this.props.onStatusChange(newStatus);
		}
	},
	render: function() {
		let {timerStatus} = this.props;
		let renderStartStopButton = () => {
			if(timerStatus === 'started') {
				return (<button className='button secondary' onClick={this.onStatusChange('paused')}>Pause</button>);
			} else if(timerStatus === 'paused') {
				return (<button className='button primary' onClick={this.onStatusChange('started')}>Start</button>);
			}
		};
		return (
			<div className='controls'>
				{renderStartStopButton()}
				<button className='button alert hollow' ref='reset' onClick={this.onStatusChange('stopped')}>Reset</button>
			</div>
		);
	}
});

module.exports = Controls;