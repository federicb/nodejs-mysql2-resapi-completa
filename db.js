const { createPool } = require('mysql2/promise') //promise sirve para poder utilizar async-await en el index

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '0980',
    port: '3306',
    database: 'companydb'
})

module.exports = pool