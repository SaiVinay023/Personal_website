const express = require('express');
const router = express.Router();
const pool = require('../db'); // Ensure this is correct

// Test database route
router.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()'); // Test query
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
