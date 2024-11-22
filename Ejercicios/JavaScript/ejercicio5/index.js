function calcularFactorial(numero) {
  
    if (numero < 0) {
        return "No se puede calcular el factorial de un número negativo.";
    }
    
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    return factorial;
}

const numero = parseInt(prompt("Introduce un número entero para calcular su factorial:"));

const resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${resultado}`);