const pool = require('../config/db');
const bcrypt = require('bcryptjs');

const createUser = async (user) => {
    const { fullName, username, email, phone, password, referral, reason } = user;
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
        'INSERT INTO users (full_name, username, email, phone, password, referral, reason) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [fullName, username, email, phone, hashedPassword, referral, reason]
    );

    return result.rows[0];
};

const getUserByUsername = async (username) => {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0];
};

module.exports = {
    createUser,
    getUserByUsername
};
