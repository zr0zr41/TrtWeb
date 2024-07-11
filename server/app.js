// app.js

require('dotenv').config();
const tracer = require('dd-trace').init({
    env: 'production',
    service: 'your-service-name',
    version: '1.0.0',
    apiKey: process.env.DATADOG_API_KEY
});

const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Server is running');
});

module.exports = app;
