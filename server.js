const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic API endpoint
app.get('/', (req, res) => {
    res.send('Welcome to my local web service!');
});

// Example API returning JSON data
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from local server!', status: 'Success' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
