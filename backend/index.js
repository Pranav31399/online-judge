const express = require('express');
const app = express();
const { DBConnection } = require('./database/db.js');

const PORT = process.env.PORT || 8080;
DBConnection();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});