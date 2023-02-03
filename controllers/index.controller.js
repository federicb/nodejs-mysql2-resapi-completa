const pool = require('../db.js');


const index = (req, res, next) => {
    res.send('Página principal')
  }

const ping = async (req, res, next) => {
    const [result] = await pool.query('SELECT 1 + 1 AS RESULT') //[] para que el resultado se obtenga dentro del array
    res.json(result[0])
  }


  module.exports = {
    ping,
    index
}