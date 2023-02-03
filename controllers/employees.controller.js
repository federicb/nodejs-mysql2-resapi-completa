const getEmployees = (req, res, next) => {
    res.send('Obteniendo empleados')
    }

const postEmployees = (req, res, next) => {
    res.send('Creando empleados')
    }

const putEmployees = (req, res, next) => {
    res.send('Actualizando empleado')
    }

const deleteEmployees = (req, res, next) => {
    res.send('Eliminando  empleados')
    }

module.exports = {getEmployees, postEmployees, putEmployees, deleteEmployees}