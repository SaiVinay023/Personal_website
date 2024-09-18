const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const apiRoutes = require('./routes/api');  // Import the API routes

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());// To allow cross-origin requests
app.use(express.json());

app.use(bodyParser.json());       // To parse JSON data
// API Routes
app.use('/api', apiRoutes);

// PostgreSQL pool setup
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

