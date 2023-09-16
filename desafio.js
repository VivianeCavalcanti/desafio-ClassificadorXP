let nameHeroi = 'Viviane'                       // Escreva o nome do herói:
let quantidadeExperencia = 10001                 //Digite o valor de XP do herói:

let level
if (quantidadeExperencia <= 1000) {
    level = 'Ferro';
} else if (quantidadeExperencia >= 1001 && quantidadeExperencia <=2000){
    level = 'Bronze';
} else if (quantidadeExperencia >= 2001 && quantidadeExperencia <=5000){
    level = 'Prata';
} else if (quantidadeExperencia >= 6001 && quantidadeExperencia <=7000){
    level = 'Ouro';
} else if (quantidadeExperencia >= 7001 && quantidadeExperencia <=8000){
    level = 'Platina';
} else if (quantidadeExperencia >= 8001 && quantidadeExperencia <=9000){
    level = 'Ascendente';
} else if (quantidadeExperencia >= 9001 && quantidadeExperencia <=10000){
    level = 'Imortal';
} else {
    level = 'Radiante';
}

console.log ('O Herói de nome ' + nameHeroi + ' está no nível de ' + level);
