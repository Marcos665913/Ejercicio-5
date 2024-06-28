require('dotenv').config();
class ConectarBD{
    constructor(){
        this.conexion=null;
        this.mysql=require("mysql2/promise");
    }
    async conectarMySql(){
        try{
            this.conexion=await this.mysql.createConnection({
                host:process.env.HOSTMYSQL,
                user:process.env.USERMYSQL,
                password:process.env.PASSWORDMYSQL,
                database:process.env.DATABASEMYSQL,
                port:process.env.PORTMYSQL
            })
        console.log("conectado a Mysql");
        return this.conexion;
    } catch (error){
        console.error("Error al conectar con MySql" + error);
    }
    }
    async cerrarConexion (){
        if(this.conexion!=null){
            try{
                await this.conexion.end();
                console.log("Conexion de MySql cerrada");
            } catch(error){
                console.error("Error al desconectar de MySql" + error);
            }
        }
    }
}

module.exports=ConectarBD;