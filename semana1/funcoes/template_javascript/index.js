// respostas exercicio interpretação de codigo
/*
 1: A- Na primeira vez que é executatdo da um erro em relação a variavel
 que eu não sei descrever, mas acho que é por que a função não foi chama-
 da corretamente.
 
B- ja na segunda sai 50 se os dois minha função forem executados juntamente 
e 10 e 50 respectivamente se executados em separado, pois a funçao retorna 
a variavel multiplicada por 5.

2:
A- A função analisa se o texto inserido no prompt possui a palavra cenoura e 
tambem coloca todo o texto em letras minusculas.

B-
i. eu gosto de cenoura true
ii- cenoura é bom para vista true
iii- cenouras crescem na terra false

*/

// respostas exercicio escrita de codigo

//1
//a:
function imprimeInformacoesSobreMim(){
    console.log ("Eu sou a Keylla, tenho 31 anos, moro em Manaus e sou estudante")
}
imprimeInformacoesSobreMim()

//b:
function imprimeInformacoesdapessoa(nome, idade, endereco, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${endereco} e sou ${profissao}.`)
}

const nomeInserido = prompt("Insira o seu nome")
const idadeInserida = Number(prompt("Insida a sua idade"))
const enderecoInserido = prompt("Insira a cidade onde você mora")
const profissaoInserida = prompt("Insira sua profissao")
imprimeInformacoesdapessoa(nomeInserido, idadeInserida, enderecoInserido, profissaoInserida)

//2
//a
function soma(numero1, numero2){
    const soma = numero1 + numero2
    return soma
}
const operacao = soma (1, 4)
console.log (operacao)

//b
function verificarSeOPrimeiroNumeroEhMaiorOuIgualAoSegundo(numeroprimeiro, numerosegundo){
    const verificarSeOPrimeiroNumeroEhMaiorOuIgualAoSegundo = numeroprimeiro >= numerosegundo
    return verificarSeOPrimeiroNumeroEhMaiorOuIgualAoSegundo
}
const operacao1 = verificarSeOPrimeiroNumeroEhMaiorOuIgualAoSegundo (1, 4)
console.log (operacao1)

//c
function ehPar(numero){
    const ehPar = numero % 2
    return ehPar
}
const divisao = ehPar (78)
divisao === 0


//d
function numeroDeLetrasEDeixaTudoMaiuscula(frase)




