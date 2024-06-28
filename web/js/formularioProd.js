var regexNomProd = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ' ]{0,24}$/; // Primer caracter mayúscula, hasta 25 caracteres, permite espacios
var regexDesc = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ' ]{0,24}$/; // Primer caracter mayúscula, hasta 25 caracteres, permite espacios
var regexStock = /^[0-9]+$/; // Exactamente tres dígitos

var enviarDatos = 0;

var nomprod = document.getElementById("nombre");
var mensajeNombre = document.getElementsByClassName("mensajeNombre")[0];
var circleCrossNombre = document.getElementsByClassName("circleCrossNombre")[0];
var circleCheckNombre = document.getElementsByClassName("circleCheckNombre")[0];

var descProd = document.getElementById("descripcion");
var mensajeDesc = document.getElementsByClassName("mensajeDesc")[0];
var circleCrossDesc = document.getElementsByClassName("circleCrossDesc")[0];
var circleCheckDesc = document.getElementsByClassName("circleCheckDesc")[0];

var stockProd = document.getElementById("stock");
var mensajeStock = document.getElementsByClassName("mensajeStock")[0];
var circleCrossStock = document.getElementsByClassName("circleCrossStock")[0];
var circleCheckStock = document.getElementsByClassName("circleCheckStock")[0];

// Validación del nombre del producto
nomprod.addEventListener("blur", () => {
    if (!regexNomProd.test(nomprod.value)) {
        mensajeNombre.classList.remove("ocultar");
        nomprod.classList.add("error");
        nomprod.classList.remove("correcto");
        circleCrossNombre.classList.remove("ocultar");
        circleCheckNombre.classList.add("ocultar");
    } else {
        mensajeNombre.classList.add("ocultar");
        nomprod.classList.add("correcto");
        nomprod.classList.remove("error");
        circleCrossNombre.classList.add("ocultar");
        circleCheckNombre.classList.remove("ocultar");
    }
});

// Validación de la descripción del producto
descProd.addEventListener("blur", () => {
    if (!regexDesc.test(descProd.value)) {
        mensajeDesc.classList.remove("ocultar");
        descProd.classList.add("error");
        descProd.classList.remove("correcto");
        circleCrossDesc.classList.remove("ocultar");
        circleCheckDesc.classList.add("ocultar");
    } else {
        mensajeDesc.classList.add("ocultar");
        descProd.classList.add("correcto");
        descProd.classList.remove("error");
        circleCrossDesc.classList.add("ocultar");
        circleCheckDesc.classList.remove("ocultar");
    }
});

// Validación del stock del producto
stockProd.addEventListener("blur", () => {
    if (!regexStock.test(stockProd.value)) {
        mensajeStock.classList.remove("ocultar");
        stockProd.classList.add("error");
        stockProd.classList.remove("correcto");
        circleCrossStock.classList.remove("ocultar");
        circleCheckStock.classList.add("ocultar");
    } else {
        mensajeStock.classList.add("ocultar");
        stockProd.classList.add("correcto");
        stockProd.classList.remove("error");
        circleCrossStock.classList.add("ocultar");
        circleCheckStock.classList.remove("ocultar");
    }
});

// Manejo del envío del formulario
var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    var avanzar = 0;

    // Validación del nombre del producto
    if (!regexNomProd.test(nomprod.value)) {
        mensajeNombre.classList.remove("ocultar");
        nomprod.classList.add("error");
        nomprod.classList.remove("correcto");
        circleCrossNombre.classList.remove("ocultar");
        circleCheckNombre.classList.add("ocultar");
    } else {
        mensajeNombre.classList.add("ocultar");
        nomprod.classList.add("correcto");
        nomprod.classList.remove("error");
        circleCrossNombre.classList.add("ocultar");
        circleCheckNombre.classList.remove("ocultar");
        avanzar++;
    }

    // Validación de la descripción del producto
    if (!regexDesc.test(descProd.value)) {
        mensajeDesc.classList.remove("ocultar");
        descProd.classList.add("error");
        descProd.classList.remove("correcto");
        circleCrossDesc.classList.remove("ocultar");
        circleCheckDesc.classList.add("ocultar");
    } else {
        mensajeDesc.classList.add("ocultar");
        descProd.classList.add("correcto");
        descProd.classList.remove("error");
        circleCrossDesc.classList.add("ocultar");
        circleCheckDesc.classList.remove("ocultar");
        avanzar++;
    }

    // Validación del stock del producto
    if (!regexStock.test(stockProd.value)) {
        mensajeStock.classList.remove("ocultar");
        stockProd.classList.add("error");
        stockProd.classList.remove("correcto");
        circleCrossStock.classList.remove("ocultar");
        circleCheckStock.classList.add("ocultar");
    } else {
        mensajeStock.classList.add("ocultar");
        stockProd.classList.add("correcto");
        stockProd.classList.remove("error");
        circleCrossStock.classList.add("ocultar");
        circleCheckStock.classList.remove("ocultar");
        avanzar++;
    }

    // Si todas las validaciones son correctas, enviar el formulario
    if (avanzar === 3) {
        formulario.submit();
    }
});