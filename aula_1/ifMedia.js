let entrada = require('prompt-sync')();
let valor = '';

console.log('Programa - Media de alunos');
valor = entrada('Digite a primeira nota: ');
let n1 = parseFloat(valor);
valor = entrada('Digite a segunda nota: ');
let n2 = parseFloat(valor);
valor = entrada('Digite a terceira nota: ');
let n3 = parseFloat(valor);
valor = entrada('Digite a quarta nota: ');
let n4 = parseFloat(valor);

let media = (n1 + n2 + n3 + n4) / 4

console.log('\nA média é = ' + media.toFixed(2));

if (media >= 7) {
    console.log('\nSITUAÇÃO: ALUNO APROVADO!');
} else if (media >= 4) {
    console.log('\nSITUAÇÃO: ALUNO EM RECUPERAÇÃO!');
} else {
    console.log('\nSITUAÇÃO: ALUNO REPROVADO!');
}