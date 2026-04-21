let produtos = [{ nome: "Camiseta", preco: 210.00 }, { nome: "Calça", preco: 150.00 }, { nome: "Tênis", preco: 220.00 }];

let desconto = produtos.filter(p => p.preco > 100).map(p => ({ nome: p.nome, precoComDesconto: (p.preco * (1 - 0.1)).toFixed(2) }));
console.log(desconto);