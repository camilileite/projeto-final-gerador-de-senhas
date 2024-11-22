

const botoes = document.querySelectorAll('.parametro-senha__botao');
const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;

botoes[0].onclick = diminuirSenha;
botoes[1].onclick = aumentarSenha;

function diminuirSenha (){
    if (tamanhoSenha > 0) {
        tamanhoSenha--;
        numeroSenha.textContent = tamanhoSenha;     
    } 
    geraSenha();
}

function aumentarSenha (){
    if (tamanhoSenha < 12) {
        tamanhoSenha++;
        numeroSenha.textContent = tamanhoSenha;
    }
    geraSenha();
}

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function geraSenha () {
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++) {
        let numeroAleatorio = Math.floor(Math.random()*letrasMaiusculas.length);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    console.log(senha);

}

geraSenha();
//