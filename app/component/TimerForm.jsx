const React = require('react');

const TimerForm = React.createClass({
	onSubmit: function (e) {
		e.preventDefault();
		let seconds = this.refs.seconds.value;

		if(seconds.match(/^[0-9]+$/)) {
			this.refs.seconds.value = "";
			this.props.onSetTimer(parseInt(seconds,10));
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
						<button className='button expanded'>Start Timer</button>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = TimerForm;