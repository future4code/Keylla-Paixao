 // Respostas exercicio interpretação de codigo
 /* 1: 
 a. undefined
 b. null
 c. 21
 d. 0
 e. 19
 f. ...

 2:
 SUBI NUM ÔNIBUS EM MARROCOS SUBI NUM ÔNIBUS EM MIRROCOS 27
 */

 // Respostas exercicio escrita de codigo
 //1:
const nome = prompt ("qual seu nome?")

    const email = prompt ("qual seu E-mail?")

console.log ("O E-mail " + email  + " foi cadastrado com sucesso. Seja bem-vinda(o) " + nome )

//2:
//a:
const comidasFavoritas = ["Maniçoba", 
                        "Tacacá", 
                        "Filhote no tucupi",
                        "Arroz Paraense",
                        "Açaí com Charque",]

                        console.log (comidasFavoritas)

 //b:
const comidasFavoritas1 = ["Maniçoba","Tacacá","Filhote no tucupi","Arroz Paraense", "Açaí"]
console.log ("Essas são as minhas comidas preferidas:")
console.log (comidasFavoritas1 [0])
console.log (comidasFavoritas1 [1])
console.log (comidasFavoritas1 [2])
console.log (comidasFavoritas1 [3])
console.log (comidasFavoritas1 [4])   

//c
const comidasFavoritas2 = ["Maniçoba","Tacacá","Filhote no tucupi","Arroz Paraense", "Açaí"]
    const suaComidaPreferida = prompt ("sua comida preferida?")

        comidasFavoritas2.splice(1,1 , suaComidaPreferida)
        
        console.log (comidasFavoritas2)
        

//3:

let listaDeTarefas = []
let suasTarefas1 = prompt ("liste 1 tarefa que você precisa fazer hoje")
let suasTarefas2 = prompt ("liste outra tarefa que você precisa fazer hoje")
let suasTarefas3 = prompt ("liste uma 3 tarefa que você precisa fazer hoje")
listaDeTarefas = [suasTarefas1, suasTarefas2, suasTarefas3]

console.log (listaDeTarefas)

let indice = prompt ("quais delas você ja fez hoje? 0, 1, 2?")

listaDeTarefas.splice (indice, 1)

console.log (listaDeTarefas)


