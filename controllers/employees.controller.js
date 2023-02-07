const pool = require('../db.js');

const getEmployees = async (req, res, next) => {
    try{
        // throw new Error('Mi error') //generar el error de conexion para probar el manejo de errores (trycatch)
        const [row] = await pool.query('SELECT * FROM employee')
        res.json(row)
    }catch(error){
        return res.status(500).json({
            message: 'Something was wrong'
        })
    }
}

const getEmployee = async (req, res) => {
    
    try{
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
        console.log(rows)
        if (rows.length <= 0){
            return res.status(404).json({
                mesaje: 'Employee not found'
            })
        }    
        res.json(rows[0])
    }catch(error){
        return res.status(500).json({
            message: 'Something was wrong'
        })
    }      
}

const createEmployee = async (req, res, next) => {
    
    try{
        const {name, salary} = req.body
        // console.log(req.body)
        const [rows] = await pool.query('INSERT INTO employee(name, salary) VALUES (?, ?)', [name, salary])
        // console.log(name, salary)
        res.send({
            id: rows.insertId,
            name,
            salary        
        })
    }catch(error){
        return res.status(500).json({
            message: 'Something was wrong'
        })
    }
}

const updateEmployee = async (req, res, next) => {
    
    try{
        // throw new Error('Mi error')
        const {id} = req.params
        const {name, salary} = req.body
        // console.log(id, name, salary)
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?',[name, salary, id])
        // console.log(result)
    
        if (result.affectedRows === 0){
            return res.status(404).json({
                message: 'Employee not found'
            })
        }
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
        res.json(rows[0])
    }catch(error){
        return res.status(500).json({
            message: 'Something was wrong'
        })
    }
}

const deleteEmployee = async (req, res, next) => {
    try{
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
    
        if(result.affectedRows <= 0){
            return res.status(404).json({
                message: 'Employee not found'
            })
        }
        res.sendStatus(204)  ///// todo ha ido bien pero no envia datos
    }catch(error){
        return res.status(500).json({
            message: 'Something was wrong'
        })        
    }
}


module.exports = {
    getEmployees, 
    getEmployee, 
    createEmployee, 
    updateEmployee, 
    deleteEmployee
}