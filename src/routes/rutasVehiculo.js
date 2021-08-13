const api = require("express").Router();
const conexion = require('../connection/db');


// rutas
// obtener todos los vehiculos
api.get('/', (req, res) =>{
    let sql = 'select * from vehiculo';
    conexion.query(sql, (err, result) =>{
        if(err) throw err;
        else{
            res.json(result);
        }
    });
});


// obtener un vehiculo
api.get('/:id', (req, res) =>{
    const id = req.params.id;
    let sql = `select * from vehiculo where idVehiculo = ${id}`;
    conexion.query(sql, (err, result) =>{
        if(err) throw err;
        else{
            res.json(result);
        }
    });
});


// agregar vehiculo
api.post('/', (req, res) =>{
    const {marca, modelo, anio, placa, estado} = req.body;
    let sql = `insert into vehiculo(marca, modelo, anio, placa, estado)
                    values('${marca}', '${modelo}', '${anio}', '${placa}', '${estado}')`;
    conexion.query(sql, (err, result) =>{
        if(err) throw err;
        else{
            res.json({status: 'Vehiculo agregado'});
        }
    });
});


// eliminar vehiculo
api.delete('/:id', (req, res) =>{
    const id = req.params.id;
    let sql = `delete from vehiculo where idVehiculo = ${id}`;
    conexion.query(sql, (err, result) =>{
        if(err) throw err;
        else{
            res.json({status: 'Vehiculo eliminado'});
        }
    });
});


// modificar vehiculo
api.put('/:id', (req, res) =>{
    const id = req.params.id;
    const {marca, modelo, anio, placa, estado} = req.body;
    let sql = `update vehiculo set
                marca = '${marca}',
                modelo = '${modelo}',
                anio = '${anio}',
                placa = '${placa}',
                estado = '${estado}'
                where idVehiculo = ${id}`;

    conexion.query(sql, (err, result) =>{
        if(err) throw err;
        else{
            res.json({status: 'Vehiculo modificado'});
        }
    });
});


/*
	Nota: por problemas con la letra ñ, se cambio la palabra año por anio.
*/

module.exports = api;