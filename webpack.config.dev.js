import path from 'path';

export default {
	debug: true,
	devtools: 'inline-source-map',
	noInto: false,
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		finrname: 'bundle.js'
	},
	plugins: [],
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			{test: /\.css$/, loaders: ['styles', 'css']}
		]
	}
}
