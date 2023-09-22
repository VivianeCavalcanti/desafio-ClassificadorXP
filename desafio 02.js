var  ranked ='';
saldoRanked (41,5);
 


function saldoRanked(vitoria, derrota) {
    saldo =  vitoria - derrota;
    
    
if (vitoria < 10) {
        ranked = 'Ferro';
    } else if (vitoria >= 11 && vitoria <= 20) {
        ranked = 'Bronze';
    } else if (vitoria >= 21 && vitoria <= 50) {
        ranked = 'Prata';
    } else if (vitoria >= 51 && vitoria <= 80) {
        ranked = 'Ouro';
    } else if (vitoria >= 81 && vitoria <= 90) {
        ranked = 'Diamante';
    } else if (vitoria >= 91 && vitoria <= 100) {
        ranked = 'Lendário';
    } else {
        ranked = 'Imortal';
    }   
     return saldo;
}

console.log('O Herói tem de saldo de ' + saldo + ' está no nível de ' + ranked);