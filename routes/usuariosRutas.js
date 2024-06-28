const ruta=require("express").Router();
//Usuario
const UsuarioClase=require("../clases/usuarioClase");
const usuarioBD=require("../bd/usuariosBD");
const Usuario = require("../clases/usuarioClase");
const usuariosBD = require("../bd/usuariosBD");
//Productos
const ProductoClase=require("../clases/productoClase");
const ProductoBD=require("../bd/productosBD");
const Producto = require("../clases/productoClase");
const productosBD = require("../bd/productosBD");
const productoBD = require("../bd/productosBD");

ruta.get("/", async(req,res)=>{
    const usuariosBD = new usuarioBD();
    const usuariosMySql= await usuariosBD.mostrarUsuarios();
    var usuariosCorrectos=[];
    usuariosMySql.forEach(usuario => {
        var usuario1 = new UsuarioClase(usuario);
        if(usuario1.nombre!=undefined && usuario1.celular!=undefined && usuario1.correo!=undefined){
            usuariosCorrectos.push(usuario);
        }
    });
    console.log(usuariosCorrectos);
    res.render("mostarUsuarios", {usuariosCorrectos});
})

ruta.get("/mostrarProductos", async (req, res) => {
    const productosBD = new ProductoBD();
    const productosMySql = await productosBD.mostrarProductos();
    const prodCorrectos = productosMySql.filter(producto => {
        const producto1 = new ProductoClase(producto);
        return producto1.nomProd != undefined && producto1.descProd != undefined && producto1.stockProd != undefined;
    });
    res.render("mostrarProductos", { prodCorrectos });
});

ruta.post("/agregarUsuario",(req,res)=>{
    var usuario1=new UsuarioClase(req.body);
    if(usuario1.nombre!=undefined && usuario1.celular!=undefined && usuario1.correo!=undefined){
        const usuariosBD = new usuarioBD();
        usuariosBD.nuevoUsuario(usuario1.mostrarDatos);
        res.render("inicio", usuario1.mostrarDatos);
    }else{
        res.render("error");
    }
})

ruta.post("/agregarproducto", (req, res) => {
    const producto1 = new ProductoClase(req.body);
    if (producto1.nomProd != undefined && producto1.descProd != undefined && producto1.stockProd != undefined) {
        const productosBD = new ProductoBD();
        productosBD.nuevoProducto(producto1.mostrarDatos);
        res.render("inicioProd", producto1.mostrarDatos);
    } else {
        res.render("error");
    }
});

ruta.get("/agregarUsuario",(req,res)=>{
    res.render("formulario");
});

ruta.get("/agregarProducto", (req,res)=>{
    res.render("formularioProd");
})

ruta.get("/editarUsuario/:idUsuario", async (req,res)=>{
    try{
    const usuariobd = new usuarioBD();
    const usuario = await usuariobd.usuaioId(req.params.idUsuario);
    res.render("editarUsuario", usuario);
    } catch(error){
        console.log(error)
        res.end;
    }
});

ruta.get("/editarProducto/:idProd", async (req, res) => {
    try {
        const productobd = new ProductoBD();
        const producto = await productobd.productoId(req.params.idProd);
        console.log("Producto obtenido correctamente");
        res.render("editarProducto", producto);
    } catch (error) {
        console.log(error);
        res.end();
    }
});

ruta.post("/editarProducto", async (req, res) => {
    try {
        const productobd = new ProductoBD();
        await productobd.editarProducto(req.body);
        console.log("Producto editado correctamente");
        res.redirect("/mostrarProductos");
    } catch (error) {
        console.log("Error al editar el producto: " + error);
        res.end();
    }
});

ruta.get("/borrarUsuario/:id", async(req,res)=>{
    try{
        const usuariobd=new usuarioBD();
        await usuariobd.borrarUsuario(req.params.id);
        res.redirect("/");
    }catch(error){
        console.error(error);
    }
})

ruta.get("/borrarProducto/:idProd", async(req,res)=>{
    try{
        const productobd=new productoBD();
        await productobd.borrarProducto(req.params.idProd);
        res.redirect("/mostrarProductos");
    }catch(error){
        console.error(error);
    }
})

module.exports=ruta;