const React = require('react');

const TimerForm = React.createClass({
	onSubmit: function (e) {
		e.preventDefault();
		let seconds = this.refs.seconds.value;

		console.log('input count', $('input').length);

		if(seconds.match(/^[0-9]+$/)) {
			this.refs.seconds.value = "";
			this.props.onSetTimer(parseInt(seconds,10));
		} else if(seconds.match(/^[0-9]+:[0-9]+$/)) {
			this.refs.seconds.value = "";
			this.props.onSetTimer(parseInt(seconds.split(':')[0] * 60,10) + parseInt(seconds.split(':')[1],10));
		} else {
			this.refs.seconds.value = ""
		}
	},
	render: function() {
		return (
			<div className='row'>
				<div className='columns medium-4 medium-centered'>
					<form ref='form' onSubmit={this.onSubmit} className='timer-form'>
						<input type='text' ref='seconds' placeholder='Enter time in seconds'></input>
						<button className='button expanded'>Start The Timer</button>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = TimerForm;