const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const Timer = require('Timer');
const Stopwatch = require('Stopwatch');
const $ = require('jQuery');

//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//app.css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<Route path='/stopwatch' component={Stopwatch}/>
			<IndexRoute component={Timer}/>
		</Route>
	</Router>,
	document.getElementById('app')
);