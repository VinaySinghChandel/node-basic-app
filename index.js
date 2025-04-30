const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/twitter', (req, res) => {
    res.send('Vinay Singh Chandel');
});

app.get('/login', (req, res) => {
    res.send('<h1>Welcome Vinay</h1>');
});

let port = process.env.PORT;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
