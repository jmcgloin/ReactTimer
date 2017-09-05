const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

const Stopwatch = require('Stopwatch');

describe('Stopwatch', () => {
	it('should exist', () => {
		expect('Stopwatch').toExist();
	});

	it('should start sw on started status', (done) => {
		let sw = TestUtils.renderIntoDocument(<Stopwatch/>);

		sw.handleStatusChange('started');
		expect(sw.state.count).toBe(0);

		setTimeout(() => {
			expect(sw.state.swStatus).toBe('started');
			expect(sw.state.count).toBe(1);
			done();
		},1001);
	});

	it('should pause on paused status', (done) => {
		let sw = TestUtils.renderIntoDocument(<Stopwatch/>);

		sw.handleStatusChange('started');
		expect(sw.state.count).toBe(0);

		setTimeout(() => {
			sw.handleStatusChange('paused')
		}, 1001);

		setTimeout(() => {
			expect(sw.state.swStatus).toBe('paused');
			expect(sw.state.count).toBe(1);
			done();
		}, 2001);
	});

	it('should stop on stopped status', (done) => {
		let sw = TestUtils.renderIntoDocument(<Stopwatch/>);

		sw.handleStatusChange('started');

		setTimeout(() => {
			sw.handleStatusChange('stopped');

			expect(sw.state.swStatus).toBe('stopped');
			expect(sw.state.count).toBe(0);
			done();
		}, 1002);
	});
});
