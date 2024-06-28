const Producto = require("../clases/productoClase");
const ConectarBDP=require("./conectarBDP");
class productoBD extends ConectarBDP{
    constructor(){
        super();
    }
    async nuevoProducto(producto) {
        const sql = "INSERT INTO producto VALUES (NULL,'"+producto.nomProd+"','"+producto.descProd+"','"+producto.stockProd+"');";
        try {
            await this.conectarMySqlP();
            await this.conexionP.execute(sql, [producto.nomProd, producto.descProd, producto.stockProd]);
            console.log("Se creó un nuevo producto");
            await this.cerrarConexionP();
        } catch (error) {
            console.log("Error al agregar producto: " + error);
            console.error(sql);
        }
    }
    async mostrarProductos() {
        const sql = "SELECT * FROM producto;";
        try {
            await this.conectarMySqlP();
            const [productosMySql] = await this.conexionP.query(sql);
            await this.cerrarConexionP();
            console.log("Los datos se obtuvieron correctamente");
            return productosMySql;
        } catch (error) {
            console.error("Error al obtener los productos: " + error);
            console.error(sql);
            return null;
        }
    }
    async productoId(idProd) {
        const sql = "SELECT * FROM producto WHERE idProd = ?";
        try {
            await this.conectarMySqlP();
            const [[producto]] = await this.conexionP.execute(sql, [idProd]);
            await this.cerrarConexionP();
            return producto; // Asegúrate de devolver el producto
        } catch (error) {
            console.error("Error al consultar por id " + error);
            console.error(sql);
            return null;
        }
    }    
    async editarProducto(producto) {
        const sql = "UPDATE producto SET nomProd = ?, descProd = ?, stockProd = ? WHERE idProd = ?";
        try {
            await this.conectarMySqlP();
            await this.conexionP.execute(sql, [producto.nomProd, producto.descProd, producto.stockProd, producto.idProd]);
            await this.cerrarConexionP();
            console.log("Actualización correcta del producto");
        } catch (error) {
            console.error("Error al editar el producto " + error);
            console.error(sql);
        }
    }    
    async borrarProducto(idProd){
        const sql="DELETE FROM producto WHERE idProd="+ idProd;
        try{
            await this.conectarMySqlP();
            await this.conexionP.execute(sql);
            await this.cerrarConexionP();
            console.log("Procuto borrado");
        }catch (error) {
            console.error("Error al borrar el producto" + error);
            console.log(sql);
        }
    }
}

module.exports = productoBD;