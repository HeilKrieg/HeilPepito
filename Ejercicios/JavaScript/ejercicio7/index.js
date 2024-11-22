function verificarCadena(cadena) {

    if (cadena === cadena.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas.";
    }
   
    else if (cadena === cadena.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    }

    else {
        return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
    }
}
const texto = "holamundo";
const resultado = verificarCadena(texto);
console.log(resultado);
