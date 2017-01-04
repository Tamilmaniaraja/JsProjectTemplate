import path from 'path';
import webpack from 'webpack';

export default {
	debug: true,
	devtools: 'source-map',
	noInto: false,
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		finrname: 'bundle.js'
	},
	plugins: [
		//Eliminate duplicate package
		new webpack.optimize.DedupePlugin(),
		//Minify js
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
			{ test: /\.css$/, loaders: ['styles', 'css'] }
		]
	}
}
