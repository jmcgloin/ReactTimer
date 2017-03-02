var React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
	render: () => {
		return (
			<div className='top-bar'>
				<div className='top-bar-left'>
					<ul className='menu'>
						<li className='menu-text'>React Timer App</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Stopwatch</IndexLink>
						</li>
						<li>
							<Link to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Timer</Link>
						</li>
					</ul>
				</div>
				<div className='top-bar-right'>
					<ul className='menu'>
						<li className='menu-text'>
							Created by <a href='https://github.com/jmcgloin' target='_blank'>Jason McGloin</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Nav;