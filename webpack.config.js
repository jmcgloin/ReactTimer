var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		"script-loader!jquery/dist/jquery.min.js",
		"script-loader!foundation-sites/dist/js/foundation.min.js",
		"./app/app.jsx"
	],
	externals: {
		jQuery: 'jQuery'

	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: "./public/bundle.js"
	},
	resolve: {
		alias: {
			//AliasName: path.resolve(__dirname, './alias/path'),
			Main: 				path.resolve(__dirname, './app/component/Main'),
			Nav: 				path.resolve(__dirname, './app/component/Nav'),
			Timer: 				path.resolve(__dirname, './app/component/Timer'),
			Stopwatch: 			path.resolve(__dirname, './app/component/Stopwatch'),
			Clock: 				path.resolve(__dirname, './app/component/Clock'),
			applicationStyles: 	path.resolve(__dirname, './app/styles/app.scss'),
			jQuery: 			'jquery'
		},
		extensions: ["*",".js",".jsx"]
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-0"]
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: "eval-source-map"
}