const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.HOST || 'localhost',
    user: procces.env.USER || 'usuario',
    password: procces.env.PASSWORD || 'senha',
    database: procces.env.DATABASE || 'contatosBD',
    port: process.env.DB_PORT || 3306
});


module.exports = pool.promise();