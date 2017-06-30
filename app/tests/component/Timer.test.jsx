const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
// const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');
const Timer = require('Timer');

describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();
	});
});

describe('handleSetTimer', () => {
	it('should set state to started and count down', (done) => {
		let timer = TestUtils.renderIntoDocument(<Timer/>);
		timer.handleSetTimer(10);

		expect(timer.state.count).toBe(10);
		expect(timer.state.timerStatus).toBe('started');

		setTimeout(() => {
			expect(timer.state.count).toBe(9);
			done();
		}, 1001);
	});
	it('should not go below 0', (done) => {
		let timer = TestUtils.renderIntoDocument(<Timer/>);
		timer.handleSetTimer(1);

		setTimeout(() => {
			expect(timer.state.count).toBe(0);
			done();
		}, 3000);
	});
	it('should pause timer on "paused" status', (done) => {
		let timer = TestUtils.renderIntoDocument(<Timer/>);
		timer.handleSetTimer(3);
		timer.handleStatusChange('paused');

		setTimeout(() => {
			expect(timer.state.count).toBe(3);
			expect(timer.state.timerStatus).toBe('paused');
			done();
		}, 1001);
	});
	it('should stop timer on "stopped" status', (done) => {
		let timer = TestUtils.renderIntoDocument(<Timer/>)
		timer.handleSetTimer(3);
		timer.handleStatusChange('stopped');

		// expect(timer.state.count).toBe(0);
		// expect(timer.state.timerStatus).toBe('stopped');
		setTimeout(() => {
			expect(timer.state.count).toBe(0);
			expect(timer.state.timerStatus).toBe('stopped');
			done();
		}, 1001)
	});
});

