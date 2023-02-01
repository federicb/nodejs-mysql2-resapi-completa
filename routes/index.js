const express = require('express');
const router = express.Router();
const pool = require('../db.js')

/* GET home page. */
router.get('/ping', async (req, res, next) => {
  const [result] = await pool.query('SELECT 1 + 1 AS RESULT') //[] para que el resultado se obtenga dentro del array
  res.json(result[0])
});

router.get('/', (req, res, next) => {
  res.send('Holaa')
});

router.get('/employees', (req, res, next) => {
  res.send('Obteniendo empleados')
});

router.post('/employees', (req, res, next) => {
  res.send('Creando empleados')
});

router.put('/employees', (req, res, next) => {
  res.send('Actualizando empleado')
});

router.delete('/employees', (req, res, next) => {
  res.send('Eliminando  empleados')
});

module.exports = router;
