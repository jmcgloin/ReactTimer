var React = require('react');
const Nav = require('Nav');
const Timer = require('Timer');
const Stopwatch = require('Stopwatch');

let Main = (props) => {
	return (
		<div>
			<Nav/>
			{props.children}
		</div>
	);
};

module.exports = Main;