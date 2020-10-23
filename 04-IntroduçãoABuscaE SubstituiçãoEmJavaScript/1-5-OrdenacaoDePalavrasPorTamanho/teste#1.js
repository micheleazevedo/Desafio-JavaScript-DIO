let cases = parseInt(gets()); //Casos de valor a receber
let arrivingSeparated = []; 

for (let i = 0; i < cases; i++) {
    arrivingSeparated[i] = gets() // Recebendo casos
            .split(' ') // Separando palavras
            .sort((a, b) => (b.length > a.length) ? 1 : //Ordenar por comprimento
                (b.length === a.length)  ? (a > b) -1 : -1) //Pedido por ASC
            .toString()
            .replace(/,/gi, " ")
}
for (sentence in arrivingSeparated) console.log(arrivingSeparated[sentence]);