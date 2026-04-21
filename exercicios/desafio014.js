/* let numeros = [5, 10, 15, 20, 25]
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // Acessa cada elemento do array numeros usando um loop
} */


    let numeros = [25, 50, 75, 100, 125];

    function dobro(n) {
        return n * 2;
    }

    for (let i = 0; i < numeros.length; i++) {

        console.log(dobro(numeros[i])); // Acessa cada elemento do array numeros usando um loop
    }
        

        //Outra maneira de fazer seria 
        

    let numeros = [25, 50, 75, 100, 125];

    let dobrados = numeros.map(n => n * 2); // Usa o método map para criar um novo array com os valores dobrados

    console.log(dobrados); // Imprime o array com os valores dobrados
