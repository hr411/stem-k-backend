const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const name = req.query.name || '';
	res.send(`Stem K Start! ${name}`);
    return res.status(200).end();
});

app.listen(port, () => {
	console.log('Listening...');
});