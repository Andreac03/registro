const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

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
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('MySQL connected...');
});

app.post('/create', async (req, res) => {
    const { username, password, gmail } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (username, password, gmail) VALUES (?, ?, ?)';
    db.query(sql, [username, hashedPassword, gmail], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send('Error creating user');
            return;
        }
        res.send('User created');
    });
});

app.get('/registro', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).send('Error fetching users');
            return;
        }
        res.json(result);
    });
});

app.listen(8082, () => {
    console.log('Server running on port 8080');
});
