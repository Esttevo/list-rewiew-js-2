let supplies = ['Aço', 'Alumínio', 'Cobre'];

console.log(supplies[1]);

supplies.push('Polímero');

supplies.shift();

console.log(supplies.length);

for (let i = 0; i < supplies.length; i++){
    console.log(supplies[i]);
}

supplies.forEach(element => {
    console.log(`Insumo pronto para uso: ${element}`);
});

let variavel = supplies.map() 