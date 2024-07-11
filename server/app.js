// app.js

require('dotenv').config();
const tracer = require('dd-trace').init({
    env: process.env.DD_ENV || 'production',
    service: process.env.DD_SERVICE || 'trtweb',
    version: process.env.DD_VERSION || '1.0.0',
    url: `http://${process.env.DD_AGENT_HOST || 'localhost'}:8126`,
    hostname: process.env.DD_AGENT_HOST || 'localhost',
    port: 8126
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
