function esPalindromo(cadena) {

    const cadenaFormateada = cadena.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  
    return cadenaFormateada === cadenaFormateada.split('').reverse().join('');
}

const texto = "La ruta nos aporto otro paso natural"; 
const resultado = esPalindromo(texto);

if (resultado) {
    console.log("La cadena es un palíndromo.");
} else {
    console.log("La cadena no es un palíndromo.");
}
