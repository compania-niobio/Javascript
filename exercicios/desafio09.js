let valocidade = 120;
if (valocidade > 100) {
    console.log("Você foi multado por excesso de velocidade.");
} else if (valocidade <= 100 && valocidade >= 80) {
    console.log("Você está dentro do limite de velocidade.");
} else {
    console.log("Você está muito lento, cuidado com os outros motoristas.");
}

const idade = 16;
if (idade < 18) {
    console.log("Você é menor de idade não pode dirigir.");
}