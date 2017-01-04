import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
	res.json([
		{"id": 1, "firstName": "FName1", "lastName": "LName1", "email": "fl1@email.com"},
		{"id": 2, "firstName": "FName2", "lastName": "LName2", "email": "fl2@email.com"},
		{"id": 3, "firstName": "FName3", "lastName": "LName3", "email": "fl3@email.com"}
	])
})

app.listen(port, function (err) {
	if (err) {
		/* eslint-disable no-console */
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
