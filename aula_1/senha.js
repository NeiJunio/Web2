const entrada = require('prompt-sync')();

const senha = '123456789';
let senhaDigitada = '';

do {
    senhaDigitada = entrada('Digite a senha: ');
} while (senha != senhaDigitada);

console.log('Você acessou o sistema');