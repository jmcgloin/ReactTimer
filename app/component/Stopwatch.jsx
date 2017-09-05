const React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');

const Stopwatch = React.createClass({
	getInitialState: function () {
		return {
			count: 0,
			swStatus: 'stopped'
		};
	},
	componentDidUpdate: function(prevProps, prevState) {
		if(this.state.swStatus !== prevState.swStatus) {
			switch(this.state.swStatus) {
				case 'started':
					this.startSW();
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},
	componentWillUnmount: function() {
		clearInterval(this.timer);
		this.timer = undefined;
	},
	handleStatusChange: function(newStatus) {
		this.setState ({
			swStatus: newStatus
		});
	},
	startSW: function () {
		this.timer = setInterval( () => {
			this.setState({
				count: this.state.count + 1
			});
		}, 1000);
	},
	onSubmit: function () {
		this.setState ({
			swStatus: 'started'
		})
	},
	render: function() {
		let {count,swStatus} = this.state;
		let renderControlArea = () => {
			return swStatus !== 'stopped' ? 
				<Controls timerStatus={swStatus} onStatusChange={this.handleStatusChange}/> : 
				<div className='row'>
					<div className='columns medium-4 medium-centered'>
						<form ref='form' onSubmit={this.onSubmit} className='sw-form'>
							<button className='button expanded'>Start The Stopwatch</button>
						</form>
					</div>
				</div>
		};
		return (
			<div>
				<h1 className="page-title">Stopwatch App</h1>
				<Clock totalSeconds={count}/>
				{renderControlArea()}
			</div>
		);
	}
});

module.exports = Stopwatch;