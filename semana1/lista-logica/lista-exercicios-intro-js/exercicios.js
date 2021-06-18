// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura =  Number (prompt('Digite o valor da altura do retangulo'))
  const largura =  Number (prompt('Digite o valor da largura do retangulo'))
  const areaTotal = altura * largura
  console.log (areaTotal)
  return areaTotal
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual =  Number (prompt('Em qual ano estamos?'))
  const anoNascimento =  Number (prompt('Em qual ano você nasceu?'))
  const calculoDaIdade = anoAtual - anoNascimento
  console.log (calculoDaIdade)
  return calculoDaIdade
 
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
const nome = prompt("Qual o seu nome?")
const idade = Number(prompt("qual a sua idade?"))
const email = prompt("Qual o seu e-mail?")
const mensagem = (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
console.log (mensagem)
return mensagem
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("me fale uma cor favorita")
  const cor2 = prompt("agora outra cor")
  const cor3 = prompt("agora outra cor")
  const suasCoresFavoritas = [cor1, cor2, cor3]
  console.log (suasCoresFavoritas)
  return suasCoresFavoritas
  
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const frase = string.toUpperCase(string)
  return frase
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const coberturaDoValorDoEspetaculo = custo / valorIngresso
return coberturaDoValorDoEspetaculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
const tamanhoString1 = (string1.length)
const tamanhoString2 = (string2.length)
const comparacaoDeStrings = tamanhoString1 === tamanhoString2
return comparacaoDeStrings

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
const primeiroItem = array[0]
return primeiroItem
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoItem = array [array.length -1]
  return ultimoItem
 

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}