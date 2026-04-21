const nome = "Niobio";
let preco = 100;
let desconto = 0.3; // 30% de desconto
let precocomdesconto = preco * (1 - desconto);
if (precocomdesconto > 50) {
    // maior que 50
    console.log(`O produto ${nome} com desconto custa R$${precocomdesconto.toFixed(2)} e é uma boa compra!`);
} else if (precocomdesconto < 50) {
    // menor que 50
    console.log(`O produto ${nome} com desconto custa R$${precocomdesconto.toFixed(2)} e não é uma boa compra!`);
} else {
    // igual a 50
    console.log(`O produto ${nome} com desconto custa R$${precocomdesconto.toFixed(2)} e é uma compra justa!`);
}
