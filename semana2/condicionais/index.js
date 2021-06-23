// interpretação de codigo
// 1
//a- O codigo pega o numero inserido no propmt transforma de string para number depois divide por 2, 
//pega o resto da divisão e compara  com zero. Ele testa se o numero é dividivel por 2 se sim o resto
// será igual a zero.
//b- para numeros pares
//c- para numeros impares

//2
//a-Para dizer o preço da fruta que esta sendo pesquisada
//b-O preco da fruta Maçã é 2.25 R$
//c-O preco da fruta Pêra é 5.5 R$, pois no preço da pêra esta presente, mas o programa leria
// tudo ate o final mesmo apos achar a fruta pesquisada

//3
//a- Ta armazenando em uma variável um prompt que solicita um numero ao usuario e ainda 
// transforma a string inserida em number.
//b-Deveria ser essa mensagem é secreta para as duas ocasioes, mas dará um erro.
//c- o erro ocorre pois o console.log solicita algo que não esta podendo ser acessado por ele.

//escrita de codigo
//1- pode ou não dirigir

const idade = Number(prompt("Qual sua idade?"))

    let armazenaIdade = idade

 if (armazenaIdade >= 18) {
    console.log ("Você pode dirigir")
}else{
    console.log ("Você não pode dirigir")

}
console.log ()

//2- que turno do dia o aluno estuda

const turnoAluno = 
prompt("Qual seu turno? Digite M para matutino, V para vespertino, N para noturno")

let armazenaTurno = turnoAluno.toUpperCase(turnoAluno)

    if (armazenaTurno === "M" ) {
        console.log ("Bom dia! ")
    }else if (armazenaTurno === "V" ) {
        console.log ("Boa Tarde!")
    }else{console.log ("Boa Noite!")}

    console.log ()
    
//3 repetindo usando o switch case

const turnoAluno = 
prompt("Qual seu turno? Digite M para matutino, V para vespertino, N para noturno")

    let armazenaTurno = turnoAluno.toUpperCase(turnoAluno)
    switch (armazenaTurno){
        case 'M':
            console.log ('Bom dia!')
            break

        case 'V':
            console.log ('Boa Tarde!')
            break
        
        case 'N':
        console.log ('Boa Noite!')
        break
    }
    console.log ()

//4 indo ao cinema

const filme  = prompt("Qual o gênero do seu filme?")

const valorIngresso = Number(prompt("Qual o preço do ingresso?"))

const tipoDeFilme = filme.toLowerCase(filme)

const ingresso = valorIngresso

if (tipoDeFilme === "fantasia" && ingresso < 15){
    console.log ("Bom filme!")
}else{ console.log ("Escolha outro filme :(")}

console.log ()

// Desafio
//1
const filme  = prompt("Qual o gênero do seu filme?")

const valorIngresso = Number(prompt("Qual o preço do ingresso?"))

const lanche  = prompt("Qual lanchinho você vai comprar?")

const tipoDeFilme = filme.toLowerCase(filme)

const ingresso = valorIngresso

const tipoDelanche = lanche

if (tipoDeFilme === "fantasia" && ingresso < 15){
    console.log (`Bom filme e aproveite o seu ${tipoDelanche}`)
}else{ console.log ("Escolha outro filme :(")}

console.log ()

//2
const nomeCompleto  = prompt("Qual o seu nome completo?")

const tipoDeJogo  =
prompt("Qual o seu tipo de jogo? IN (internacional) ou DO (domestico)?")

const etapaDoJogo  =
prompt("Qual etapa do jogo? SF semi-final; DT decisão de terceiro lugar e FI final")

const categoria = prompt("Qual categoria?")

const ingressos = prompt("Quantos ingressos você deseja comprar?")

const nomeDoCliente = nomeCompleto

const jogoCompradoTipo = tipoDeJogo

const etapaComprada = etapaDoJogo

const categoriaComprada = categoria

const quantidadeDeIngressosComprados = ingressos

(nome, jogo, etapa, categoria, ingressos) => {
    
 }
