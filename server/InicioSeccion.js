const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Reemplaza con tu usuario de MySQL
    password: '', // Reemplaza con tu contraseña de MySQL
    database: 'Guit_Explain',
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('MySQL connected...');
});

// Endpoint para registrar un nuevo usuario
app.post('/register', async (req, res) => {
    const { username, password, gmail } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO Usuario (username, password, gmail) VALUES (?, ?, ?)';
    db.query(sql, [username, hashedPassword, gmail], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send('Error creating user');
            return;
        }
        res.send('User created');
    });
});

// Endpoint para iniciar sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM Usuario WHERE username = ?';
    db.query(sql, [username], async (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.status(500).send('Error fetching user');
            return;
        }
        if (results.length > 0) {
            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                const token = jwt.sign({ id: user.id_registro }, 'secret', { expiresIn: '1h' });
                res.json({ token });
            } else {
                res.status(401).send('Invalid username or password');
            }
        } else {
            res.status(401).send('Invalid username or password');
        }
    });
});

// Iniciar el servidor
app.listen(8080,host='192.168.10.14', () => {
    console.log('Server running on port 8080');
});