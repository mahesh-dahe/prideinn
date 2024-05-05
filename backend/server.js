require('dotenv').config(); // Load environment variables

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 4000;
const secretKey = process.env.SECRET_KEY || '123';

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '12345',
    database: process.env.DB_NAME || 'prideinn',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.post('/users/register', async (req, res) => {
    try {
        const { firstName,lastName,phoneNumber ,email, password } = req.body;

        // Check if the email is already registered
        const connection = await pool.getConnection();
        
        const [rows] = await connection.query(
            'SELECT  email FROM users WHERE email = ? AND password = ?',
            [email, password]
        );
        if(rows==1){
            return res.status(400).json({ message: 'Email is already registered' });
        }
        // Insert the new user into the database
        await connection.query('INSERT INTO users (firstname, lastname,phoneNumber, email,password) VALUES (?,?,?,?, ?)', [firstName,lastName,phoneNumber, email, password]);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Route for user login

    app.post('/users/login', async (req, res) => {
        try {
            const { email, password } = req.body;

            // Get a connection from the pool
            const connection = await pool.getConnection();

            // Fetch user from the database based on email and password
            const [rows] = await connection.query(
                'SELECT  email FROM users WHERE email = ? AND password = ?',
                [email, password]
            );

            if (rows.length === 1) {
                // If user exists and password matches, generate JWT token
                const user = rows[0];
                const userId = user.id;
                const token = jwt.sign({ userId }, secretKey, { expiresIn: '24h' });

                // Send the token along with user data to the client
                res.status(200).json({ success: true, token, user });
            } else {
                res.status(401).json({ success: false, message: 'Invalid email or password' });
            }

            connection.release(); // Release the connection
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ error: 'Internal server error', message: error.message });
        }
    });

// Route to handle user data retrieval
app.get('/users/data', (req, res) => {
    // Get user data from request headers (assuming it's sent along with the JWT token)
    const user = req.user;

    // Return the user data to the client
    res.status(200).json({ success: true, user });
});

// Route to verify authentication status
// Route for fetching authentication status
app.get('/users/authentication-status', async (req, res) => {
    try {
        // Extract token from the request headers
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

        if (!token) {
            // If token is not provided, user is not authenticated
            return res.status(200).json({ isAuthenticated: false });
        }

        // Verify the JWT token
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                // If token is invalid or expired, user is not authenticated
                return res.status(200).json({ isAuthenticated: false });
            } else {
                // If token is valid, user is authenticated
                return res.status(200).json({ isAuthenticated: true });
            }
        });
    } catch (error) {
        console.error('Error fetching authentication status:', error);
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
