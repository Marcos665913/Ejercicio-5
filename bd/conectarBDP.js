class ConectarBDP {
    constructor() {
        this.conexionP = null;
        this.mysql = require("mysql2/promise");
    }

    async conectarMySqlP() {
        try {
            this.conexionP = await this.mysql.createConnection({
                host:process.env.HOSTMYSQL,
                user:process.env.USERMYSQL,
                password:process.env.PASSWORDMYSQL,
                database:process.env.DATABASEMYSQL,
                port:process.env.PORTMYSQL
            });
            console.log("Conectado a MySql");
            return this.conexionP;
        } catch (error) {
            console.error("Error al conectar con MySql: " + error);
        }
    }

    async cerrarConexionP() {
        if (this.conexionP != null) {
            try {
                await this.conexionP.end();
                console.log("Conexión de MySql cerrada");
            } catch (error) {
                console.error("Error al desconectar de MySql: " + error);
            }
        }
    }
}

module.exports = ConectarBDP;
