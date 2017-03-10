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
	it('should set state to started and count down', () => {
		let timer = TestUtils.renderIntoDocument(<Timer/>);
		timer.handleSetTimer(10);

		expect(timer.state.count).toBe(10);
		expect(timer.state.timerStatus).toBe('started');

		setTimeout(() => {
			expect(timer.state.count).toBe(9);
			// done();
		}, 1001);
	});
	it('should not go below 0', () => {
		let timer = TestUtils.renderIntoDocument(<Timer/>);
		timer.handleSetTimer(1);

		setTimeout(() => {
			expect(timer.state.count).toBe(0);
		}, 3000);
	});
});
