const { Pool } = require('pg');

const pool = new Pool({
    host: 'ec2-18-234-17-166.compute-1.amazonaws.com',
    user: 'baffuspbyetbey',
    password: 'cbd4d0285f82248909d8f606f7dd1dd0b9b0ac05a388cff80119a6526b521255',
    database: 'd7l1uabp6jtk0d'
});

const getUsers = async(req, res) => {
    const response = await pool.query('SELECT * FROM users');
    console.log(response.rows);
    res.send('users');
}


module.exports = {
    getUsers
}