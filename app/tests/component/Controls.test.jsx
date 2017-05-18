const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

const Controls = require('Controls');

describe('Controls', () => {
	it('should exists', () => {
		expect(Controls).toExist();
	});

	describe('Render', () => {
		it('should render Pause when started', () => {
			let controls = TestUtils.renderIntoDocument(<Controls timerStatus='started'/>);
			let $el = $(ReactDOM.findDOMNode(controls));
			let $pauseButton = $el.find("button:contains('Pause')");
			expect($pauseButton.length).toBe(1);
		})

		it('should render Start when paused', () => {
			let controls = TestUtils.renderIntoDocument(<Controls timerStatus='paused'/>);
			let $el = $(ReactDOM.findDOMNode(controls));
			let $startButton = $el.find("button:contains('Start')");
			expect($startButton.length).toBe(1);

		})
	})

});