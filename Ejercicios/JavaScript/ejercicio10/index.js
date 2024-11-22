
function simularLanzamientoDados() {
    const resultados = []; 
    const numLanzamientos = 36000;
    
    for (let i = 0; i < 11; i++) {
        resultados[i] = 0;
    }

   
    for (let i = 0; i < numLanzamientos; i++) {
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;
        const suma = dado1 + dado2;
        resultados[suma - 2]++;
    }

    return resultados;
}
const resultados = simularLanzamientoDados();

console.log("Número de apariciones de cada suma:");
for (let i = 0; i < resultados.length; i++) {
    console.log(`Suma ${i + 2}: ${resultados[i]}`);
}
