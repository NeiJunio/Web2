let entrada = require('prompt-sync')(); //prompt-sync --> mostra uym prompt na tela pra inserir algo;

let nome;

nome = entrada('Digite seu nome: ');

console.log(`O nome digitado foi ${nome}`);

entrada('Pressione enter para encerrar!');