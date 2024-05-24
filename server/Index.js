const express = require('express');
const mysql = require('mysql');n
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'registro'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

app.post('/create', (req, res) => {
    const { username, password, gmail } = req.body;
    const sql = 'INSERT INTO users (username, password, gmail) VALUES (?, ?, ?)';
    db.query(sql, [username, password, gmail], (err, result) => {n
        if (err) throw err;
        res.send('User created...');
    });
});

app.get('/registro', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.listen(8082, () => {
    console.log('Server running on port 8082');
});