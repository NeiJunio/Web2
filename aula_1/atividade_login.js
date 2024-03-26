const entrada = require('prompt-sync')();

const senha = '1234';
let senhaDigitada = '';

senhaDigitada = entrada('Digite a senha: ');

for (let tentativas = 0; tentativas < 3; tentativas++) {

    if (senhaDigitada == senha) {
        console.log('Você acessou o sistema!');
        break;
    } else {
        if (senha != senhaDigitada && tentativas < 2) {
            senhaDigitada = entrada('Digite sua senha novamente: ');
        } else {
            console.log('\n------->> USUÁRIO  BLOQUEADO <<-------');
            console.log('Você excedeu o limite de 3 tentativas!');
        }
    }
}

//--------------------------------------------------//

/*do {
    senhaDigitada = entrada('Digite a senha: ');
    if (senhaDigitada == senha) {
        console.log('Você acessou o sistema!')
        break;
    } else {
        tentativas++;
        if (tentativas == 3) {
            console.log('Você excedeu o limite de 3 tentativas!')
        }
    }
} while (tentativas < 3);*/

//--------------------------------------------------//


/*opção do professor

--> descomenta let tentativas;

do {
    tentativas++;
    if(tentativas>=3){
        break;
    }
    senhaDigitada = entrada('Digite a senha: ');
} while (senha!=senhaDigitada);

if (tentativas<3){
    console.log('Você acessou o sistema!')
} else {
    console.log('Você excedeu o limite de 3 tentativas!')
}*/
