class Producto {
    constructor(producto1) {
        this.idProd = producto1.idProd;
        this.nomProd = producto1.nomProd;
        this.descProd = producto1.descProd;
        this.stockProd = producto1.stockProd;
    }

    set idProd(idProd) {
        this._idProd = idProd;
    }

    set nomProd(nomprod) {
        const regexNomProd = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ' ]{0,24}$/;
        if (regexNomProd.test(nomprod)) {
            this._nomProd = nomprod;
        } else {
            console.log("Error al insertar el nombre");
        }
    }

    set descProd(descProd) {
        const regexDesc = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ' ]{0,24}$/;
        if (regexDesc.test(descProd)) {
            this._descProd = descProd;
        } else {
            console.log("Error al insertar la descripción");
        }
    }

    set stockProd(stockProd) {
        const regexStock = /^[0-9]+$/;
        if (regexStock.test(stockProd)) {
            this._stockProd = stockProd;
        } else {
            console.log("Error al insertar la cantidad de stock");
        }
    }

    get idProd() {
        return this._idProd;
    }

    get nomProd() {
        return this._nomProd;
    }

    get descProd() {
        return this._descProd;
    }

    get stockProd() {
        return this._stockProd;
    }

    get mostrarDatos() {
        return {
            idProd: this.idProd,
            nomProd: this.nomProd,
            descProd: this.descProd,
            stockProd: this.stockProd
        };
    }
}

module.exports = Producto;
