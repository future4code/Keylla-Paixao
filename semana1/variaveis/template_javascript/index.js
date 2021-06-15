/* respostas do exercicio de interpretação de escrita:
1- Primeiro será impresso 10 e depois será impresso 10 5
2- será impresso 10 10 10
3- o programa armazena as horas trabalhadas por dia e quanto é recebido por dia de uma pessoa,
e depois emite um alerta dizendo quanto a pessoa recebe por hora trabalhada dividindo o quanto
se recebe pelas horas trabalhadas. Como sugestão para a let p eu usaria let horasDeTrabDia 
e para a let t eu usaria let diaria*/


// exercicio escrita do codigo

const saudacao = "Olá"
const idade = "você tem"
const tempo = "anos."
let seuNome = prompt ("Qual seu nome?")
let suaIdade = prompt ("Qual sua idade")
typeof "seuNome"
typeof "suaIdade"
// ambas são null, pois não foram definidas
// no segundo typeof ambas são string.
console.log (saudacao, seuNome, idade, suaIdade, tempo)

let pergunta1 = prompt ("Você  bebeu água hoje?")
console.log ("Você  bebeu água hoje?" + pergunta1)
let pergunta2 = prompt ("Você bebe pelo menos 2 litros de água por dia?")
console.log ("Você bebe pelo menos 2 litros de água por dia?" + pergunta2)
let pergunta3 = prompt ("Você  possui uma garrafa de água em seu local de trabalho ou estudo?")
console.log ("Você  possui uma garrafa de água em seu local de trabalho ou estudo?" + pergunta3)

let a = 10
let b = 25
let c = 4
 c = a
 a = b
 b = c

 console.log (" novo valor de a é", a)
 console.log (" novo valor de b é" ,  b)

 
