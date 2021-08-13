const mysql = require("mysql");
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'admin',
    port: 3306,
    database: 'db_vehiculos' 
});

conexion.connect((err)=>{
    if(err){
        console.log(`Error Conexion: ${err}`);
    }else{
        console.log(`Conectado`);
    }
});

module.exports = conexion;
