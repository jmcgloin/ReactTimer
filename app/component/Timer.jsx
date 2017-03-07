const React = require('react');
const Clock = require('Clock');

const Timer = React.createClass({
	render: function() {
		return (
			<div>
				<Clock totalSeconds={122}/>
			</div>
		);
	}
});

module.exports = Timer;