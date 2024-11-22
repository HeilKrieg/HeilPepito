var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


var dni = parseInt(prompt("Introduce el número de DNI (sin la letra):"));
var letraUsuario = prompt("Introduce la letra del DNI (en mayúsculas):");

if (dni < 0 || dni > 99999999) {
    console.log("El número de DNI proporcionado no es válido.");
} else {
    var resto = dni % 23;
    var letraCalculada = letras[resto];

    if (letraCalculada !== letraUsuario) {
        console.log("La letra que has indicado no es correcta.");
    } else {
        console.log("El número y la letra de DNI son correctos.");
    }
}
