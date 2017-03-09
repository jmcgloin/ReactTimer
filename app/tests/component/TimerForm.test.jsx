const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

const TimerForm = require('TimerForm');

describe('TimerForm', () => {
	it('should exist', () => {
		expect(TimerForm).toExist();
	});
	
	it('should call onSetTimer if valid seconds are entered', () => {
		let spy = expect.createSpy();
		let timerForm = TestUtils.renderIntoDocument(<TimerForm onSetTimer={spy} />);
		let $el = $(ReactDOM.findDOMNode(timerForm));

		timerForm.refs.seconds.value = '109';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(109);
	});

	it('should not call onSetTimer if invalid seconds are entered', () => {
		let spy = expect.createSpy();
		let timerForm = TestUtils.renderIntoDocument(<TimerForm onSetTimer={spy} />);
		let $el = $(ReactDOM.findDOMNode(timerForm));

		timerForm.refs.seconds.value = 'apple';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});