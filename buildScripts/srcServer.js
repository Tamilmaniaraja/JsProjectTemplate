import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpakConfig from '../webpack.config.dev.js';

const port = 3000;
const app = express();
const compailer = webpack(webpakConfig);

app.use(require('webpack-dev-middleware')(compailer, {
	noInfo: true,
	publicPath: webpakConfig.output.publicPath
}));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
	if (err) {
		/* eslint-disable no-console */
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
