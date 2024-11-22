
function parOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}
const numero = 7;
const resultado = parOImpar(numero);
console.log(resultado);
